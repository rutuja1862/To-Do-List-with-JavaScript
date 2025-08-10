
const item = document.querySelector("#ip");  // for user i/p 
const toDoBox = document.querySelector("#to-do-items");  // for to-do items 

item.addEventListener(
    "keyup",
    function(event){
        if(event.key == "Enter"){
            addToDo(this.value);
          //  this.value = ""
        }
        
    }
)

// <i class="fa-solid fa-xmark"></i>

//it will add an item to the list 
const addToDo = (item) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      ${item}
      <i class="fa-solid fa-trash"></i>
    `;

    listItem.addEventListener(
        "click",
        function(){
            this.classList.toggle("done")
        }
    )


    // it will remove the item 
       listItem.querySelector("i").addEventListener(
        "click",
        function(){
            listItem.remove();
        }
       )

       // it will append the item to the list 
      toDoBox.appendChild(listItem);




}