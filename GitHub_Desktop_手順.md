# 🖥️ GitHub Desktopで簡単デプロイ！

## 📥 ステップ1：GitHub Desktopのインストール

1. **ダウンロード**
   - https://desktop.github.com/ にアクセス
   - 「Download for Windows」をクリック

2. **インストール**
   - ダウンロードしたファイルを実行
   - 自動的にインストールが完了します

3. **起動とログイン**
   - GitHub Desktopを起動
   - 「Sign in to GitHub.com」をクリック
   - ブラウザでGitHubにログイン
   - 承認したらGitHub Desktopに戻る

---

## 📁 ステップ2：プロジェクトをGitHub Desktopに追加

### 方法A：ドラッグ&ドロップ（一番簡単！）

1. **エクスプローラーで todo-app フォルダを開く**
   - `c:\Users\kapuc\todo-app`

2. **GitHub Desktop にドラッグ&ドロップ**
   - フォルダをGitHub Desktopの画面にドラッグ

3. **「Create a repository」を選択**
   - ポップアップが出たら「Create a repository」をクリック

### 方法B：メニューから追加

1. **GitHub Desktopで**
   - 「File」→「Add local repository」をクリック

2. **フォルダを選択**
   - 「Choose...」をクリック
   - `c:\Users\kapuc\todo-app` を選択

3. **リポジトリ作成**
   - 「The directory does not appear to be a Git repository」と表示されたら
   - 「create a repository」をクリック

---

## ⚙️ ステップ3：リポジトリの設定

1. **リポジトリ名を確認**
   - Name: `todo-app`（そのままでOK）
   - Description: `ToDoリストアプリ`（任意）
   - Local Path: `c:\Users\kapuc\todo-app`（自動入力されている）

2. **Git Ignore**
   - 「None」のままでOK

3. **「Create Repository」をクリック**

---

## ☁️ ステップ4：GitHubに公開（Publish）

1. **画面上部の「Publish repository」をクリック**

2. **設定を確認**
   - ✅ Name: `todo-app`
   - ✅ Description: `ToDoリストアプリ`
   - ⚠️ **「Keep this code private」のチェックを外す**（重要！）
     - Public にしないとGitHub Pagesが使えません
   - Organization: None（個人アカウント）

3. **「Publish repository」をクリック**

4. **完了！**
   - 数秒でGitHubにアップロードされます

---

## 🌐 ステップ5：GitHub Pagesを有効化

1. **ブラウザでGitHubを開く**
   - GitHub Desktopで「Repository」→「View on GitHub」をクリック
   - または https://github.com/あなたのユーザー名/todo-app にアクセス

2. **Settings タブをクリック**

3. **左メニューから「Pages」を選択**

4. **Source を設定**
   - Branch: **「main」を選択**
   - Folder: **「/ (root)」を選択**
   - 「Save」をクリック

5. **完了を待つ**
   - 数分後、緑色のボックスが表示されます
   - 「Your site is published at https://あなたのユーザー名.github.io/todo-app/」

---

## ✅ ステップ6：アクセス確認

**あなたのアプリURL：**
```
https://あなたのユーザー名.github.io/todo-app/
```

このURLを：
- スマホのブラウザで開く
- 友達にシェア
- どこからでもアクセス可能！

---

## 🔄 アプリを更新する方法

ファイルを編集した後：

1. **GitHub Desktopで変更を確認**
   - 左側に変更されたファイルが表示されます

2. **コミット**
   - 左下の「Summary」に変更内容を入力（例：「カテゴリー機能を追加」）
   - 「Commit to main」をクリック

3. **プッシュ**
   - 上部の「Push origin」をクリック

4. **完了！**
   - 数分後、GitHub Pagesに反映されます

---

## 🎨 便利な機能

### 変更履歴を見る
- 「History」タブで過去の変更を確認

### 過去のバージョンに戻す
- 「History」タブで戻りたいコミットを右クリック
- 「Revert this commit」を選択

### ブランチを作成
- 「Current branch」→「New branch」
- 実験的な機能を試すときに便利

---

## 📱 スマホでホーム画面に追加

公開されたURLを開いたら：

**iPhone:**
1. Safariで開く
2. 共有ボタン → 「ホーム画面に追加」

**Android:**
1. Chromeで開く
2. メニュー → 「ホーム画面に追加」

これで、ネイティブアプリのように使えます！

---

## 🎉 完成！

おめでとうございます！🎊

あなたのToDoアプリが世界中から使えるようになりました！

- Wi-Fi不要
- どのデバイスでも
- URLを覚えておくだけ

楽しいタスク管理を！📝✨

