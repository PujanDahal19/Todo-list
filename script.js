const addItem = document.querySelector('.add-item');
const todoList = document.querySelector('.todos');


const newTodo = text=>{
    const html = 
    `<li class="list">
    <span>${text}</span>
    <i class="far fa-trash-can delete"></i>
    </li>`
    
    todoList.innerHTML += html;
}

// Add Todo to the list
addItem.addEventListener('submit', e=>{
    e.preventDefault();
    let text = addItem.add.value.trim();
    if(text.length){
        newTodo(text);
        addItem.reset();
    }

});

// Delete todo from the list

// const deleteItem = document.querySelectorAll('.delete');

// deleteItem.forEach(item=>{
    
//     item.addEventListener('click', (e)=>{
//         // console.log(e.target.parentElement);
//         const remove = e.target.parentElement;
//         remove.remove();

//     });
// })

todoList.addEventListener('click', e=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

// Search the Todo List

const filterTodos = term=>{
    // console.log(Array.from(todoList.children));
    Array.from(todoList.children)
    .filter(item =>{
         return !item.textContent.toLowerCase().includes(term);
    })
    .forEach(item =>{
        item.classList.add('filtered');
    });

    Array.from(todoList.children)
    .filter(item =>{
         return item.textContent.toLowerCase().includes(term);
    })
    .forEach(item =>{
        item.classList.remove('filtered');
    });
    
};

const search = document.querySelector('.search');

search.addEventListener('keyup', (e)=>{
    // console.log(search.search.value);
    const searchText = search.search.value.trim();
    filterTodos(searchText);

});

