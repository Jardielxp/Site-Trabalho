document.addEventListener('DOMContentLoaded', function() {
    var secretNumber = Math.floor(Math.random() * 11);
    var attempts = 0;
    var maxAttempts = 2;

    document.getElementById('guessButton').addEventListener('click', function() {
        var userGuess = parseInt(document.getElementById('guessInput').value);
        attempts++;

        if (isNaN(userGuess) || userGuess < 0 || userGuess > 10) {
            document.getElementById('message').innerText = 'Por favor, insira um número válido entre 0 e 10.';
            return;
        }

        if (userGuess === secretNumber) {
            document.getElementById('message').innerText = 'Parabéns! Você acertou o número!';
            document.getElementById('kuroko').src = "Imagens/Feliz.png";
            document.getElementById('kuroko').style.width = "80%";
        } else if (attempts >= maxAttempts) {
            document.getElementById('message').innerText = 'Você perdeu! O número secreto era ' + secretNumber + '.';
            document.getElementById('kuroko').src = "Imagens/TristeFundo.png";
            document.getElementById('kuroko').style.width = "50%";
        } else {
            document.getElementById('message').innerText = 'Tentativa incorreta. Tente novamente!';

        }

        if (attempts >= maxAttempts || userGuess === secretNumber) {
            document.getElementById('guessButton').disabled = true;
            document.getElementById('guessInput').disabled = true;
        }
    });

    document.getElementById('Reiniciar').addEventListener('click', function() {
        location.reload(); 
    });
});


