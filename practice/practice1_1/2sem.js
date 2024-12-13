//13
const secondSemesterBtn = document.getElementById('second-semester-btn');

const practicesTable = document.getElementById('practices-table');

const secondSemesterPractices = [
    {number: 1, topic: "Базовое бэкенд-приложение"},
    {number: 2, topic: "HTTP-запросы"},
    {number: 3, topic: "JSON и работа с ним"},
    {number: 4, topic: "HTTP-ответы"},
    {number: 5, topic: "Проектирование API"},
    {number: 6, topic: "Роутинг и его настройка"},
    {number: 7, topic: "NoSQL базы данных"},
    {number: 8, topic: "Обеспечение авторизации и доступа пользователей"},
    {number: 9, topic: "Работа сторонних сервисов уведомления и авторизации"},
    {number: 10, topic: "Основы ReactJS"},
    {number: 11, topic: "Работа с компонентами динамической DOM"},
    {number: 12, topic: "Использование хуков в React"},
    {number: 14, topic: "Основы микросервисной архитектуры"},
    {number: 15, topic: "Разработка классических модулей веб-приложений"},
    {number: 16, topic: "Разработка классических модулей веб-приложений"},
];

secondSemesterBtn.addEventListener('click', () => {
    const tbody = practicesTable.querySelector('tbody');

    tbody.innerHTML = '';

    secondSemesterPractices.forEach(practice => {
        const row = document.createElement('tr');

        const numberCell = document.createElement('td');
        numberCell.textContent = practice.number;

        const topicCell = document.createElement('td');
        topicCell.textContent = practice.topic;

        const attendanceCell = document.createElement('td');
        attendanceCell.innerHTML = '<input type="checkbox">';

        const completionCell = document.createElement('td');
        completionCell.innerHTML = '<input type="checkbox">';

        row.appendChild(numberCell);
        row.appendChild(topicCell);
        row.appendChild(attendanceCell);
        row.appendChild(completionCell);

        tbody.appendChild(row);
    });
});

//14
const showLectionsBtn = document.getElementById('show-lections-btn');
const lectionsTable = document.getElementById('lections-table');

showLectionsBtn.addEventListener('click', () => {
  if (lectionsTable.style.display === 'none' || lectionsTable.style.display === '') {
    lectionsTable.style.display = 'block';
    lectionsTable.style.opacity = 0;
    lectionsTable.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
      lectionsTable.style.opacity = 1;
    }, 0);
    showLectionsBtn.textContent = 'Скрыть лекции';
  } else {
    lectionsTable.style.opacity = 0;
    lectionsTable.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
      lectionsTable.style.display = 'none';
    }, 500);
    showLectionsBtn.textContent = 'Показать лекции';
  }
});