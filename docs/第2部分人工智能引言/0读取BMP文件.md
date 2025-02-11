---
sidebar_position: 0
---

个人的经验可以被整理成某种规律，

针对某个事项的规律集合起来便成了算法，

算法是机器学习的核心，

我们通过机器学习完成人工智能（AI）的构建。

给你一张图片，你可以分辨出是什么颜色，思考下如何让机器完成？

## 读取BMP文件

### 描述

不使用第三方模块的前提下，完成对24位bmp图像的图像数据分析与像素读取。
程序设计需要体现面向对象编程的特点，以创建类的形式编写。

参考资料：

以一张2*2的24位图的bmp格式图片为例

| Offset | Offset10 | Size | Hex value | Value | Description |
|---|---|---|---|---|---|
| BMP Header |  |  |  |  |  |
| 0h | 0 | 2 | 42 4D | "BM" | ID field \(42h, 4Dh\) |
| 2h | 2 | 4 | 46 00 00 00 | 70 bytes \(54\+16\) | BMP 文件的大小（54 字节标头 \+ 16 字节数据） |
| 6h | 6 | 2 | 00 00 | Unused | 特定应用 |
| 8h | 8 | 2 | 00 00 | Unused | 特定应用 |
| Ah | 10 | 4 | 36 00 00 00 | 54 bytes \(14\+40\) | 可以找到像素阵列（位图数据）的偏移量 |
| DIB Header\-Device Independent Bitmaps\-设备无关位图 |  |  |  |  |  |
| Eh | 14 | 4 | 28 00 00 00 | 40 bytes |  DIB 头中的字节数（从此时开始） |
| 12h | 18 | 4 | 02 00 00 00 | 2 pixels \(left to right order\) | 位图的宽度（以像素为单位） |
| 16h | 22 | 4 | 02 00 00 00 | 2 pixels \(bottom to top order\) | 位图的高度（以像素为单位）。从下到上的像素顺序为正。 |
| 1Ah | 26 | 2 | 01 00 | 1 plane | 使用的颜色平面数量 |
| 1Ch | 28 | 2 | 18 00 | 24 bits | 每个像素的位数 |
| 1Eh | 30 | 4 | 00 00 00 00 | 0 | BI\_RGB，未使用像素阵列压缩 |
| 22h | 34 | 4 | 10 00 00 00 | 16 bytes | 原始位图数据的大小（包括填充） |
| 26h | 38 | 4 | 13 0B 00 00 | 2835 pixels/metre horizontal | 图像的打印分辨率， |
| 2Ah | 42 | 4 | 13 0B 00 00 | 2835 pixels/metre vertical | 72 DPI × 39\.3701 inches per metre yields 2834\.6472 |
| 2Eh | 46 | 4 | 00 00 00 00 | 0 colors | 调色板中的颜色数量 |
| 32h | 50 | 4 | 00 00 00 00 | 0 important colors | 0 表示所有颜色都很重要 |
| Start of pixel array \(bitmap data\) |  |  |  |  |  |
| 36h | 54 | 3 | 00 00 FF | 0 0 255 | Red, Pixel \(x=0, y=1\) |
| 39h | 57 | 3 | FF FF FF | 255 255 255 | White, Pixel \(x=1, y=1\) |
| 3Ch | 60 | 2 | 00 00 | 0 0 | Padding for 4 byte alignment \(could be a value other than zero\) |
| 3Eh | 62 | 3 | FF 00 00 | 255 0 0 | Blue, Pixel \(x=0, y=0\) |
| 41h | 65 | 3 | 00 FF 00 | 0 255 0 | Green, Pixel \(x=1, y=0\) |
| 44h | 68 | 2 | 00 00 | 0 0 | Padding for 4 byte alignment \(could be a value other than zero\) |

bit（位）比特是计算机运算的基础，属于二进制的范畴

byte字节是内存的基本单位

8 bit = 1 byte

```python showLineNumbers
# 参考知识

data = b'\xff' # b代表这是一个二进制数据，\x代表这是一个十六进制的数据

bin_data = bin(int.from_bytes(data))[2:]  # -> 11111111

int(bin_data, 2) # -> 255

# 打开文件作为可编辑对象
with open("r.bmp", "rb") as f:
    d = f.read()
    data = bytearray(d)
# 试着把54到246的数据都改成0x00，即黑色。这样整张图片都变成黑色了
for i in range(54, 246):
    data[i]= 0x00
# 保存文件
with open("black.bmp", "wb") as f:
    f.write(data)
```

### 题解

```python showLineNumbers
class Readbmp:
    """
    read bmp files
    图片的格式说明：https://en.wikipedia.org/wiki/BMP_file_format#Example_1
    """

    def __init__(self, pic_path) -> None:
        self.pic_path = pic_path
        self.read_color()

    def read_color(self):
        if self.pic_path.endswith(".bmp"):
            self.read_bmp()
        else:
            print("不支持的格式")

    def read_bmp(self):
        bin_datas = []
        """read file data to bin"""
        with open(self.pic_path, "rb") as f:
            while True:
                if len(bin_datas) == f.tell():
                    data = f.read(1)
                    bindata = bin(int.from_bytes(data))[2:]
                    if len(bindata) < 8:
                        bindata = (8 - len(bindata)) * "0" + bindata
                    bin_datas.append(bindata)
                else:
                    bin_datas = bin_datas[:-1]
                    break

        self.bin_pic_head = bin_datas[0:2]  # ID field
        self.bin_pic_size = bin_datas[2:6]  # Size of the BMP file 文件大小
        self.bin_pic_exe = bin_datas[6:10]  # 特定应用，默认为0
        self.bin_pic_address = bin_datas[10:14]  # 图片信息开始地址
        self.bin_pic_dib = bin_datas[14:18]  # DIB 头中的字节数
        self.bin_pic_w = bin_datas[18:22]  # 图片像素宽度
        self.bin_pic_h = bin_datas[22:26]  # 图片像素高度
        self.bin_pic_color_num = bin_datas[26:28]  # 使用颜色平面数
        self.bin_pic_color_long = bin_datas[28:30]  # 每个像素位数
        self.bin_pic_bi = bin_datas[30:34]  # BI_RGB
        self.bin_pic_big = bin_datas[34:38]  # 原始图像数据大小
        self.bin_pic_printpix = bin_datas[38:42]  # 打印分辨率
        self.bin_pic_dpi = bin_datas[42:46]  # DPI
        self.bin_pic_color_num = bin_datas[46:50]  # 调色板中颜色数量
        self.bin_pic_color_important = bin_datas[50:54]  # 重要颜色数量
        self.bin_pic_data = bin_datas[54:]  # 图片数据
        self.bin_to_pic()

    # 将二进制数据转化成十进制数据
    def bin_to_dec(self, bin_datas):
        bin_data = ""
        for i in reversed(bin_datas):
            bin_data += i
        return int(bin_data, 2)

    # 将列表转为3个一组的二维列表
    def change_data(self, data):
        data_2d = []
        x = []
        for i in data:
            x.append(int(i, 2))
            if len(x) == 3:
                data_2d.append(tuple(x))
                x = []
        return data_2d

    # 处理图片数据
    def bin_to_pic(self):
        self.pic_head = chr(int(self.bin_pic_head[0], 2)) + chr(
            int(self.bin_pic_head[1], 2)
        )
        self.pic_size = self.bin_to_dec(self.bin_pic_size)
        self.pic_exe = self.bin_to_dec(self.bin_pic_exe)
        self.pic_address = self.bin_to_dec(self.bin_pic_address)
        self.pic_dib = self.bin_to_dec(self.bin_pic_dib)
        self.pic_w = self.bin_to_dec(self.bin_pic_w)
        self.pic_h = self.bin_to_dec(self.bin_pic_h)
        self.pic_color_num = self.bin_to_dec(self.bin_pic_color_num)
        self.pic_color_long = self.bin_to_dec(self.bin_pic_color_long)
        self.pic_bi = self.bin_to_dec(self.bin_pic_bi)
        self.pic_big = self.bin_to_dec(self.bin_pic_big)
        self.pic_printpix = self.bin_to_dec(self.bin_pic_printpix)
        self.pic_dpi = self.bin_to_dec(self.bin_pic_dpi)
        self.pic_color_num = self.bin_to_dec(self.bin_pic_color_num)
        self.pic_color_important = self.bin_to_dec(self.bin_pic_color_important)
        self.pic_data = self.change_data(self.bin_pic_data)

    # 打印图片信息
    def show(self):
        print(
            """
文件ID  {} 
图像大小(Byte)  {}   
特定应用  {}   
图片信息开始地址  {}   
DIB 头中的字节数 {}   
图片像素宽度  {}   
图片像素高度  {}   
使用颜色平面数  {}   
每个像素位数  {}   
BI_RGB  {}   
原始图像数据大小(Byte) {} 
打印分辨率  {}   
DPI  {}   
调色板中颜色数量  {}   
重要颜色数量  {}   
图片数据  {} .... {} 
""".format(
                self.pic_head,
                self.pic_size,
                self.pic_exe,
                self.pic_address,
                self.pic_dib,
                self.pic_w,
                self.pic_h,
                self.pic_color_num,
                self.pic_color_long,
                self.pic_bi,
                self.pic_big,
                self.pic_printpix,
                self.pic_dpi,
                self.pic_color_num,
                self.pic_color_important,
                self.pic_data[:5],
                self.pic_data[-5:],
            )
        )

    # 判断颜色
    def color(self, color):
        b, g, r = color[0], color[1], color[2]
        if r == 0 and g == 0 and b == 0:
            return "黑色"
        elif r == 0 and g == 0 and b == 255:
            return "蓝色"
        elif r == 0 and g == 255 and b == 0:
            return "绿色"
        elif r == 255 and g == 0 and b == 0:
            return "红色"
        elif r == 255 and g == 255 and b == 255:
            return "白色"
        else:
            return "其他颜色"

    # 统计颜色
    def count_color(self):
        color_dict = {}
        for i in self.pic_data:
            if i in color_dict:
                color_dict[i] += 1
            else:
                color_dict[i] = 1
        return color_dict

    # 判断颜色的比例
    def color_percent(self):
        color_dict = self.count_color()
        color_percent_dict = {}
        for i in color_dict:
            color_percent_dict[self.color(i)] = int(
                color_dict[i] / len(self.pic_data) * 100
            )
        for i in color_percent_dict:
            print("{} 占比百分之 {}".format(i, color_percent_dict[i]))





p = Readbmp("r.bmp")  # 另存为新文件
p.color_percent()
# 红色 占比百分之 100
"""
r.bmp是8*8的位图，其中有一个点是红色，其他都是黑色
"""
# 打开文件作为可编辑对象
with open("r.bmp", "rb") as f:
    d = f.read()
    data = bytearray(d)
# 试着把54到246的数据都改成0x00，即黑色。这样整张图片都变成黑色了（也可以只更改某个数据端）
for i in range(54, 246):
    data[i]= 0x00
# 保存文件
with open("rn.bmp", "wb") as f:
    f.write(data)

p = Readbmp("rn.bmp")
p.show()
p.color_percent()
# 黑色 占比百分之 100
```
