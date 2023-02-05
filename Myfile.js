
const canvas = document.querySelector("canvas"),
ctx = canvas.getContext("2d");
let prevMouseX, prevMouseY, snapshot,
isDrawing = false;
window.addEventListener("load", () =>
{
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
});
const drawRect = (e) =>{
    ctx.strokeRect(e.offsetX, e.offsetY, prevMouseX - e.offsetX, prevMouseY - e.offsetY);
}
const startDraw = (e) =>
{
    isDrawing = true;
    prevMouseX = e.offsetX;
    prevMouseY = e.offsetY;
    ctx.beginPath();
}
const drawing = (e) =>
{
    if(!isDrawing) return;
    if(selectedTool === =)
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
}
toolbar.forEach(toolbar => {
    

        btn.addEventListener("click", () => {
            document.querySelector(".options .active").classList.remove("active");
            btn.classList.add("active");
            console.log(btn.id);
        });
    });
canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mouseup",() => isDrawing = false);

