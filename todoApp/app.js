var list = document.getElementById("list")


function todo(){
        var todo_item = document.getElementById("todo-item")

      

        if (todo_item.value==="")
        {
            alert("List cant be null");
        }
        else{
              // Add Element
        var li = document.createElement("li");
        var liText = document.createTextNode(todo_item.value);
        li.appendChild(liText);

        // Add Button Edit
        var editBtn = document.createElement("img");
        var editText = document.createTextNode("Edit");
        editBtn.setAttribute("class","img1");
        editBtn.setAttribute("src","edit.png");
        editBtn.setAttribute("onclick","editItem(this)");

      

    // Add Button Delete

    var delBtn = document.createElement("img");
    var delText = document.createTextNode("Delete");
    delBtn.setAttribute("class","img1");
    delBtn.setAttribute("src","delete.png");
    delBtn.setAttribute("onclick","deleteItem(this)");
    
    delBtn.appendChild(delText);
    li.appendChild(delBtn);

    todo_item.value="";

    editBtn.appendChild(editText);
    li.appendChild(editBtn);
        list.appendChild(li);
        }


}


function deleteItem(e)
{
       e.parentNode.remove();
}

function editItem(e){
        var newText = prompt("Enter New Text",e.parentNode.firstChild.nodeValue);
        e.parentNode.firstChild.nodeValue= newText;
}


function deleteAll(){
            list.innerHTML = " ";

}