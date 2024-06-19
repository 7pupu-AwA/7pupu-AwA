// Function to show/hide sections based on navigation clicks
function showPage(pageId) {
    // 隐藏所有页面
    document.querySelectorAll('main section').forEach(section => {
        section.style.display = 'none';
    });

    // 显示所选页面
    document.getElementById(pageId).style.display = 'block';

    // 如果是“關於我”部分，初始化滚动查看图片功能
    if (pageId === 'about') {
    }
}

// 当DOM加载完成后初始化显示“關於我”页面
document.addEventListener('DOMContentLoaded', () => {
    showPage('about'); // 初始化显示“關於我”页面

    // 图片轮播功能
    const images = [
        'https://7pupu-awa.github.io/7pupu-AwA/photo/IMG_1234.JPG',
        'https://7pupu-awa.github.io/7pupu-AwA/photo/IMG_1236.JPG',
        'https://7pupu-awa.github.io/7pupu-AwA/photo/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2%202024-06-10%20020811.png',
        'https://7pupu-awa.github.io/7pupu-AwA/photo/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2%202024-06-10%20021451.png'
    ];

    let currentIndex = 0; // 当前显示的图片索引
    let imageElement = document.createElement('img');
    imageElement.src = images[currentIndex];
    document.getElementById('image-container').appendChild(imageElement);

    // 下一张图片按钮点击事件处理函数
    document.getElementById('next-image').addEventListener('click', showNextImage);

    // 上一张图片按钮点击事件处理函数
    document.getElementById('prev-image').addEventListener('click', showPrevImage);

    // 函数：显示下一张图片
    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length; // 循环切换图片索引
        const nextImageSrc = images[currentIndex];

        // 创建新的图片元素，并添加到容器中
        const newImageElement = document.createElement('img');
        newImageElement.src = nextImageSrc;
        newImageElement.style.opacity = '0'; // 设置新图片透明度为0
        document.getElementById('image-container').appendChild(newImageElement);

        // 动画切换效果，旧图片淡出，新图片淡入
        setTimeout(() => {
            imageElement.style.transition = 'opacity 0.5s ease-in-out'; // 添加淡出过渡效果
            imageElement.style.opacity = '0'; // 旧图片淡出
            newImageElement.style.opacity = '1'; // 新图片淡入
            setTimeout(() => {
                imageElement.remove(); // 移除旧图片
                imageElement = newImageElement; // 更新当前图片元素为新图片
            }, 500); // 等待淡出过渡效果完成再移除旧图片
        }, 50); // 等待新图片加载显示出来的时间
    }

    // 函数：显示上一张图片
    function showPrevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length; // 循环切换图片索引
        const prevImageSrc = images[currentIndex];

        // 创建新的图片元素，并添加到容器中
        const newImageElement = document.createElement('img');
        newImageElement.src = prevImageSrc;
        newImageElement.style.opacity = '0'; // 设置新图片透明度为0
        document.getElementById('image-container').appendChild(newImageElement);

        // 动画切换效果，旧图片淡出，新图片淡入
        setTimeout(() => {
            imageElement.style.transition = 'opacity 0.5s ease-in-out'; // 添加淡出过渡效果
            imageElement.style.opacity = '0'; // 旧图片淡出
            newImageElement.style.opacity = '1'; // 新图片淡入
            setTimeout(() => {
                imageElement.remove(); // 移除旧图片
                imageElement = newImageElement; // 更新当前图片元素为新图片
            }, 500); // 等待淡出过渡效果完成再移除旧图片
        }, 50); // 等待新图片加载显示出来的时间
    }

    // 初始化“關於我”部分滚动查看图片功能
    function initAboutScroll() {
        const aboutSection = document.getElementById('about');
        const aboutImages = document.querySelectorAll('#about-images img');

        let currentIndex = 0;

        function handleScroll() {
            const bottomScroll = window.innerHeight + window.scrollY;
            const sectionBottom = aboutSection.offsetTop + aboutSection.offsetHeight;

            if (bottomScroll >= sectionBottom) {
                showNextImage();
            }
        }

        window.addEventListener('scroll', handleScroll);
    }
});