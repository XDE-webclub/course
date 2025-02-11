---
sidebar_position: 21
title: Python内置库的使用
---

## Python内置库的使用

库、包、模块的包含关系为：多个模块组成为包、多个包组成为库。

在实际开发中不做严格区分。

Python标准库：Python内置的库，不需要安装，直接导入即可使用。

以Python的内置os模块为例，是与操作系统进行交互的模块，主要有如下功能：

### 文件路径操作

- os.remove(path) 或 os.unlink(path) ：删除指定路径的文件。路径可以是全名，也可以是当前工作目录下的路径。
- os.removedirs：删除文件，并删除中间路径中的空文件夹
- os.chdir(path)：将当前工作目录改变为指定的路径
- os.getcwd()：返回当前的工作目录
- os.curdir：表示当前目录的符号
- os.rename(old, new)：重命名文件
- os.renames(old, new)：重命名文件，如果中间路径的文件夹不存在，则创建文件夹
- os.listdir(path)：返回给定目录下的所有文件夹和文件名，不包括 '.' 和 '..' 以及子文件夹下的目录。（'.' 和 '..' 分别指当前目录和父目录）
- os.mkdir(name)：产生新文件夹
- os.makedirs(name)：产生新文件夹，如果中间路径的文件夹不存在，则创建文件夹

导入该模块：

```python showLineNumbers
import os
```

产生文件：

```python showLineNumbers
f = open('test.file', 'w')
f.close()
print('test.file' in os.listdir(os.curdir))
```

重命名文件:

```python showLineNumbers
os.rename("test.file", "test.new.file")
print("test.file" in os.listdir(os.curdir))
print("test.new.file" in os.listdir(os.curdir))
```

```python showLineNumbers
# 删除文件
os.remove("test.new.file")
```

### 系统常量

- windows 为 \r\n
- unix为 \n

```python showLineNumbers
os.linesep
```

```python showLineNumbers
# 当前操作系统的路径分隔符：
os.sep
```

当前操作系统的环境变量中的分隔符（';' 或 ':'）：

- windows 为 ;
- unix 为:

```python showLineNumbers
os.pathsep
```

os.environ 是一个存储所有环境变量的值的字典，可以修改。

```python showLineNumbers
os.environ
```

### os.path 模块

```python showLineNumbers
import os.path
```

- os.path.isfile(path) ：检测一个路径是否为普通文件
- os.path.isdir(path)：检测一个路径是否为文件夹
- os.path.exists(path)：检测路径是否存在
- os.path.isabs(path)：检测路径是否为绝对路径

windows系统：

```python showLineNumbers
print(os.path.isfile("C:/Windows"))
print(os.path.isdir("C:/Windows"))
print(os.path.exists("C:/Windows"))
print(os.path.isabs("C:/Windows"))
```

unix系统：

```python showLineNumbers
print(os.path.isfile("/Users"))
print(os.path.isdir("/Users"))
print(os.path.exists("/Users"))
print(os.path.isabs("/Users"))
```

### split 和 join

- os.path.split(path)：拆分一个路径为 (head, tail) 两部分
- os.path.join(a, *p)：使用系统的路径分隔符，将各个部分合成一个路径

```python showLineNumbers
head, tail = os.path.split("c:/tem/b.txt")
print(head, tail)
```

```python showLineNumbers
a = "c:/tem"
b = "b.txt"
os.path.join(a, b)
```

```python showLineNumbers
def get_files(dir_path):
    '''
    列出文件夹下的所有文件
    :param dir_path: 父文件夹路径
    :return: 
    '''
    for parent, dirname, filenames in os.walk(dir_path):
        for filename in filenames:
            print("parent is:", parent)
            print("filename is:", filename)
            print("full name of the file is:", os.path.join(parent, filename))
```

列出当前文件夹的所有文件：

```python showLineNumbers
dir = os.curdir
get_files(dir)
```

### Byte Code 编译

Python, Java 等语言先将代码编译为 byte code（不是机器码），然后再处理：
> .py -> .pyc -> interpreter

eval(statement, glob, local)

使用 eval 函数动态执行代码，返回执行的值。

exec(statement, glob, local)

使用 exec 可以添加修改原有的变量:

```python showLineNumbers
a = 1
exec('b = a + 10')
print(b)
```

```python showLineNumbers
local = dict(a=2)
glob = {}
exec("b = a+1", glob, local)

print(local)
```

compile 函数生成 byte code：
compile(str, filename, mode)

```python showLineNumbers
a = 1
b = compile('a+2', '', 'eval')
print(eval(b))
```

```python showLineNumbers
a = 1
c = compile("b=a+4", "", 'exec')
exec(c)
print(b)
```

```python showLineNumbers
# abstract syntax trees
import ast

tree = ast.parse('a+10', '', 'eval')
ast.dump(tree)
```

```python showLineNumbers
a = 1
c = compile(tree, '', 'eval')
d = eval(c)
print(d)
```

```python showLineNumbers
# 安全的使用方法 literal_eval ，只支持基本值的操作：
b = ast.literal_eval('[10.0, 2, True, "foo"]')
print(b)
```
