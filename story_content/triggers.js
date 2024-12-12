function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5zdLa3YcnzB":
        Script1();
        break;
      case "6CduMeGF6Kf":
        Script2();
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
  const target = object('6J73VNp7nF0');
const duration = 750;
const easing = 'ease-out';
const id = '6pP0nZFwfXs';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
