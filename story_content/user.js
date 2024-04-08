function ExecuteScript(strId)
{
  switch (strId)
  {
      case "699On74Cj3o":
        Script1();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const addCssToHead = (cssRules) => {
    const styleElement = document.createElement('style');
    styleElement.textContent = cssRules;
    document.head.appendChild(styleElement);
};

const css = `
.caption-container {
    pointer-events: auto !important;
} .caption{
	cursor: grab;
}
`;
addCssToHead(css);

document.querySelectorAll('.caption-container').forEach(caption => {
    let offsetX, offsetY, posX, posY;

    const handleMouseMove = (e) => {
        e.preventDefault();
        const dx = e.clientX - offsetX;
        const dy = e.clientY - offsetY;
        caption.style.transform = `translate(${posX + dx}px, ${posY + dy}px)`;
    };

    const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        caption.style.cursor = 'grab';
    };

    caption.addEventListener('mousedown', (e) => {
        e.preventDefault();
        caption.style.cursor = 'grabbing';
        offsetX = e.clientX;
        offsetY = e.clientY;
        const rect = caption.getBoundingClientRect();
        posX = rect.left;
        posY = rect.top;
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    });
});

}

};
