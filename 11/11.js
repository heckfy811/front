// 11
document.querySelector('h1').textContent = "Добро пожаловать на наш сайт!";
document.querySelector('h2').style.color = 'red';
document.querySelector('.content2 p').textContent = "Это новый текст параграфа.";
const videos = document.querySelectorAll('video');
videos.forEach(video => video.style.display = 'none');

let formData = {
    name: '',
    email: '',
    phone: '',
    date: '',
    comment: '',
    
    printData: function() {
        console.log(`Имя: ${this.name}`);
        console.log(`E-mail: ${this.email}`);
        console.log(`Телефон: ${this.phone}`);
        console.log(`Дата: ${this.date}`);
        console.log(`Комментарий: ${this.comment}`);
    }
};

function submitForm(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение формы

    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const phone = document.querySelector('#phone').value;
    const date = document.querySelector('#date').value;
    const comment = document.querySelector('#comment').value;

    // Проверки
    if (!name || !email || !comment) {
        alert("Поля имя, email и комментарий не могут быть пустыми.");
        return;
    }
    
    if (!/^\d+$/.test(phone)) {
        alert("Поле телефон должно содержать только цифры.");
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Введите корректный e-mail.");
        return;
    }

    formData.name = name;
    formData.email = email;
    formData.phone = phone;
    formData.date = date;
    formData.comment = comment;

    formData.printData();
}

document.querySelector('#data-form').addEventListener('submit', submitForm);

//14
const title = document.getElementById('hello');

title.addEventListener('mouseover', () => {
  title.style.transition = 'transform 0.3s ease';
  title.style.transform = 'scale(1.2)';
});

title.addEventListener('mouseout', () => {
  title.style.transform = 'scale(1)';
});

const paragraph = document.getElementById('front');

paragraph.addEventListener('click', () => {
  paragraph.style.transition = 'background-color 0.5s ease';
  paragraph.style.backgroundColor = paragraph.style.backgroundColor === 'lightblue' ? 'white' : 'lightblue';
});

const image = document.getElementById('me');

image.addEventListener('mouseover', () => {
  image.style.transition = 'transform 0.5s ease';
  image.style.transform = 'rotate(360deg)';
});

image.addEventListener('mouseout', () => {
  image.style.transform = 'rotate(0deg)';
});

const form = document.getElementById('data-form');
const message = document.getElementById('form-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  message.textContent = 'Форма отправлена!';
  message.style.display = 'block';
  message.style.color = 'black';
  message.style.transition = 'color 1s ease';

  setTimeout(() => {
    message.style.color = 'green';
  }, 0);

  setTimeout(() => {
    message.style.display = 'none';
  }, 3000);
});