(function() {
    // 注册模块
    // 获取元素
let codem = document.querySelector('.codem')
let sum = 5

codem.addEventListener('click', function(){
    this.style.left = '55%'
    this.innerHTML = '5秒后重新获取'
    // codem.style.pointerEvents = 'auto'
    let timer = setInterval(function(){
        sum--
        codem.innerHTML = `${sum}秒后重新获取`
        codem.style.pointerEvents = 'none'
        if (sum === 0) {
            codem.innerHTML = '重新获取'
            codem.style.left = '65%'
            sum = 5
            clearInterval(timer)
            // 禁止a标签点击
            codem.style.pointerEvents = 'auto'
        }
    }, 1000)
})


// 用户名验证

if (!variable()){
    // 阻止提交
    e.preventDefault()
}
// 看看有没有包含 如果有返回true false
classList.contains('')

}());