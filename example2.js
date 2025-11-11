function animate(time) {
    const now = new Date();
    const sec = now.getSeconds();
    const min = now.getMinutes();
    let hr = now.getHours();
    hr = hr >= 12 ? hr - 12 : hr;
    
    // 获取窗口尺寸，设置Canvas为全屏
    const canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d");
    
    ctx.save();
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 将坐标轴移至屏幕中心
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(-Math.PI / 2);

    ctx.strokeStyle = "black";
    ctx.lineWidth = 5;
    ctx.lineCap = "round";

    // 绘制12个小时刻度
    ctx.save();
    for (let i = 0; i < 12; i++) {
        ctx.beginPath();
        ctx.rotate(Math.PI / 6);
        ctx.moveTo(100, 0);
        ctx.lineTo(120, 0);
        ctx.stroke();
    }
    ctx.restore();

    // 绘制60个分钟刻度
    ctx.save();
    ctx.lineWidth = 3;
    for (let i = 0; i < 60; i++) {
        ctx.beginPath();
        ctx.rotate(Math.PI / 30);
        ctx.moveTo(110, 0);
        ctx.lineTo(120, 0);
        ctx.stroke();
    }
    ctx.restore();

    // 时针
    ctx.save();
    ctx.rotate((hr * 30 + min * 0.5) * Math.PI / 180);
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(-20, 0);
    ctx.lineTo(80, 0);
    ctx.stroke();
    ctx.restore();

    // 分针
    ctx.save();
    ctx.rotate((min * 6 + sec * 0.1) * Math.PI / 180);
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(-20, 0);
    ctx.lineTo(100, 0);
    ctx.stroke();
    ctx.restore();

    // 秒针
    ctx.save();
    ctx.rotate(sec * 6 * Math.PI / 180);
    ctx.strokeStyle = "red";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(-30, 0);
    ctx.lineTo(110, 0);
    ctx.stroke();
    ctx.restore();

    ctx.restore();
    window.requestAnimationFrame(animate);
}

// 监听窗口大小变化，实时更新Canvas尺寸
window.addEventListener('resize', () => {
    const canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

window.requestAnimationFrame(animate);

// function animate(time) {
//     const now = new Date();
//     const sec = now.getSeconds();
//     const min = now.getMinutes();
//     let hr = now.getHours();
//     hr = hr >= 12 ? hr - 12 : hr;
//     hr = hr === 0 ? 12 : hr;

//     const canvas = document.getElementById("canvas");
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     const ctx = canvas.getContext("2d");
    
//     ctx.save();
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     ctx.translate(canvas.width / 2, canvas.height / 2);
//     ctx.rotate(-Math.PI / 2);

//     ctx.strokeStyle = "black";
//     ctx.lineWidth = 5;
//     ctx.lineCap = "round";

//     // 绘制小时刻度 + 数字（优化位置偏移）
//     ctx.save();
//     for (let i = 0; i < 12; i++) {
//         ctx.beginPath();
//         ctx.rotate(Math.PI / 6);
//         ctx.moveTo(100, 0);
//         ctx.lineTo(120, 0);
//         ctx.stroke();

//         ctx.save();
//         ctx.rotate(Math.PI / 2);
//         ctx.font = "20px Arial";
//         ctx.textAlign = "center";
//         ctx.textBaseline = "middle";
//         ctx.fillStyle = "black";

//         const radius = 130;
//         const angle = i * Math.PI / 6;
//         const x = radius * Math.cos(angle);
//         const y = radius * Math.sin(angle);

//         // 针对不同位置的数字设置偏移，避免重叠
//         let offsetX = 0, offsetY = 0;
//         if (i === 0) { // 12点位置
//             offsetY = -8;
//         } else if (i === 6) { // 6点位置
//             offsetY = 8;
//         } else if (i === 3) { // 3点位置
//             offsetX = 8;
//         } else if (i === 9) { // 9点位置
//             offsetX = -8;
//         }

//         const hourNum = i === 0 ? 12 : i;
//         ctx.fillText(hourNum, x + offsetX, y + offsetY);
//         ctx.restore();
//     }
//     ctx.restore();

//     // 绘制分钟刻度（其余逻辑与原代码一致）
//     ctx.save();
//     ctx.lineWidth = 3;
//     for (let i = 0; i < 60; i++) {
//         if (i % 5 !== 0) {
//             ctx.beginPath();
//             ctx.rotate(Math.PI / 30);
//             ctx.moveTo(110, 0);
//             ctx.lineTo(120, 0);
//             ctx.stroke();
//         } else {
//             ctx.rotate(Math.PI / 30);
//         }
//     }
//     ctx.restore();

//     // 时针、分针、秒针、中心圆点绘制（与原代码一致）
//     ctx.save();
//     ctx.rotate((hr * 30 + min * 0.5) * Math.PI / 180);
//     ctx.lineWidth = 6;
//     ctx.beginPath();
//     ctx.moveTo(-20, 0);
//     ctx.lineTo(80, 0);
//     ctx.stroke();
//     ctx.restore();

//     ctx.save();
//     ctx.rotate((min * 6 + sec * 0.1) * Math.PI / 180);
//     ctx.lineWidth = 4;
//     ctx.beginPath();
//     ctx.moveTo(-20, 0);
//     ctx.lineTo(100, 0);
//     ctx.stroke();
//     ctx.restore();

//     ctx.save();
//     ctx.rotate(sec * 6 * Math.PI / 180);
//     ctx.strokeStyle = "red";
//     ctx.lineWidth = 2;
//     ctx.beginPath();
//     ctx.moveTo(-30, 0);
//     ctx.lineTo(110, 0);
//     ctx.stroke();
//     ctx.beginPath();
//     ctx.arc(110, 0, 4, 0, Math.PI * 2);
//     ctx.fillStyle = "red";
//     ctx.fill();
//     ctx.restore();

//     ctx.save();
//     ctx.beginPath();
//     ctx.arc(0, 0, 6, 0, Math.PI * 2);
//     ctx.fillStyle = "black";
//     ctx.fill();
//     ctx.restore();

//     ctx.restore();
//     window.requestAnimationFrame(animate);
// }

// window.addEventListener('resize', () => {
//     const canvas = document.getElementById("canvas");
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
// });

// window.requestAnimationFrame(animate);