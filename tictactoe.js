const container = document.getElementById("container");
const board =
    [[" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]];
//sets up the board
const gameboard = (() => {


    const gameState = () => {
        let x = 0;
        let y = 0;
        //adds individual gameboard elements
        board.forEach(element => {
            element.forEach(el => {

                let p = document.createElement('button');
                p.className = "btn";
                p.id = x + "" + y++;
                container.appendChild(p);
                p.innerText = el;
                console.log(el);
            });
            y = 0; x++;
            container.innerHTML += "<br>";

        });
    };
    return { gameState };
})();




const gm = () => {
    let player = 1;
    const empty = (element) => element === " ";
    const congratulate = () => {
        let congratulation = document.createElement('h1');
        if(player==1)
        player=2;
        else player=1;
        congratulation.innerText ="Takmicar " + player + " je pobedio!";
        container.appendChild(congratulation);

        //turns off click option
        let b = document.getElementsByClassName("btn");
        Array.from(b).forEach((b) => {
            b.style["pointer-events"] = "none";
        });
    };
    let check = () => {
        const col = board.map((column, colIndex) => board.map(r => r[colIndex]));

        board.forEach((row) => {
            if (!(row.some(empty)))
                //same rows
                if (new Set(row).size == 1)
                    congratulate();

        });

        //same collumns
        let col_list = col;
        col_list.forEach((column) => {
            if (!(column.some(empty)))
                if (new Set(column).size == 1)
                    congratulate();
        });

        //same main diagonal
        let mainDiagonal = [];
        let sideDiagonal = [];
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                if (i == j)
                    mainDiagonal.push(board[i][j]);
                if (i + j == 2)
                    sideDiagonal.push(board[i][j]);
            }
        }
        if (!(mainDiagonal.some(empty)))
            if (new Set(mainDiagonal).size == 1)
                congratulate();
        if (!(sideDiagonal.some(empty)))
            if (new Set(sideDiagonal).size == 1)
                congratulate();


    };

    let execute = (e) => {
        if (player == 1) {
            if (!(e.target.innerText == "x") && !(e.target.innerText == "o")) {
                e.target.innerText = "x";
                player = 2;

                let i = (e.target.id)[0];
                let j = (e.target.id)[1];
                board[i][j] = 'x';

                check();

            }
        }


        else if (player == 2) {
            if (!(e.target.innerText == "x") && !(e.target.innerText == "o")) {
                e.target.innerText = "o";
                player = 1;

                let i = (e.target.id)[0];
                let j = (e.target.id)[1];
                board[i][j] = 'y';

                check();
            }

           
        }
    }

    //add event listeners
    let buttons = document.getElementsByClassName("btn");
    const events = () => {
        Array.from(buttons).forEach((button) => {
            button.addEventListener("click", execute);
        });
    }
    return { events };

}



//players
const players = (name, mark) => {
    return {};
};

gameboard.gameState();
const gameMaster = gm();
gameMaster.events();

