@echo off
chcp 65001 > nul
echo ================================
echo Git インストール
echo ================================
echo.
echo Gitのダウンロードページを開きます...
echo.
echo ダウンロード後:
echo 1. インストーラーを実行
echo 2. すべてデフォルト設定でOK
echo 3. インストール完了後、PCを再起動
echo.
pause

start https://git-scm.com/download/win

