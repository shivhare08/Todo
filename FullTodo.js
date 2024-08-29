const data = [];
function Addtodo(){
    data.push({
        title: document.querySelector('input').value,
    })
    render();
}


// console.log(Date());


function deletedoto(index){
    data.splice(index,1)
    render()
}

function todoComponent(information , index){
    const h6 = document.createElement('h6');
    const button = document.createElement('button');
    const div = document.createElement('div');

    div.setAttribute('class','js')
    h6.innerHTML =information.title;
    h6.setAttribute('class','styleelement')
    
    button.innerHTML = 'delete';
    button.setAttribute('class','jsbuttondelete')
    button.setAttribute("onclick","deletedoto("+ index +")")
    const button2 = document.createElement('button');
    button2.innerHTML = 'edit'
    button2.setAttribute('class','jsbuttonedit')
    
    
    div.append(h6);
    div.append(button);
    div.append(button2)
    return div;
}

function render(){
    document.querySelector('#data').innerHTML = "";
    for(let i=0;i<data.length;i++){
        const element = todoComponent(data[i] , i);
        document.querySelector('#data').appendChild(element)
    }
}