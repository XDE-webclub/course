"use strict";(self.webpackChunkjiangmiemie=self.webpackChunkjiangmiemie||[]).push([[7962],{2545:(n,i,e)=>{e.r(i),e.d(i,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var r=e(5893),t=e(1151);const s={sidebar_position:0,title:"K-\u90bb\u8fd1\u7b97\u6cd5"},o=void 0,a={id:"\u7b2c3\u90e8\u5206\u4f20\u7edf\u7b97\u6cd5\u5165\u95e8/K-\u90bb\u8fd1\u7b97\u6cd5",title:"K-\u90bb\u8fd1\u7b97\u6cd5",description:"K-\u90bb\u8fd1\u7b97\u6cd5",source:"@site/docs/\u7b2c3\u90e8\u5206\u4f20\u7edf\u7b97\u6cd5\u5165\u95e8/K-\u90bb\u8fd1\u7b97\u6cd5.md",sourceDirName:"\u7b2c3\u90e8\u5206\u4f20\u7edf\u7b97\u6cd5\u5165\u95e8",slug:"/\u7b2c3\u90e8\u5206\u4f20\u7edf\u7b97\u6cd5\u5165\u95e8/K-\u90bb\u8fd1\u7b97\u6cd5",permalink:"/docs/\u7b2c3\u90e8\u5206\u4f20\u7edf\u7b97\u6cd5\u5165\u95e8/K-\u90bb\u8fd1\u7b97\u6cd5",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,title:"K-\u90bb\u8fd1\u7b97\u6cd5"},sidebar:"tutorialSidebar",previous:{title:"Python\u53d1\u5e03\u5305(\u9009\u4fee)",permalink:"/docs/\u7b2c2\u90e8\u5206Python\u57fa\u7840\u77e5\u8bc6/Python\u53d1\u5e03\u5305"},next:{title:"K\u5747\u503c\u7b97\u6cd5",permalink:"/docs/\u7b2c3\u90e8\u5206\u4f20\u7edf\u7b97\u6cd5\u5165\u95e8/K\u5747\u503c\u7b97\u6cd5"}},l={},p=[{value:"K-\u90bb\u8fd1\u7b97\u6cd5",id:"k-\u90bb\u8fd1\u7b97\u6cd5",level:2},{value:"\u7b80\u5355\u5b9e\u6218",id:"\u7b80\u5355\u5b9e\u6218",level:3},{value:"\u6548\u679c\u8bc4\u4f30",id:"\u6548\u679c\u8bc4\u4f30",level:3},{value:"\u6548\u679c\u8bc4\u4f30\u7684\u6539\u8fdb",id:"\u6548\u679c\u8bc4\u4f30\u7684\u6539\u8fdb",level:3}];function c(n){const i={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h2,{id:"k-\u90bb\u8fd1\u7b97\u6cd5",children:"K-\u90bb\u8fd1\u7b97\u6cd5"}),"\n",(0,r.jsx)(i.p,{children:"\u8fd9\u4e2a\u7b97\u6cd5\u65e2\u53ef\u4ee5\u89e3\u51b3\u5206\u7c7b\u95ee\u9898\uff0c\u4e5f\u53ef\u4ee5\u7528\u4e8e\u56de\u5f52\u95ee\u9898\uff0c\u4f46\u5de5\u4e1a\u4e0a\u7528\u4e8e\u5206\u7c7b\u7684\u60c5\u51b5\u66f4\u591a\u3002"}),"\n",(0,r.jsx)(i.p,{children:"KNN\u5148\u8bb0\u5f55\u6240\u6709\u5df2\u77e5\u6570\u636e\uff0c\u518d\u5229\u7528\u4e00\u4e2a\u8ddd\u79bb\u51fd\u6570\uff0c"}),"\n",(0,r.jsx)(i.p,{children:"\u627e\u51fa\u5df2\u77e5\u6570\u636e\u4e2d\u8ddd\u79bb\u672a\u77e5\u4e8b\u4ef6\u6700\u8fd1\u7684K\u7ec4\u6570\u636e\uff0c"}),"\n",(0,r.jsx)(i.p,{children:"\u6700\u540e\u6309\u7167\u8fd9K\u7ec4\u6570\u636e\u91cc\u6700\u5e38\u89c1\u7684\u7c7b\u522b\u9884\u6d4b\u8be5\u4e8b\u4ef6\u3002"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-python",children:'from sklearn.neighbors import KNeighborsClassifier\nimport numpy as np\n\n# \u521b\u5efa\u4e00\u4e9b\u793a\u4f8b\u6570\u636e\nX = np.array([[1, 2], [2, 3], [2, 5], [3, 2], [3, 3], [4, 5]])  # \u7279\u5f81\ny = np.array([0, 0, 1, 0, 1, 1])  # \u76ee\u6807\u6807\u7b7e\n\n# \u521b\u5efaK-\u6700\u8fd1\u90bb\u5206\u7c7b\u5668\nk = 3  # \u9009\u62e9K\u7684\u503c\nmodel = KNeighborsClassifier(n_neighbors=k).fit(X, y)\n\n# \u9884\u6d4b\u65b0\u6570\u636e\u70b9\nnew_data_point = np.array([[3, 4]])  # \u8981\u9884\u6d4b\u7684\u65b0\u6570\u636e\u70b9\n\n# .predicts()\u65b9\u6cd5\u8fd4\u56de\u4e00\u4e2a\u6570\u7ec4\uff0c\u6570\u7ec4\u4e2d\u5305\u542b\u4e86\u9884\u6d4b\u7684\u7c7b\u522b\npredicted_class = model.predict(new_data_point)\n\nprint("\u9884\u6d4b\u7c7b\u522b:", predicted_class)\n'})}),"\n",(0,r.jsx)(i.h3,{id:"\u7b80\u5355\u5b9e\u6218",children:"\u7b80\u5355\u5b9e\u6218"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-python",children:"from sklearn.neighbors import KNeighborsClassifier\nfrom sklearn.model_selection import train_test_split\n\n# \u5bfc\u5165\u9e22\u5c3e\u82b1\u6570\u636e\u5e93\nfrom sklearn.datasets import load_iris\n\n# \u52a0\u8f7d\u6570\u636e\u96c6\uff0c\u6570\u636e\u96c6\u5305\u542b\u6570\u636e\u7684\u7279\u5f81\u3001\u6807\u7b7e\u3001\u7c7b\u522b\u7b49\u8bb8\u591a\u4fe1\u606f\niris = load_iris()\n# \u83b7\u53d6\u6570\u636e\u7279\u5f81\uff08\u5373\u82b1\u7684\u9ad8\u5ea6\u3001\u5bbd\u5ea6\u7b49\uff09\niris_X = iris.data\n# \u83b7\u53d6\u6570\u636e\u6807\u7b7e\uff08\u5373\u82b1\u7684\u54c1\u79cd\uff0c\u75280\u30011\u30012\u4ee3\u66ff\uff09\niris_y = iris.target\nprint(len(iris_X)) # \u67e5\u770b\u6570\u636e\u96c6\u7684\u5927\u5c0f\n\n# # \u83b7\u53d6\u524d2\u6761\u6570\u636e,\u4ece0\u5f00\u59cb\u52302\u7ed3\u675f,\u4e0d\u5305\u62ec2\u3002\u5199\u6cd51\n# print(iris_X[0:2])\n\n# # \u83b7\u53d6\u524d2\u6761\u6570\u636e,\u4ece0\u5f00\u59cb\u52302\u7ed3\u675f,\u4e0d\u5305\u62ec2\u3002\u5199\u6cd52\uff0c\u7701\u75650\n# print(iris_X[:2])\n\n# # \u83b7\u53d6\u524d2\u6761\u6570\u636e,\u4ece0\u5f00\u59cb\u52302\u7ed3\u675f,\u4e0d\u5305\u62ec2\u3002\u5199\u6cd53\uff0c\u7701\u75650\n# print(iris_X[:2,:])\n\n# # \u83b7\u53d6\u524d2\u6761\u6570\u636e,\u4ece0\u5f00\u59cb\u52302\u7ed3\u675f,\u4e0d\u5305\u62ec2\u3002\u5199\u6cd54\uff0c\u7701\u75650,\u53ea\u53d6\u7b2c\u4e00\u5217\n# print(iris_X[:2,0])\n\n# # \u67e5\u770b\u82b1\u7684\u7c7b\u522b\n# print(iris_y)\n# # \u67e5\u770b\u82b1\u7684\u6570\u636e\n# print(iris_X)\n# # \u5408\u5728\u4e00\u8d77\u67e5\u770b\n# print(list(zip(iris_X,iris_y)))\n\n# \u628a\u6570\u636e\u6253\u4e71\uff0c\u5e76\u5206\u6210\u6d4b\u8bd5\u6570\u636e\u548c\u8bad\u7ec3\u6570\u636e\uff0ctest_size\u662f\u6d4b\u8bd5\u6570\u636e\u7684\u6bd4\u4f8b\uff0c0.3\u8868\u793a\u4e3a30%\nX_train, X_test, y_train, y_test = train_test_split(iris_X, iris_y, test_size=0.3)\n\n'''\ntrain_test_split\u8be6\u89e3\n\n\u6b64\u65b9\u6cd5\u4f1a\u5c06\u6570\u636e\u548c\u6807\u7b7e\u5747\u5206\u6210\u4e24\u90e8\u5206\u5e76\u6253\u4e71\uff0c\u4e00\u90e8\u5206\u7528\u4e8e\u8bad\u7ec3\uff0c\u4e00\u90e8\u5206\u7528\u4e8e\u6d4b\u8bd5\u3002\n\n\u6240\u4ee5\u8fd4\u56de\u7684\u6570\u636e\u67094\u4e2a\uff0c\u6211\u4eec\u75281\u30012\u30013\u30014\u7ed9\u4ed6\u4eec\u505a\u4e0a\u8bb0\u53f7.\n\n\u6570\u636eX [------70%---(1)-- | -30%(2)-]\n\u6807\u7b7ey [------70%---(3)-- | -30%(4)-]\n\n\u4e0e\u4e0a\u56fe\u5bf9\u5e94\uff0c\u4f9d\u6b21\u662f:\n\n\u8bad\u7ec3\u7684\u6570\u636eX(1),  \u6d4b\u8bd5\u7684\u6570\u636eX(2),\n     \u2191\u2193              \u2191\u2193\n\u8bad\u7ec3\u7684\u6807\u7b7ey(3),  \u6d4b\u8bd5\u7684\u6807\u7b7ey(4)\n\n\u7528(1)\u3001(3)\u5582\u51fa\u4e00\u4e2a\u6a21\u578b\n\n\u8ba9\u6a21\u578b\u9884\u6d4b(2)\uff0c\u83b7\u5f97\u9884\u6d4b\u7ed3\u679c\n\n\u5c06\u9884\u6d4b\u7ed3\u679c\u4e0e(4)\u8fdb\u884c\u6bd4\u8f83\u6765\u6d4b\u8bd5\u6a21\u578b\u7684\u51c6\u786e\u7387\n'''\n\n# \u67e5\u770b\u8bad\u7ec3\u6570\u636e\uff0c\u5df2\u7ecf\u88ab\u968f\u673a\u6253\u4e71\u4e86\n# print(y_train)\n# \u5b9e\u4f8b\u5316KNN\u5206\u7c7b\u5668\nknn = KNeighborsClassifier()\n# .fit()\u65b9\u6cd5\u7528\u4e8e\u8bad\u7ec3\u6a21\u578b\uff0c\u5373\u8ba9\u6a21\u578b\u4ece\u6570\u636e\u4e2d\u5b66\u4e60\nknn.fit(X_train, y_train)\n# .predicts()\u65b9\u6cd5\u8fd4\u56de\u4e00\u4e2a\u6570\u7ec4\uff0c\u6570\u7ec4\u4e2d\u5305\u542b\u4e86\u9884\u6d4b\u7684\u7c7b\u522b\nprint(knn.predict(X_test))\n# \u67e5\u770b\u771f\u5b9e\u6570\u636e\nprint(y_test)\n"})}),"\n",(0,r.jsx)(i.h3,{id:"\u6548\u679c\u8bc4\u4f30",children:"\u6548\u679c\u8bc4\u4f30"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-python",children:"right = 0\nerror = 0\nfor i in zip(knn.predict(X_test),y_test):\n    #print(i)\n    if i[0] == i[1]:\n        right +=1\n    else:\n        error +=1\nprint(right,error)\nprint('\u6b63\u786e\u7387\uff1a{}%'.format(right/(right+error)*100))\n"})}),"\n",(0,r.jsx)(i.h3,{id:"\u6548\u679c\u8bc4\u4f30\u7684\u6539\u8fdb",children:"\u6548\u679c\u8bc4\u4f30\u7684\u6539\u8fdb"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-python",children:"print('\u6b63\u786e\u7387\uff1a{}%'.format(knn.score(X_test,y_test)*100))\n\n# \u6b63\u786e\u7387\uff1a100.0%\n"})})]})}function d(n={}){const{wrapper:i}={...(0,t.a)(),...n.components};return i?(0,r.jsx)(i,{...n,children:(0,r.jsx)(c,{...n})}):c(n)}},1151:(n,i,e)=>{e.d(i,{Z:()=>a,a:()=>o});var r=e(7294);const t={},s=r.createContext(t);function o(n){const i=r.useContext(s);return r.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function a(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:o(n.components),r.createElement(s.Provider,{value:i},n.children)}}}]);