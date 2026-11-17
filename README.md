# 臺北市立大學運動健康科學系碩士班招生網站

精簡、學術研究導向的碩士班招生單頁網站，聚焦：

- 116 學年度招生重要時程
- ECSS 國際研討會與全英文發表
- AI、App、IoT、創客與檢測器材研發
- 跨域研究領域、八大類研究設備
- 專任師資、聯合醫院合作與學術成果入口

純靜態 HTML/CSS/JavaScript，可直接部署至 Firebase Hosting。

## 本機預覽

```bash
python3 -m http.server 4173
```

開啟 `http://localhost:4173`。

## 發布

`.firebaserc` 中的 `ut-ehs-master` 是預定的新 Firebase project ID；正式建立專案後如 ID 不同，須同步更新。

```bash
firebase deploy --only hosting
```
