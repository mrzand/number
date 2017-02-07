$(document).ready(function() {

    //Initial Variables

    var answer = Math.floor((Math.random() * 10) + 1);
    console.log("The secret number is: " + answer);
    var numberOfGuesses = 0;
    var guesses = [];
    var distance = null;
    var previousDistance = null;

    function getGuess() {
        $("#submit").click(game);
        $("#guess").keydown(function(enter) {
            if (enter.keyCode == 13) {
                game();
            }
        });
    }

    getGuess();

    function game() {
        for (var i = 0; i < 3; i++) {
            var guess = parseInt($('#guess').val());
            if (guess !== null && $.isNumeric(guess) && (1 < guess < 11)) {
                $('#guess').val('');
                numberOfGuesses += 1;
                guesses.push(guess);
                distance = Math.abs(answer - guess);
                previousDistance = Math.abs(answer - guesses[guesses.length - 2]);
                if (guess === answer) {
                    $('#hint').html('Поздравляем, Вы победили ! Секретная цифра ' + answer);
                } else {
                    console.log(guess, answer, previousDistance, distance);
                    if (isNaN(previousDistance)) {
                        if (guess > answer) {
                            $('#hint').html('Загаданное число меньше: ' + guess);
                        } else if (guess < answer) {
                            $('#hint').html('Загаданное число больше: ' + guess);
                        }

                    } else if (distance > previousDistance) {
                        if (guess > answer) {
                            $('#hint').html('Холодно, Загаданное число меньше: ' + guess);
                        } else if (guess < answer) {
                            $('#hint').html('Холодно, Загаданное число больше: ' + guess);
                        }
                    } else if (distance < previousDistance) {
                        if (guess > answer) {
                            $('#hint').html('Теплее, Загаданное число меньше: ' + guess);
                        } else if (guess < answer) {
                            $('#hint').html('Теплее, Загаданное число больше: ' + guess);
                        }
                    }
                }
            }
        }
        $('#newgame').click(function(e) {
            e.preventDefault();
            answer = Math.floor((Math.random() * 10) + 1);
            console.log(answer);
            numberOfGuesses = 0;
            guesses = [];
            distance = null;
            previousDistance = null;
            $('#hint').html('');
            $('#guess').val('');
        });
    }
});
