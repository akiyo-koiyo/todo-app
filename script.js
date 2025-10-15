// アプリケーションの状態管理
let tasks = [];
let currentFilter = 'all';

// DOM要素の取得
const taskInput = document.getElementById('taskInput');
const categorySelect = document.getElementById('categorySelect');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const taskCount = document.getElementById('taskCount');
const filterBtns = document.querySelectorAll('.filter-btn');
const clearCompletedBtn = document.getElementById('clearCompleted');

// ページ読み込み時に保存されたタスクを読み込む
window.addEventListener('DOMContentLoaded', () => {
    loadTasks();
    renderTasks();
});

// タスクをローカルストレージから読み込む
function loadTasks() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
    }
}

// タスクをローカルストレージに保存
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// タスクを追加
function addTask() {
    const taskText = taskInput.value.trim();
    const category = categorySelect.value;
    
    if (taskText === '') {
        taskInput.focus();
        return;
    }

    const newTask = {
        id: Date.now(),
        text: taskText,
        category: category,
        completed: false,
        createdAt: new Date().toISOString()
    };

    tasks.unshift(newTask); // 新しいタスクを先頭に追加
    taskInput.value = '';
    categorySelect.value = 'general'; // デフォルトに戻す
    taskInput.focus();
    
    saveTasks();
    renderTasks();
}

// タスクの完了状態を切り替え
function toggleTask(id) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.completed = !task.completed;
        saveTasks();
        renderTasks();
    }
}

// タスクを削除
function deleteTask(id) {
    tasks = tasks.filter(t => t.id !== id);
    saveTasks();
    renderTasks();
}

// タスクを編集
function editTask(id, newText) {
    const task = tasks.find(t => t.id === id);
    if (task && newText.trim() !== '') {
        task.text = newText.trim();
        saveTasks();
        renderTasks();
    }
}

// 完了したタスクをすべて削除
function clearCompleted() {
    tasks = tasks.filter(t => !t.completed);
    saveTasks();
    renderTasks();
}

// フィルターに基づいてタスクを取得
function getFilteredTasks() {
    switch (currentFilter) {
        case 'active':
            return tasks.filter(t => !t.completed);
        case 'completed':
            return tasks.filter(t => t.completed);
        default:
            return tasks;
    }
}

// タスクリストを描画
function renderTasks() {
    const filteredTasks = getFilteredTasks();
    
    // タスクカウントを更新
    const activeTasks = tasks.filter(t => !t.completed).length;
    taskCount.textContent = activeTasks;

    // タスクリストをクリア
    taskList.innerHTML = '';

    // タスクが0件の場合
    if (filteredTasks.length === 0) {
        const emptyState = document.createElement('li');
        emptyState.className = 'empty-state';
        emptyState.textContent = 'タスクがありません';
        taskList.appendChild(emptyState);
        return;
    }

    // 各タスクを描画
    filteredTasks.forEach(task => {
        const taskItem = createTaskElement(task);
        taskList.appendChild(taskItem);
    });
}

// カテゴリー名とアイコンの対応
const categoryLabels = {
    general: '📋 一般',
    work: '💼 仕事',
    study: '📚 勉強',
    personal: '🏠 プライベート',
    shopping: '🛒 買い物',
    health: '💪 健康'
};

// タスク要素を作成
function createTaskElement(task) {
    const li = document.createElement('li');
    li.className = `task-item ${task.completed ? 'completed' : ''}`;
    li.dataset.id = task.id;
    li.dataset.category = task.category || 'general';

    // チェックボックス
    const checkbox = document.createElement('div');
    checkbox.className = `checkbox ${task.completed ? 'checked' : ''}`;
    checkbox.addEventListener('click', () => toggleTask(task.id));

    // タスクコンテンツ（テキスト+バッジ）
    const taskContent = document.createElement('div');
    taskContent.className = 'task-content';

    // タスクテキスト
    const taskText = document.createElement('span');
    taskText.className = 'task-text';
    taskText.textContent = task.text;

    // カテゴリーバッジ
    const categoryBadge = document.createElement('span');
    categoryBadge.className = `category-badge ${task.category || 'general'}`;
    categoryBadge.textContent = categoryLabels[task.category || 'general'];

    taskContent.appendChild(taskText);
    taskContent.appendChild(categoryBadge);
    
    // ダブルクリックで編集
    taskText.addEventListener('dblclick', () => {
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'task-text editing';
        input.value = task.text;
        
        input.addEventListener('blur', () => {
            editTask(task.id, input.value);
        });
        
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                editTask(task.id, input.value);
            }
        });
        
        taskContent.replaceChild(input, taskText);
        input.focus();
        input.select();
    });

    // アクション（編集・削除ボタン）
    const actions = document.createElement('div');
    actions.className = 'task-actions';

    // 編集ボタン
    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.textContent = '✏️';
    editBtn.title = '編集';
    editBtn.addEventListener('click', () => {
        const newText = prompt('タスクを編集:', task.text);
        if (newText !== null) {
            editTask(task.id, newText);
        }
    });

    // 削除ボタン
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = '🗑️';
    deleteBtn.title = '削除';
    deleteBtn.addEventListener('click', () => {
        if (confirm('このタスクを削除しますか？')) {
            deleteTask(task.id);
        }
    });

    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(checkbox);
    li.appendChild(taskContent);
    li.appendChild(actions);

    return li;
}

// イベントリスナーの設定

// 追加ボタンをクリック
addBtn.addEventListener('click', addTask);

// Enterキーで追加
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});

// フィルターボタン
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // アクティブ状態を更新
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // フィルターを変更
        currentFilter = btn.dataset.filter;
        renderTasks();
    });
});

// 完了したタスクを削除
clearCompletedBtn.addEventListener('click', () => {
    const completedCount = tasks.filter(t => t.completed).length;
    if (completedCount === 0) {
        alert('完了したタスクがありません');
        return;
    }
    if (confirm(`${completedCount}件の完了したタスクを削除しますか？`)) {
        clearCompleted();
    }
});
