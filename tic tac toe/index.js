const gamebtn= document.querySelectorAll('.btn')
const winnegMsg= document.querySelector('.winningMsg')
const resetBtn = document.querySelector('#reset')


let xturn= true

const winPattern=[
    [0,1,2],
    [0,3,6],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]


const checkwinner=()=>{
    for(let pattern  of winPattern){
        
        let pos1= gamebtn[pattern[0]].innerText
        let pos2= gamebtn[pattern[1]].innerText
        let pos3= gamebtn[pattern[2]].innerText


        if(pos1 !=""&& pos2 !=''&& pos3 !=''){
            if(pos1==pos2 && pos2==pos3){
                // console.log(`${pos1} is winner`)
                winnegMsg.innerText=`${pos1} is winner`
                for(let buttons of gamebtn){
                    buttons.disabled=true
                }
            }
 
        }

    }
}


gamebtn.forEach((button)=>{
    button.addEventListener('click',function(){
        if(xturn){
            button.innerHTML='x'
            xturn=false
        }
        else{
            button.innerHTML='o'
            xturn=true
        }
        button.disabled=true

        checkwinner() 
     }
    )
       
})

const resetfn=()=>{
    for(box of gamebtn){
        box.innerText=""
        winnegMsg.innerHTML=""
        box.disabled=false

    }
}
 
 
resetBtn.addEventListener('click',()=>{
 resetfn()
})



     

