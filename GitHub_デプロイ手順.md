# 📘 GitHub Pagesにデプロイする手順

## 🎯 ステップ1：GitHubアカウントの準備

1. **GitHubアカウントを持っていない場合**
   - https://github.com にアクセス
   - 「Sign up」からアカウント作成

2. **Gitのインストール確認**
   - コマンドプロンプトで `git --version` を実行
   - インストールされていない場合：https://git-scm.com/download/win からダウンロード

---

## 🚀 ステップ2：GitHubリポジトリの作成

1. **GitHubにログイン**
   - https://github.com にアクセスしてログイン

2. **新しいリポジトリを作成**
   - 右上の「+」アイコンをクリック
   - 「New repository」を選択

3. **リポジトリの設定**
   - **Repository name**: `todo-app` (または任意の名前)
   - **Description**: `ToDoリストアプリ`
   - **Public** を選択（無料でPages使用可能）
   - ✅ **「Add a README file」はチェックしない**
   - 「Create repository」をクリック

4. **リポジトリURLをメモ**
   - 作成されたページに表示されるURL（例：`https://github.com/あなたのユーザー名/todo-app.git`）をコピー

---

## 💻 ステップ3：ローカルからアップロード

### 方法A：コマンドプロンプトで実行（推奨）

1. **コマンドプロンプトを開く**
   - `c:\Users\kapuc\todo-app` フォルダで右クリック
   - 「ターミナルで開く」または「コマンドプロンプトで開く」

2. **以下のコマンドを順番に実行**

```bash
# Gitリポジトリを初期化
git init

# ユーザー情報を設定（初回のみ）
git config user.email "your-email@example.com"
git config user.name "Your Name"

# すべてのファイルを追加
git add .

# コミット
git commit -m "Initial commit: ToDo App"

# ブランチ名をmainに変更
git branch -M main

# リモートリポジトリを追加（URLを自分のものに変更）
git remote add origin https://github.com/あなたのユーザー名/todo-app.git

# GitHubにプッシュ
git push -u origin main
```

---

## 🌐 ステップ4：GitHub Pagesを有効化

1. **GitHubのリポジトリページに戻る**
   - `https://github.com/あなたのユーザー名/todo-app`

2. **Settingsタブをクリック**

3. **左メニューから「Pages」を選択**

4. **Source設定**
   - **Branch**: `main` を選択
   - **Folder**: `/ (root)` を選択
   - 「Save」をクリック

5. **数分待つ**
   - ページ上部に緑色の通知が表示されます
   - 「Your site is live at https://あなたのユーザー名.github.io/todo-app/」

---

## ✅ ステップ5：アクセス確認

**公開URL：**
```
https://あなたのユーザー名.github.io/todo-app/
```

このURLをスマホやPCのブラウザで開けば、どこからでもアクセス可能です！

---

## 🔄 更新方法（ファイルを変更した場合）

アプリを更新したい場合は、以下のコマンドを実行：

```bash
cd c:\Users\kapuc\todo-app
git add .
git commit -m "Update: 変更内容の説明"
git push
```

数分後、GitHub Pagesに反映されます。

---

## ❓ トラブルシューティング

### 問題1：「git」コマンドが認識されない
**解決策：** Gitをインストール
- https://git-scm.com/download/win
- インストール後、PCを再起動

### 問題2：プッシュ時に認証エラー
**解決策：** Personal Access Tokenを使用
1. GitHub → Settings → Developer settings → Personal access tokens
2. 「Generate new token」で作成
3. パスワードの代わりにトークンを使用

### 問題3：ページが404エラー
**解決策：**
- 数分待つ（反映に時間がかかる）
- Settings → Pages でSourceが正しく設定されているか確認
- ファイル名が `index.html` であることを確認

---

## 🎉 完了！

これで、世界中どこからでもアクセスできるToDoアプリが完成しました！

- スマホでも
- タブレットでも
- 別のPCでも

同じURLでアクセスできます！🎊

