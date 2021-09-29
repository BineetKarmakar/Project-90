function Login(){
    Player1_name=document.getElementById("player_1").value;
    Player2_name=document.getElementById("player_2").value;

    localStorage.setItem("Player1",Player1_name);
    localStorage.setItem("Player2",Player2_name);

    window.location="game_page_quiz.html";
};