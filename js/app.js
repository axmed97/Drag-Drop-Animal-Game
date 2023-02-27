const draggableElements = document.querySelectorAll('.draggable')
const droppableElements = document.querySelectorAll('.droppable')

draggableElements.forEach(element =>{
    element.addEventListener('dragstart', dragStart);
    // element.addEventListener('drag', function(e){
    // element.addEventListener('dragend', function(e){
})

droppableElements.forEach(element => {
    element.addEventListener('dragenter', dragEnter);
    element.addEventListener('dragover', dragOver);
    element.addEventListener('dragleave', dragLeave);
    element.addEventListener('drop', drop);
})
function dragStart(event){
    event.dataTransfer.setData('text', event.target.id);
    console.log(event);
};

function dragOver(e){
    e.preventDefault();
}


function drop(e){
    e.preventDefault();
    e.target.classList.remove('droppable-hover');
    const draggableElementData = e.dataTransfer.getData('text'); // cat 
    const dropppableElementData = e.target.getAttribute('data-draggable-id');
    
    if(draggableElementData === dropppableElementData){
        e.target.classList.add('dropped');
        
        const draggableElement = document.getElementById(draggableElementData);

        e.target.style.backgroundColor = draggableElement.style.color;
        
        draggableElement.classList.add('dragged');
        draggableElement.setAttribute('draggable', false);


        e.target.insertAdjacentHTML('afterbegin',`<i  class="fa-solid fa-${draggableElementData}" ></i>`)
    }
}
function dragEnter(e){
    e.target.classList.add('droppable-hover');
}
function dragLeave(e){
    e.target.classList.remove('droppable-hover');
}