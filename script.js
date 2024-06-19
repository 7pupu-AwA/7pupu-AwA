function showPage(pageId) {
    // 隱藏所有頁面
    document.querySelectorAll('main section').forEach(section => {
        section.style.display = 'none';
    });

    // 顯示所選頁面
    document.getElementById(pageId).style.display = 'block';
}

// 初始化顯示首頁
document.addEventListener('DOMContentLoaded', () => {
    showPage('home');

    // 處理留言板表單提交
    document.getElementById('guestbook-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 獲取用戶輸入的名稱和留言
        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;
        
        // 創建一個新的留言元素
        const entry = document.createElement('li');
        entry.textContent = `${name}: ${message}`;
        
        // 將新的留言元素添加到留言列表中
        document.getElementById('entries-list').appendChild(entry);
        
        // 清空表單
        document.getElementById('guestbook-form').reset();
    });
});