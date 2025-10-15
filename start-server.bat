@echo off
chcp 65001 > nul
echo ================================
echo ToDoアプリ - ローカルサーバー起動
echo ================================
echo.
echo サーバーを起動しています...
echo.

python --version > nul 2>&1
if %errorlevel% equ 0 (
    echo Python が見つかりました。サーバーを起動します...
    echo.
    for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /c:"IPv4"') do (
        set IP=%%a
        set IP=!IP: =!
    )
    
    echo ==========================================
    echo サーバーが起動しました！
    echo ==========================================
    echo.
    echo PCからアクセス: http://localhost:8000
    echo.
    
    ipconfig | findstr /c:"IPv4"
    echo.
    echo スマホから上記のIPアドレスを使ってアクセスしてください
    echo 例: http://192.168.x.x:8000
    echo.
    echo ★ PCとスマホが同じWi-Fiに接続されていることを確認してください
    echo.
    echo サーバーを停止するには Ctrl+C を押してください
    echo ==========================================
    echo.
    
    python -m http.server 8000
) else (
    echo エラー: Python が見つかりませんでした
    echo.
    echo 代替方法:
    echo 1. Node.jsがインストールされている場合:
    echo    npx http-server -p 8000
    echo.
    echo 2. Pythonをインストールする:
    echo    https://www.python.org/downloads/
    echo.
    pause
)

