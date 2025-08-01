<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="YoungPy11的个人主页">
    <meta name="keywords" content="数学,人工智能,浙江大学">
    <title>YoungPy11的个人主页</title>
    <style>
        /* 全局样式 */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        :root {
            --primary-color: #1a365d;
            --secondary-color: #f5f5f5;
            --accent-color: #4299e1;
            --text-color: #2d3748;
            --light-text: #718096;
            --border-radius: 8px;
            --box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            --transition: all 0.3s ease;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica', 'Arial', sans-serif;
            line-height: 1.6;
            color: var(--text-color);
            background-color: #fff;
            scroll-behavior: smooth;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        section {
            padding: 60px 0;
        }
        
        h1, h2, h3 {
            color: var(--primary-color);
            margin-bottom: 20px;
        }
        
        h1 {
            font-size: 2.5rem;
        }
        
        h2 {
            font-size: 2rem;
            position: relative;
            padding-bottom: 10px;
        }
        
        h2::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 60px;
            height: 3px;
            background-color: var(--accent-color);
        }
        
        p {
            margin-bottom: 15px;
        }
        
        a {
            color: var(--accent-color);
            text-decoration: none;
            transition: var(--transition);
        }
        
        a:hover {
            color: var(--primary-color);
        }
        
        img {
            max-width: 100%;
            height: auto;
        }
        
        /* 头部样式 */
        header {
            background-color: var(--primary-color);
            color: white;
            padding: 20px 0;
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 1000;
            box-shadow: var(--box-shadow);
        }
        
        header .container {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .logo {
            font-size: 1.5rem;
            font-weight: bold;
        }
        
        nav ul {
            display: flex;
            list-style: none;
        }
        
        nav ul li {
            margin-left: 30px;
        }
        
        nav ul li a {
            color: white;
            font-weight: 500;
        }
        
        nav ul li a:hover {
            color: var(--secondary-color);
        }
        
        .menu-toggle {
            display: none;
            cursor: pointer;
            font-size: 1.5rem;
        }
        
        /* 主页横幅 */
        .hero {
            background-image: linear-gradient(rgba(26, 54, 93, 0.8), rgba(26, 54, 93, 0.8)), url('images/background.jpg');
            background-size: cover;
            background-position: center;
            color: white;
            text-align: center;
            padding: 150px 20px;
            margin-top: 80px;
        }
        
        .hero h1 {
            font-size: 3rem;
            margin-bottom: 20px;
            color: white;
        }
        
        .hero p {
            font-size: 1.2rem;
            max-width: 700px;
            margin: 0 auto 30px;
        }
        
        /* 关于我 */
        .about {
            background-color: var(--secondary-color);
        }
        
        .info-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        
        .info-table td {
            padding: 12px 15px;
            border-bottom: 1px solid #ddd;
        }
        
        .info-table tr:last-child td {
            border-bottom: none;
        }
        
        .info-table td:first-child {
            font-weight: bold;
            width: 30%;
            color: var(--primary-color);
        }
        
        /* 学术 */
        .tabs {
            display: flex;
            flex-wrap: wrap;
            margin-top: 30px;
            border-radius: var(--border-radius);
            overflow: hidden;
            box-shadow: var(--box-shadow);
        }
        
        .tab-button {
            padding: 15px 20px;
            cursor: pointer;
            background-color: var(--secondary-color);
            border: none;
            flex-grow: 1;
            font-size: 1rem;
            transition: var(--transition);
        }
        
        .tab-button.active {
            background-color: var(--primary-color);
            color: white;
        }
        
        .tab-content {
            display: none;
            padding: 30px;
            background-color: white;
            width: 100%;
        }
        
        .tab-content.active {
            display: block;
            animation: fadeIn 0.5s;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        .course-list {
            list-style-type: none;
        }
        
        .course-list li {
            margin-bottom: 10px;
            padding-left: 20px;
            position: relative;
        }
        
        .course-list li::before {
            content: '•';
            color: var(--accent-color);
            position: absolute;
            left: 0;
        }
        
        /* 兴趣 */
        .interests {
            background-color: var(--secondary-color);
        }
        
        .interest-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 30px;
            margin-top: 30px;
        }
        
        .interest-card {
            background-color: white;
            padding: 25px;
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow);
            transition: var(--transition);
        }
        
        .interest-card:hover {
            transform: translateY(-5px);
        }
        
        .interest-card h3 {
            display: flex;
            align-items: center;
            margin-bottom: 15px;
        }
        
        .interest-card h3 i {
            margin-right: 10px;
            color: var(--accent-color);
        }
        
        .interest-list {
            list-style-type: none;
        }
        
        .interest-list li {
            margin-bottom: 8px;
            padding-left: 15px;
            position: relative;
        }
        
        .interest-list li::before {
            content: '→';
            color: var(--accent-color);
            position: absolute;
            left: 0;
        }
        
        /* 联系 */
        .contact-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 50px;
            margin-top: 30px;
        }
        
        .contact-info {
            display: flex;
            flex-direction: column;
        }
        
        .contact-item {
            display: flex;
            align-items: center;
            margin-bottom: 20px;
        }
        
        .contact-item i {
            margin-right: 15px;
            font-size: 1.5rem;
            color: var(--accent-color);
        }
        
        .contact-form {
            background-color: white;
            padding: 30px;
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow);
        }
        
        .form-group {
            margin-bottom: 20px;
        }
        
        label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        
        input, textarea {
            width: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: var(--border-radius);
            font-family: inherit;
            font-size: 1rem;
        }
        
        textarea {
            height: 150px;
            resize: vertical;
        }
        
        button {
            background-color: var(--primary-color);
            color: white;
            border: none;
            padding: 12px 25px;
            border-radius: var(--border-radius);
            cursor: pointer;
            font-size: 1rem;
            transition: var(--transition);
        }
        
        button:hover {
            background-color: var(--accent-color);
        }
        
        /* 页脚 */
        footer {
            background-color: var(--primary-color);
            color: white;
            padding: 30px 0;
            text-align: center;
        }
        
        .footer-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
        }
        
        .copyright {
            margin-bottom: 15px;
        }
        
        .back-to-top {
            background-color: rgba(255, 255, 255, 0.1);
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            transition: var(--transition);
        }
        
        .back-to-top:hover {
            background-color: rgba(255, 255, 255, 0.2);
        }
        
        /* 响应式设计 */
        @media (max-width: 768px) {
            .menu-toggle {
                display: block;
            }
            
            nav ul {
                display: none;
                flex-direction: column;
                position: absolute;
                top: 70px;
                left: 0;
                width: 100%;
                background-color: var(--primary-color);
                padding: 20px;
            }
            
            nav ul.show {
                display: flex;
            }
            
            nav ul li {
                margin: 10px 0;
            }
            
            .hero h1 {
                font-size: 2.5rem;
            }
            
            .contact-container {
                grid-template-columns: 1fr;
            }
            
            .footer-content {
                flex-direction: column;
            }
        }
    </style>
    <!-- 引入Font Awesome图标 -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
</head>
<body>
    <!-- 头部导航 -->
    <header>
        <div class="container">
            <div class="logo">YoungPy11</div>
            <div class="menu-toggle" id="menuToggle">
                <i class="fas fa-bars"></i>
            </div>
            <nav>
                <ul id="mainMenu">
                    <li><a href="#about">关于我</a></li>
                    <li><a href="#academic">学术</a></li>
                    <li><a href="#interests">兴趣</a></li>
                    <li><a href="#contact">联系</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <!-- 主页横幅 -->
    <section class="hero" id="hero">
        <div class="container">
            <h1>你好，我是Young</h1>
            <p>浙江大学数学与应用数学专业大二学生，对应用数学与人工智能的交叉研究感兴趣</p>
        </div>
    </section>

    <!-- 关于我 -->
    <section class="about" id="about">
        <div class="container">
            <h2>关于我</h2>
            <p>以下是关于我的一些基本信息：</p>
            <table class="info-table">
                <tr>
                    <td>性别</td>
                    <td>男 ♂</td>
                </tr>
                <tr>
                    <td>学校</td>
                    <td>浙江大学(ZJU)</td>
                </tr>
                <tr>
                    <td>年级</td>
                    <td>大二在读</td>
                </tr>
                <tr>
                    <td>专业</td>
                    <td>数学与应用数学</td>
                </tr>
            </table>
        </div>
    </section>

    <!-- 学术 -->
    <section class="academic" id="academic">
        <div class="container">
            <h2>学术</h2>
            <p>我的学习方向主要集中在应用数学与人工智能相关领域，探索数学理论在机器学习中的应用。</p>
            
            <div class="tabs">
                <button class="tab-button active" data-tab="completed">已修课程</button>
                <button class="tab-button" data-tab="current">在修课程</button>
                <button class="tab-button" data-tab="planned">计划课程</button>
                
                <div class="tab-content active" id="completed">
                    <h3>主要已修课程</h3>
                    <ul class="course-list">
                        <li>数学分析 I, II</li>
                        <li>高等代数与解析几何Ⅰ,Ⅱ</li>
                        <li>点集拓扑</li>
                        <li>大学物理(甲)Ⅰ</li>
                        <li>人工智能基础（A）</li>
                        <li>Python编程基础</li>
                        <li>大学英语Ⅳ</li>
                    </ul>
                </div>
                
                <div class="tab-content" id="current">
                    <h3>主要在修课程(本学期)</h3>
                    <ul class="course-list">
                        <li>抽象代数</li>
                        <li>常微分方程</li>
                        <li>数学分析Ⅲ</li>
                        <li>概率论</li>
                        <li>大学物理(甲)Ⅱ</li>
                        <li>英美报刊选读</li>
                    </ul>
                </div>
                
                <div class="tab-content" id="planned">
                    <h3>主要计划课程(先画个饼，毕业前也未必学得完2333~)</h3>
                    <ul class="course-list">
                        <li>数理统计</li>
                        <li>数据结构与算法</li>
                        <li>c/c++语言*(自学)</li>
                        <li>复变函数</li>
                        <li>实变函数</li>
                        <li>泛函分析</li>
                        <li>科学计算</li>
                        <li>偏微分方程</li>
                        <li>优化实用算法</li>
                        <li>随机过程</li>
                        <li>数学建模(H)</li>
                        <li>数学软件</li>
                        <li>渐近法与摄动理论</li>
                        <li>数据建模与分析</li>
                        <li>微分方程数值解</li>
                        <li>人工神经网络模型与算法</li>
                        <li>控制理论基础</li>
                        <li>计算机图形学</li>
                    </ul>    
                </div>
            </div>
        </div>
    </section>

    <!-- 兴趣 -->
    <section class="interests" id="interests">
        <div class="container">
            <h2>兴趣</h2>
            <p>“人无癖不可交，因其无深情也；人无疵不可交，因其无真气也。”</p>
            
            <div class="interest-grid">
                <div class="interest-card">
                    <h3><i class="fas fa-running"></i> 运动</h3>
                    <ul class="interest-list">
                        <li>跑步 ()</li>
                        <li>篮球 ()</li>
                    </ul>
                </div>
                
                <div class="interest-card">
                    <h3><i class="fas fa-music"></i> 音乐</h3>
                    <ul class="interest-list">
                        <li>纯音乐/古典乐</li>
                        <li>说唱</li>
                        <li>J-Pop</li>
                    </ul>
                </div>
                
                <div class="interest-card">
                    <h3><i class="fas fa-film"></i> 影视</h3>
                    <ul class="interest-list">
                        <li>动漫番剧 ()</li>
                        <li>科幻电影 ()</li>
                    </ul>
                </div>
                
                <div class="interest-card">
                    <h3><i class="fas fa-book"></i> 阅读</h3>
                    <ul class="interest-list">
                        <li>科幻小说 (刘慈欣、《科幻世界》)</li>
                        <li>奇幻、意识流文学 ()</li>
                    </ul>
                </div>
                
                <div class="interest-card">
                    <h3><i class="fas fa-gamepad"></i> 游戏</h3>
                    <ul class="interest-list">
                        <li>《重返未来：1999》</li>
                        <li>《鸣潮》</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- 联系 -->
    <section class="contact" id="contact">
        <div class="container">
            <h2>联系我</h2>
            <p>如果你对我的学习方向＆爱好感兴趣或有任何问题＆补充，欢迎通过以下方式联系我。</p>
            
            <div class="contact-container">
                <div class="contact-info">
                    <div class="contact-item">
                        <i class="fab fa-qq"></i>
                        <span>QQ: 2483211689</span>
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-envelope"></i>
                        <a href="mailto:youngsailor@zju.edu.cn">youngsailor@zju.edu.cn</a>
                    </div>
                    <div class="contact-item">
                        <i class="fab fa-github"></i>
                        <a href="https://github.com/YoungPy11" target="_blank">GitHub: YoungPy11</a>
                    </div>
                </div>
                
                <div class="contact-form">
                    <h3>留言</h3>
                    <form id="contactForm" action="https://formspree.io/f/xldlldkp" method="POST" target="_blank">
                        <input type="hidden" name="_subject" value="来自YoungPy11网站的新留言">
                        <input type="hidden" name="_replyto" value="2483211689@qq.com">
                        <div class="form-group">
                            <label for="name">如何称呼您</label>
                            <input type="text" id="name" name="name" required>
                        </div>
                        <div class="form-group">
                            <label for="message">留言</label>
                            <textarea id="message" name="message" required></textarea>
                        </div>
                        <button type="submit">提交</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- 页脚 -->
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="copyright">
                    &copy; 2023 YoungPy11 版权所有 | 最后更新时间: <span id="lastUpdate"></span>
                </div>
                <div class="back-to-top" id="backToTop">
                    <i class="fas fa-chevron-up"></i>
                </div>
            </div>
        </div>
    </footer>

    <script>
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
    </script>
</body>
</html>