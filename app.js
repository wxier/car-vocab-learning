document.addEventListener('DOMContentLoaded', () => {
    // 获取DOM元素
    const flashcard = document.getElementById('flashcard');
    const flipBtn = document.getElementById('flip-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const markKnownBtn = document.getElementById('mark-known-btn');
    const speakBtn = document.getElementById('speak-btn');
    const cardCount = document.getElementById('card-count');
    const progressText = document.getElementById('progress');
    const progressFill = document.getElementById('progress-fill');
    
    // 当前卡片索引
    let currentIndex = 0;
    
    // 从本地存储加载学习进度
    loadProgress();
    
    // 更新卡片显示
    updateCard();
    updateProgress();
    
    // 翻转卡片事件
    flipBtn.addEventListener('click', () => {
        flashcard.classList.toggle('flipped');
    });
    
    // 上一张卡片
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCard();
            flashcard.classList.remove('flipped');
        }
    });
    
    // 下一张卡片
    nextBtn.addEventListener('click', () => {
        if (currentIndex < vocabularyData.length - 1) {
            currentIndex++;
            updateCard();
            flashcard.classList.remove('flipped');
        }
    });
    
    // 标记为已掌握
    markKnownBtn.addEventListener('click', () => {
        vocabularyData[currentIndex].known = !vocabularyData[currentIndex].known;
        updateKnownStatus();
        updateProgress();
        saveProgress();
    });
    
    // 朗读英文全称
    speakBtn.addEventListener('click', () => {
        speakText(vocabularyData[currentIndex].fullName);
    });
    
    // 使用Web Speech API朗读文本
    function speakText(text) {
        // 检查浏览器是否支持语音合成
        if ('speechSynthesis' in window) {
            // 创建一个新的SpeechSynthesisUtterance实例
            const utterance = new SpeechSynthesisUtterance(text);
            
            // 设置语音参数
            utterance.lang = 'en-US'; // 设置为英语
            utterance.rate = 0.9;     // 语速稍慢一点
            utterance.pitch = 1;      // 音调
            
            // 开始朗读
            window.speechSynthesis.speak(utterance);
            
            // 添加视觉反馈
            speakBtn.classList.add('speaking');
            
            // 朗读结束后移除视觉反馈
            utterance.onend = () => {
                speakBtn.classList.remove('speaking');
            };
        } else {
            alert('很抱歉，您的浏览器不支持语音合成功能');
        }
    }
    
    // 更新卡片内容
    function updateCard() {
        const term = vocabularyData[currentIndex];
        
        // 更新卡片正面
        document.querySelector('.term-abbr').textContent = term.abbreviation;
        document.querySelector('.term-cn').textContent = term.chinese;
        
        // 更新卡片背面
        document.querySelector('.term-full').textContent = term.fullName;
        document.querySelector('.term-desc').textContent = term.description;
        
        // 更新卡片计数
        cardCount.textContent = `${currentIndex + 1}/${vocabularyData.length}`;
        
        // 更新已掌握状态
        updateKnownStatus();
    }
    
    // 更新已掌握状态
    function updateKnownStatus() {
        if (vocabularyData[currentIndex].known) {
            markKnownBtn.textContent = '标记为未掌握';
            markKnownBtn.style.backgroundColor = '#e74c3c';
        } else {
            markKnownBtn.textContent = '标记为已掌握';
            markKnownBtn.style.backgroundColor = '#2ecc71';
        }
    }
    
    // 更新学习进度
    function updateProgress() {
        const knownCount = vocabularyData.filter(term => term.known).length;
        const totalCount = vocabularyData.length;
        const progressPercentage = Math.round((knownCount / totalCount) * 100);
        
        progressText.textContent = `${progressPercentage}%`;
        progressFill.style.width = `${progressPercentage}%`;
    }
    
    // 保存学习进度到本地存储
    function saveProgress() {
        const knownStatus = vocabularyData.map(term => ({
            id: term.id,
            known: term.known
        }));
        
        localStorage.setItem('vocabularyProgress', JSON.stringify(knownStatus));
    }
    
    // 从本地存储加载学习进度
    function loadProgress() {
        const savedProgress = localStorage.getItem('vocabularyProgress');
        
        if (savedProgress) {
            const knownStatus = JSON.parse(savedProgress);
            
            knownStatus.forEach(item => {
                const term = vocabularyData.find(t => t.id === item.id);
                if (term) {
                    term.known = item.known;
                }
            });
        }
    }
});