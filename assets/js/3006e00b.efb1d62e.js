"use strict";(self.webpackChunkjiangmiemie=self.webpackChunkjiangmiemie||[]).push([[6889],{2108:(A,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>d,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>i});var e=t(4848),r=t(8453);const a={},d=void 0,s={id:"part2/\u6587\u751f\u56fe\u6a21\u578b\u7684\u90e8\u7f72",title:"\u6587\u751f\u56fe\u6a21\u578b\u7684\u90e8\u7f72",description:"\u6587\u751f\u56fe\u76ee\u524d\u5df2\u7ecf\u662f\u6bd4\u8f83\u6210\u719f\u7684\u4e00\u4e2a\u6280\u672f\u4e86\uff0c\u4e0d\u540c\u7684\u65b9\u6848\u4f1a\u63d0\u4f9b\u4e0d\u540c\u7684\u53c2\u6570\uff0c\u8b6c\u5982\uff1a\u753b\u9762\u98ce\u683c\u3001\u753b\u9762\u5c3a\u5bf8\u7b49\u7b49\uff0c\u8fd9\u91cc\u6211\u4eec\u4ee5\u767e\u5ea6\u63d0\u4f9b\u7684\u6587\u751f\u56fe\u7684\u5b98\u65b9API\u4e3a\u4f8b\uff0c\u6765\u90e8\u7f72\u4e00\u4e2a\u6587\u751f\u56fe\u6a21\u578b\uff0c\u4e3a\u4e86\u7b80\u5316\u8fd9\u4e2a\u8fc7\u7a0b\uff0c\u6211\u4eec\u8981\u6c42\u6548\u679c\u5982\u4e0b\u3002",source:"@site/project/part2/\u6587\u751f\u56fe\u6a21\u578b\u7684\u90e8\u7f72.md",sourceDirName:"part2",slug:"/part2/\u6587\u751f\u56fe\u6a21\u578b\u7684\u90e8\u7f72",permalink:"/project/part2/\u6587\u751f\u56fe\u6a21\u578b\u7684\u90e8\u7f72",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6a21\u62df\u7b97\u6cd5\u5927\u8d5b\uff08\u8003\u6838\uff09",permalink:"/project/part1/\u9879\u76ee\u5b9e\u6218"},next:{title:"\u8fde\u7eed\u5bf9\u8bdd\u7684\u8bed\u8a00\u6a21\u578b",permalink:"/project/part2/\u8fde\u7eed\u5bf9\u8bdd\u7684\u8bed\u8a00\u6a21\u578b"}},p={},i=[{value:"\u9996\u9875\u8bbe\u7f6e",id:"\u9996\u9875\u8bbe\u7f6e",level:2},{value:"KNN\u6a21\u578b\u90e8\u7f72\u9875\u9762",id:"knn\u6a21\u578b\u90e8\u7f72\u9875\u9762",level:2},{value:"\u6587\u751f\u56fe\u6a21\u578b\u90e8\u7f72\u9875\u9762",id:"\u6587\u751f\u56fe\u6a21\u578b\u90e8\u7f72\u9875\u9762",level:2},{value:"\u4e3b\u7a0b\u5e8f",id:"\u4e3b\u7a0b\u5e8f",level:2},{value:"\u8003\u6838",id:"\u8003\u6838",level:2}];function x(A){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.R)(),...A.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(n.p,{children:"\u6587\u751f\u56fe\u76ee\u524d\u5df2\u7ecf\u662f\u6bd4\u8f83\u6210\u719f\u7684\u4e00\u4e2a\u6280\u672f\u4e86\uff0c\u4e0d\u540c\u7684\u65b9\u6848\u4f1a\u63d0\u4f9b\u4e0d\u540c\u7684\u53c2\u6570\uff0c\u8b6c\u5982\uff1a\u753b\u9762\u98ce\u683c\u3001\u753b\u9762\u5c3a\u5bf8\u7b49\u7b49\uff0c\u8fd9\u91cc\u6211\u4eec\u4ee5\u767e\u5ea6\u63d0\u4f9b\u7684\u6587\u751f\u56fe\u7684\u5b98\u65b9API\u4e3a\u4f8b\uff0c\u6765\u90e8\u7f72\u4e00\u4e2a\u6587\u751f\u56fe\u6a21\u578b\uff0c\u4e3a\u4e86\u7b80\u5316\u8fd9\u4e2a\u8fc7\u7a0b\uff0c\u6211\u4eec\u8981\u6c42\u6548\u679c\u5982\u4e0b\u3002"}),"\n",(0,e.jsx)(n.p,{children:(0,e.jsx)(n.img,{alt:"1715442284240",src:t(9283).A+"",width:"339",height:"176"})}),"\n",(0,e.jsx)(n.p,{children:"\u975e\u5e38\u7b80\u5355\u7684\u4e00\u4e2a\u7a97\u53e3\uff1a\u4e00\u4e2a\u8f93\u5165\u6846\u63a5\u6536\u63d0\u793a\u8bcd\uff0c\u70b9\u51fb\u751f\u6210\u6309\u94ae\uff0c\u751f\u6210\u4e00\u5f20\u56fe\u7247\u3002"}),"\n",(0,e.jsx)(n.p,{children:"\u8fd9\u662f\u6211\u4eec\u90e8\u7f72\u7684\u7b2c\u4e8c\u4e2a\u6a21\u578b\uff0c\u6240\u4ee5\u6211\u4eec\u8981\u91cd\u65b0\u8bbe\u8ba1\u4e00\u4e0b\uff1a\u70b9\u5f00\u4e3b\u9875\uff0c\u662f\u4e00\u4e2a\u63d0\u793a\uff0c\u53ef\u4ee5\u6307\u5411\u4e0d\u540c\u6a21\u578b\u7684\u90e8\u7f72\u9875\u9762\u3002"}),"\n",(0,e.jsx)(n.p,{children:(0,e.jsx)(n.img,{alt:"1715444329881",src:t(1568).A+"",width:"421",height:"217"})}),"\n",(0,e.jsx)(n.h2,{id:"\u9996\u9875\u8bbe\u7f6e",children:"\u9996\u9875\u8bbe\u7f6e"}),"\n",(0,e.jsx)(n.p,{children:"\u6211\u4eec\u9700\u8981\u4e00\u4e2a\u9996\u9875\uff0c\u6307\u5411\u4e0d\u540c\u6a21\u578b\u7684\u90e8\u7f72\u9875\u9762,\u5728\u4e0b\u9762\u7684\u8def\u5f84\u4e2d\u521b\u5efa\u6587\u4ef6\u3002"}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-python",metastring:'title="my_app_name\\my_app_name\\index_page.py"',children:'import reflex as rx\n\ndef index() -> rx.Component:\n    return (\n        rx.vstack(\n            rx.center(\n                rx.heading("\u6b22\u8fce\u4f7f\u7528 \u7f51\u7edc\u793e\u6a21\u578b\u5e93!"),\n                width="100%",\n            ),\n            rx.center(\n                rx.vstack(\n                    rx.link("\u9e22\u5c3e\u82b1\u6a21\u578b\u8bc6\u522b", href="/knn"),\n                    rx.link("\u6587\u751f\u56fe\u6a21\u578b\u4f53\u9a8c", href="/aiimg"),\n                ),\n                width="100%",\n                align="center",\n                justify="center",\n            ),\n        ),\n    )\n\n'})}),"\n",(0,e.jsx)(n.h2,{id:"knn\u6a21\u578b\u90e8\u7f72\u9875\u9762",children:"KNN\u6a21\u578b\u90e8\u7f72\u9875\u9762"}),"\n",(0,e.jsx)(n.p,{children:"\u8fd8\u662f\u6309\u7167\u4e4b\u524d\u7684\u65b9\u6cd5\u653e\u7f6e\u6a21\u578b\u8def\u5f84"}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-python",metastring:'title="my_app_name\\my_app_name\\knn_page.py"',children:'import joblib\n# \u52a0\u8f7d\u6a21\u578b\nknn_from_joblib = joblib.load(\'knn_model.pkl\')\nimport reflex as rx\n\nclass State(rx.State):\n    predicted_name: str = ""\n    iris_target_names: list = ["setosa", "versicolor", "virginica"]\n\n    def handle_submit(self, form_data: dict):\n        """Handle the form submit."""\n        # \u5c06\u5b57\u5178\u7684\u503c\u8f6c\u4e3a\u6d6e\u70b9\u6570\uff0c\u653e\u7f6e\u5728\u65b0\u7684\u5217\u8868\u4e2d\n        iris_example_list = [[float(v) for v in form_data.values()]]\n        # \u4f7f\u7528\u6a21\u578b\u9884\u6d4b\n        predict = knn_from_joblib.predict(iris_example_list)\n        # \u5c06\u9884\u6d4b\u7ed3\u679c\u8f6c\u4e3a\u82b1\u7684\u540d\u79f0\n        self.predicted_name = self.iris_target_names[predict[0]]\n\n\ndef knn() -> rx.Component:\n    return rx.center(\n        rx.vstack(\n            rx.form(\n                rx.vstack(\n                    rx.hstack(\n                        rx.input(\n                            placeholder="\u82b1\u843c\u957f\u5ea6",\n                            name="sepal_length",\n                        ),\n                        rx.input(\n                            placeholder="\u82b1\u843c\u5bbd\u5ea6",\n                            name="sepal_width",\n                        ),\n                    ),\n                    rx.hstack(\n                        rx.input(\n                            placeholder="\u82b1\u74e3\u957f\u5ea6",\n                            name="petal_length",\n                        ),\n                        rx.input(\n                            placeholder="\u82b1\u74e3\u5bbd\u5ea6",\n                            name="petal_width",\n                        ),\n                    ),\n                    rx.button("\u5224\u65ad", type="submit"),\n                ),\n                on_submit=State.handle_submit,\n                reset_on_submit=True,\n            ),\n            rx.text(State.predicted_name),\n        ),\n    )\n'})}),"\n",(0,e.jsx)(n.h2,{id:"\u6587\u751f\u56fe\u6a21\u578b\u90e8\u7f72\u9875\u9762",children:"\u6587\u751f\u56fe\u6a21\u578b\u90e8\u7f72\u9875\u9762"}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-python",metastring:'title="my_app_name\\my_app_name\\aiimg_page.py"',children:'import reflex as rx\nimport base64\nimport io\nfrom PIL import Image\nimport requests\nimport json\n\nAPI_KEY = "**\u52a0\u5bc6**"\nSECRET_KEY = "**\u52a0\u5bc6**"\n\n\ndef get_access_token():\n    """\n    \u4f7f\u7528 AK\uff0cSK \u751f\u6210\u9274\u6743\u7b7e\u540d\uff08Access Token\uff09\n    :return: access_token\uff0c\u6216\u662fNone(\u5982\u679c\u9519\u8bef)\n    """\n    url = "https://aip.baidubce.com/oauth/2.0/token"\n    params = {\n        "grant_type": "client_credentials",\n        "client_id": API_KEY,\n        "client_secret": SECRET_KEY,\n    }\n    return str(requests.post(url, params=params).json().get("access_token"))\n\n\ndef get_aiimg(prompt=None):\n\n    url = (\n        "https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/text2image/sd_xl?access_token="\n        + get_access_token()\n    )\n\n    payload = json.dumps(\n        {\n            "prompt": str(prompt),\n            "size": "768x768",\n            "n": 1,\n            "steps": 20,\n            "sampler_index": "Euler a",\n        }\n    )\n    headers = {"Content-Type": "application/json", "Accept": "application/json"}\n\n    response = requests.request("POST", url, headers=headers, data=payload)\n\n    data = response.text\n\n    base64_str = json.loads(data)["data"][0]["b64_image"]\n\n    image_data = base64.b64decode(base64_str)\n\n    image_data = io.BytesIO(image_data)\n\n    return Image.open(image_data)\n\nclass ImgState(rx.State):\n    image: Image.Image = None\n\n    def prompt_submit(self, form_data: dict):\n        self.image = get_aiimg(form_data["prompt"])\n\ndef aiimg() -> rx.Component:\n    return rx.center(\n        rx.vstack(\n            rx.form(\n                rx.hstack(\n                    rx.input(\n                        placeholder="\u63d0\u793a\u8bcd",\n                        name="prompt",\n                    ),\n                    rx.button("\u751f\u6210", type="submit"),\n                ),\n                on_submit=ImgState.prompt_submit,\n                reset_on_submit=False,\n            ),\n            rx.image(src=ImgState.image, width="100px", height="auto")\n        ),\n    )\n\n'})}),"\n",(0,e.jsx)(n.h2,{id:"\u4e3b\u7a0b\u5e8f",children:"\u4e3b\u7a0b\u5e8f"}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-python",metastring:'title="my_app_name\\my_app_name\\my_app_name.py"',children:'from rxconfig import config\nimport reflex as rx\nfrom my_app_name.index_page import index\nfrom my_app_name.knn_page import knn\nfrom my_app_name.aiimg_page import aiimg\n\napp = rx.App()\napp.add_page(index, route="/")\napp.add_page(knn, route="/knn")\napp.add_page(aiimg, route="/aiimg")\n'})}),"\n",(0,e.jsx)(n.h2,{id:"\u8003\u6838",children:"\u8003\u6838"}),"\n",(0,e.jsx)(n.p,{children:"\u57fa\u4e8e\u4e0a\u9762\u7684\u4ee3\u7801\uff0c\u8bf7\u4f60\u5b8c\u6210\u4ee5\u4e0b\u6539\u8fdb\uff1a"}),"\n",(0,e.jsxs)(n.ol,{children:["\n",(0,e.jsx)(n.li,{children:"\u65b0\u589e\u4e00\u4e2a\u8f93\u5165\u6846\uff0c\u7528\u4e8e\u63a5\u6536\u6587\u751f\u56fe\u7684\u8865\u5145\u53c2\u6570\uff0c\u5168\u90e8\u5b66\u751f\u9700\u5b8c\u6210\u3002"}),"\n"]}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-bash",children:'size\tstring\t\u5426\t\u751f\u6210\u56fe\u7247\u957f\u5bbd\uff0c\u9ed8\u8ba4\u503c 1024x1024\uff0c\u53d6\u503c\u8303\u56f4\u5982\u4e0b\uff1a\n\xb7 \u9002\u7528\u5934\u50cf\uff1a ["768x768", "1024x1024", "1536x1536", "2048x2048"]\n\xb7 \u9002\u7528\u6587\u7ae0\u914d\u56fe \uff1a["1024x768", "2048x1536"]\n\xb7 \u9002\u7528\u6d77\u62a5\u4f20\u5355\uff1a["768x1024", "1536x2048"]\n\xb7 \u9002\u7528\u7535\u8111\u58c1\u7eb8\uff1a["1024x576", "2048x1152"]\n\xb7 \u9002\u7528\u6d77\u62a5\u4f20\u5355\uff1a["576x1024", "1152x2048"]\n\n\n\nstyle\tstring\t\u5426\t\u751f\u6210\u98ce\u683c\u3002\n\n\u8bf4\u660e\uff1a\n\uff081\uff09\u53ef\u9009\u503c\uff1a\n\xb7 Base\uff1a\u57fa\u7840\u98ce\u683c\n\xb7 3D Model\uff1a3D\u6a21\u578b\n\xb7 Analog Film\uff1a\u6a21\u62df\u80f6\u7247\n\xb7 Anime\uff1a\u52a8\u6f2b\n\xb7 Cinematic\uff1a\u7535\u5f71\n\xb7 Comic Book\uff1a\u6f2b\u753b\n\xb7 Craft Clay\uff1a\u5de5\u827a\u9ecf\u571f\n\xb7 Digital Art\uff1a\u6570\u5b57\u827a\u672f\n\xb7 Enhance\uff1a\u589e\u5f3a\n\xb7 Fantasy Art\uff1a\u5e7b\u60f3\u827a\u672f\n\xb7 Isometric\uff1a\u7b49\u8ddd\u98ce\u683c\n\xb7 Line Art\uff1a\u7ebf\u6761\u827a\u672f\n\xb7 Lowpoly\uff1a\u4f4e\u591a\u8fb9\u5f62\n\xb7 Neonpunk\uff1a\u9713\u8679\u670b\u514b\n\xb7 Origami\uff1a\u6298\u7eb8\n\xb7 Photographic\uff1a\u6444\u5f71\n\xb7 Pixel Art\uff1a\u50cf\u7d20\u827a\u672f\n\xb7 Texture\uff1a\u7eb9\u7406\n\uff082\uff09\u9ed8\u8ba4\u503c\u4e3aBase\n'})}),"\n",(0,e.jsxs)(n.ol,{start:"2",children:["\n",(0,e.jsx)(n.li,{children:"\u4e3a\u4e86\u907f\u514d\u5728\u751f\u6210\u56fe\u7247\u7684\u8fc7\u7a0b\u4e2d\uff0c\u7528\u6237\u7b49\u5f85\u65f6\u95f4\u8fc7\u957f\uff0c\u5728\u751f\u6210\u56fe\u7247\u7684\u8fc7\u7a0b\u4e2d\uff0c\u663e\u793a\u4e00\u4e2a\u52a0\u8f7d\u4e2d\u7684\u52a8\u753b\u5e76\u9501\u5b9a\u6309\u94ae\uff0c\u907f\u514d\u91cd\u590d\u53d1\u51fa\u8bf7\u6c42\u3002"}),"\n"]}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-python",children:"# \u52a8\u753b\u52a0\u8f7d\nrx.chakra.circular_progress(is_indeterminate=True)\n"})}),"\n",(0,e.jsxs)(n.p,{children:["\u6761\u4ef6\u663e\u793a\u7684\u4f8b\u5b50\uff1a",(0,e.jsx)(n.a,{href:"https://reflex.dev/docs/library/layout/cond/#cond",children:"https://reflex.dev/docs/library/layout/cond/#cond"})]}),"\n",(0,e.jsxs)(n.p,{children:[(0,e.jsx)(n.img,{alt:"1715487844883",src:t(2693).A+"",width:"925",height:"399"}),"\n",(0,e.jsx)(n.img,{alt:"1715488114948",src:t(9582).A+"",width:"908",height:"324"}),"\n",(0,e.jsx)(n.img,{alt:"1715488029825",src:t(3844).A+"",width:"991",height:"299"})]}),"\n",(0,e.jsxs)(n.ol,{start:"3",children:["\n",(0,e.jsx)(n.li,{children:"\u4ecd\u6709\u4f59\u529b\u7684\u540c\u5b66\u53ef\u4ee5\u9002\u5f53\u7f8e\u5316\u9875\u9762"}),"\n"]})]})}function c(A={}){const{wrapper:n}={...(0,r.R)(),...A.components};return n?(0,e.jsx)(n,{...A,children:(0,e.jsx)(x,{...A})}):x(A)}},9283:(A,n,t)=>{t.d(n,{A:()=>e});const e=t.p+"assets/images/1715442284240-490779c8e24f561bacb4a6274069e7bc.png"},1568:(A,n,t)=>{t.d(n,{A:()=>e});const e=t.p+"assets/images/1715444329881-76d70614bd21801d2265d51a193db1bb.png"},2693:(A,n,t)=>{t.d(n,{A:()=>e});const e="data:image/png;base64,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1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwBADHQtAAAx0LUAAMRA1wIAEANdCwDAlS+E/w+kUth+tqpLtwAAAABJRU5ErkJggg=="},3844:(A,n,t)=>{t.d(n,{A:()=>e});const e=t.p+"assets/images/1715488029825-833eb11c141cc39e1eb24c538b7c554f.png"},9582:(A,n,t)=>{t.d(n,{A:()=>e});const e=t.p+"assets/images/1715488114948-0afae11becbebd4e9d7fdec80aa9f4f0.png"},8453:(A,n,t)=>{t.d(n,{R:()=>d,x:()=>s});var e=t(6540);const r={},a=e.createContext(r);function d(A){const n=e.useContext(a);return e.useMemo((function(){return"function"==typeof A?A(n):{...n,...A}}),[n,A])}function s(A){let n;return n=A.disableParentContext?"function"==typeof A.components?A.components(r):A.components||r:d(A.components),e.createElement(a.Provider,{value:n},A.children)}}}]);