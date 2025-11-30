// 导航栏切换
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// 切换导航菜单
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// 点击链接后关闭移动端菜单
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// 滚动时添加阴影到导航栏
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
            
            // 更新活动链接
            updateActiveLink(targetId);
        }
    });
});

// 更新活动链接状态
function updateActiveLink(hash) {
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === hash) {
            link.classList.add('active');
        }
    });
}

// 监听滚动事件以更新活动链接
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = '#' + section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            updateActiveLink(sectionId);
        }
    });
});

// 页面加载时的动画
document.addEventListener('DOMContentLoaded', () => {
    // 首屏内容淡入
    const heroElements = [
        document.querySelector('.hero-content h1'),
        document.querySelector('.hero-content .subtitle'),
        document.querySelector('.hero-content .description'),
        document.querySelector('.hero-buttons')
    ];
    
    heroElements.forEach((element, index) => {
        if (element) {
            element.classList.add('animate');
            element.style.animationDelay = `${index * 0.2}s`;
        }
    });
    
    // 图片淡入
    const heroImage = document.querySelector('.hero-image img');
    if (heroImage) {
        heroImage.classList.add('animate');
        heroImage.style.animationDelay = '0.8s';
    }
});
