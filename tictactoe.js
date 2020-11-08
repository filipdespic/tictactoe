const container = document.getElementById("container");

//sets up the board
const gameboard = (() => {
    const board =
        [[" ", " ", " "],
        [" ", " ", " "],
        [" ", " ", " "]];

    const gameState = () => {
        let x = 0;
        let y = 0;
        //adds individual gameboard elements
        board.forEach(element => {
            element.forEach(el => {

                let p = document.createElement('button');
                p.className = "btn";
                p.id=x +" "+ y++;
                container.appendChild(p);
                p.innerText = el;
                console.log(el);
            });
            y=0; x++;
            container.innerHTML += "<br>";

        });
    };
    return { gameState };
})();


const gm = ()=>{

let izvrsi = ()=> console.log("joooj");
//add event listeners
let buttons = document.getElementsByClassName("btn");
const events=()=>{
Array.from(buttons).forEach((button) => {
    button.addEventListener("click", izvrsi);
 });
}
 return {events};
}



//players
const players = (name, mark) => {
    return {};
};

gameboard.gameState();
const gameMaster = gm();
gameMaster.events();