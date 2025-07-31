// 设置最后更新时间
document.getElementById('lastUpdate').textContent = new Date().toLocaleDateString();

// 移动端菜单切换
document.getElementById('menuToggle').addEventListener('click', function() {
    document.getElementById('mainMenu').classList.toggle('show');
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        // 关闭移动端菜单
        document.getElementById('mainMenu').classList.remove('show');
    });
});

// 标签页切换
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', function() {
        // 移除所有活动状态
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
        
        // 添加当前活动状态
        this.classList.add('active');
        document.getElementById(this.dataset.tab).classList.add('active');
    });
});

// 回到顶部
document.getElementById('backToTop').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});