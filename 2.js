const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', DragStart)
item.addEventListener('dragend', DragEnd)

for (const placeholder of placeholders){
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', dragdrop)
}

function DragStart(event){
    event.target.classList.add('hold')
    setTimeout(() => event.target.classList.add('hide'), 0)
    
}

function DragEnd(event){
//    event.target.classList.remove('hold', 'hide')
    event.target.className = 'item'
}

function dragover(event) {
    event.preventDefault()
}
function dragenter(event) {
    event.target.classList.add('hovered')
}
function dragleave(event) {
    event.target.classList.remove('hovered')
}
function dragdrop(event) {
    event.target.classList.remove('hovered')
    event.target.append(item)
}