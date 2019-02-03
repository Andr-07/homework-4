(function(){
function recursion()

{
const child = document.querySelector('.deepChild');
const divParent = document.querySelector('.parent');
function drawGreen(el) {
            el.style.backgroundColor = 'green';
        }
function catchParent(el)
{

// drawGreen(el);
const parent = el.parentElement;
const id = parent.getAttribute('classname');
if(!id)
{
setTimeout(() =>
{
drawGreen(parent);
catchParent(parent)
}, 300);
} else
{
drawGreen(parent)
};
}
catchParent(child);
}
recursion();
}());
