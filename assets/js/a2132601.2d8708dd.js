"use strict";(self.webpackChunkjiangmiemie=self.webpackChunkjiangmiemie||[]).push([[194],{1992:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(5893),i=t(1151);const o={sidebar_position:14,title:"\u5f02\u5e38"},a=void 0,l={id:"\u7b2c2\u90e8\u5206Python\u57fa\u7840\u77e5\u8bc6/\u5f02\u5e38",title:"\u5f02\u5e38",description:"\u5f02\u5e38",source:"@site/docs/\u7b2c2\u90e8\u5206Python\u57fa\u7840\u77e5\u8bc6/\u5f02\u5e38.md",sourceDirName:"\u7b2c2\u90e8\u5206Python\u57fa\u7840\u77e5\u8bc6",slug:"/\u7b2c2\u90e8\u5206Python\u57fa\u7840\u77e5\u8bc6/\u5f02\u5e38",permalink:"/docs/\u7b2c2\u90e8\u5206Python\u57fa\u7840\u77e5\u8bc6/\u5f02\u5e38",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14,title:"\u5f02\u5e38"},sidebar:"tutorialSidebar",previous:{title:"\u6587\u4ef6",permalink:"/docs/\u7b2c2\u90e8\u5206Python\u57fa\u7840\u77e5\u8bc6/\u6587\u4ef6"},next:{title:"\u88c5\u9970\u5668(\u9009\u4fee)",permalink:"/docs/\u7b2c2\u90e8\u5206Python\u57fa\u7840\u77e5\u8bc6/\u88c5\u9970\u5668"}},s={},c=[{value:"\u5f02\u5e38",id:"\u5f02\u5e38",level:2},{value:"try &amp; except \u5757",id:"try--except-\u5757",level:3},{value:"\u81ea\u5b9a\u4e49\u5f02\u5e38",id:"\u81ea\u5b9a\u4e49\u5f02\u5e38",level:3},{value:"finally",id:"finally",level:3}];function d(n){const e={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"\u5f02\u5e38",children:"\u5f02\u5e38"}),"\n",(0,r.jsx)(e.h3,{id:"try--except-\u5757",children:"try & except \u5757"}),"\n",(0,r.jsx)(e.p,{children:"\u6355\u6349\u4e0d\u540c\u7684\u9519\u8bef\u7c7b\u578b\uff0c\u5c1d\u8bd5\u5728\u4e0b\u9762\u8f93\u5165\u6846\u8f93\u5165\uff1a-1\uff0c1\uff0c2\uff0cq"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:'import math\n\nwhile True:\n    try:\n        text = input(\'>\')\n        if text[0] == \'q\':\n            break\n        x = float(text)\n        y = 1 / math.log10(x)\n        print("1/log10({0}) = {1}".format(x, y))\n    except ValueError:\n        print("value must bigger than 0")\n    except ZeroDivisionError:\n        print("the value must not be 1")\n\n'})}),"\n",(0,r.jsx)(e.h3,{id:"\u81ea\u5b9a\u4e49\u5f02\u5e38",children:"\u81ea\u5b9a\u4e49\u5f02\u5e38"}),"\n",(0,r.jsx)(e.p,{children:"\u5f02\u5e38\u662f\u6807\u51c6\u5e93\u4e2d\u7684\u7c7b\uff0c\u8fd9\u610f\u5473\u7740\u6211\u4eec\u53ef\u4ee5\u81ea\u5b9a\u4e49\u5f02\u5e38\u7c7b\uff1a"}),"\n",(0,r.jsx)(e.p,{children:"\u5c1d\u8bd5\u5728\u6587\u672c\u8f93\u5165\u6846\u8f93\u5165\uff1ak\uff0cstart\uff0cq"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"class CommandError(ValueError):\n    print(\"bad command operation. must input 'start', 'stop', 'pause'\")\n    \n\n\nvalid_commands = {'start', 'stop', 'pause'}\nwhile True:\n    command = input('>')\n    if command == 'q':\n        break\n    try:\n        if command.lower() not in valid_commands:\n            raise CommandError('Invalid command: %s' % command)\n        print('input command:', command)\n    except CommandError:\n        print(\"bad command string: %s\" % command)\n\n"})}),"\n",(0,r.jsx)(e.h3,{id:"finally",children:"finally"}),"\n",(0,r.jsx)(e.p,{children:"try/catch \u5757\u8fd8\u6709\u4e00\u4e2a\u53ef\u9009\u7684\u5173\u952e\u8bcd finally\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u4e0d\u7ba1 try \u5757\u6709\u6ca1\u6709\u5f02\u5e38\uff0c finally \u5757\u7684\u5185\u5bb9\u603b\u662f\u4f1a\u88ab\u6267\u884c\uff0c\n\u800c\u4e14\u4f1a\u5728\u629b\u51fa\u5f02\u5e38\u524d\u6267\u884c\uff0c\u56e0\u6b64\u53ef\u4ee5\u7528\u6765\u4f5c\u4e3a\u5b89\u5168\u4fdd\u8bc1\uff0c"}),"\n",(0,r.jsx)(e.p,{children:"\u6bd4\u5982\u6587\u4ef6\u64cd\u4f5c\u65f6\uff0c\u5e38\u5728finally\u5173\u95ed\u6587\u4ef6\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"try:\n    print(1 / 0)\nexcept ZeroDivisionError:\n    print('divide by 0.')\nfinally:\n    print('finally was called.')\n"})})]})}function p(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},1151:(n,e,t)=>{t.d(e,{Z:()=>l,a:()=>a});var r=t(7294);const i={},o=r.createContext(i);function a(n){const e=r.useContext(o);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:a(n.components),r.createElement(o.Provider,{value:e},n.children)}}}]);