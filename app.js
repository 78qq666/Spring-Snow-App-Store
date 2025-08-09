let formSubmissions = []; // 存储从服务器获取的数据

// 加载已保存的数据
async function loadSavedData() {
    try {
        const response = await fetch('/api/submissions');
        if (!response.ok) throw new Error('获取数据失败');
        formSubmissions = await response.json();
        updateDisplay();
    } catch (error) {
        console.error('加载数据错误:', error);
    }
}

// 提交表单
document.getElementById('userForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    
    try {
        const response = await fetch('/api/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
        
        if (!response.ok) throw new Error('提交失败');
        
        // 重新加载数据以获取更新后的列表
        await loadSavedData();
        this.reset();
        
    } catch (error) {
        console.error('提交错误:', error);
        alert('提交失败: ' + error.message);
    }
});

function updateDisplay() {
    document.getElementById('jsonOutput').textContent = 
        JSON.stringify(formSubmissions, null, 2);
}

// 初始化加载数据
loadSavedData();