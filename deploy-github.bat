@echo off
chcp 65001 > nul
echo ================================
echo GitHub Pagesデプロイスクリプト
echo ================================
echo.

REM Gitがインストールされているか確認
git --version > nul 2>&1
if %errorlevel% neq 0 (
    echo エラー: Gitがインストールされていません
    echo.
    echo Gitをインストールしてください:
    echo https://git-scm.com/download/win
    echo.
    pause
    exit /b 1
)

echo Gitリポジトリを初期化しています...
git init

echo すべてのファイルをステージングしています...
git add .

echo コミットしています...
git commit -m "Initial commit: ToDo App"

echo.
echo ================================
echo 次のステップ:
echo ================================
echo.
echo 1. GitHubにログイン: https://github.com
echo 2. 右上の「+」から「New repository」をクリック
echo 3. Repository name: todo-app (または任意の名前)
echo 4. Public を選択
echo 5. 「Create repository」をクリック
echo.
echo 6. 作成後、以下のコマンドを実行してください:
echo.
echo    git branch -M main
echo    git remote add origin https://github.com/あなたのユーザー名/todo-app.git
echo    git push -u origin main
echo.
echo 7. GitHubのリポジトリページで:
echo    Settings → Pages → Source を「main」ブランチに設定
echo.
echo 8. 数分後、以下のURLでアクセス可能になります:
echo    https://あなたのユーザー名.github.io/todo-app/
echo.
pause

