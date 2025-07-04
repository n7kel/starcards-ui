// Ждем, когда вся страница полностью загрузится
document.addEventListener("DOMContentLoaded", function() {

    // Находим наши кнопки по их ID
    const playButton = document.getElementById("play-btn");
    const lobbyButton = document.getElementById("lobby-btn");
    const friendsButton = document.getElementById("friends-btn");

    // Используем объект Telegram для показа уведомлений
    const tg = window.Telegram.WebApp;

    // Добавляем "прослушку" клика на кнопку "Играть"
    if (playButton) {
        playButton.addEventListener("click", function() {
            // Показываем всплывающее уведомление через Telegram
            tg.showAlert("Нажата кнопка 'Играть'!");
        });
    }

    // Добавляем "прослушку" клика на кнопку "Создать лобби"
    if (lobbyButton) {
        lobbyButton.addEventListener("click", function() {
            tg.showAlert("Нажата кнопка 'Создать лобби'!");
        });
    }

    // Добавляем "прослушку" клика на кнопку "Друзья"
    if (friendsButton) {
        friendsButton.addEventListener("click", function() {
            tg.showAlert("Нажата кнопка 'Друзья'!");
        });
    }
});