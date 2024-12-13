//13
const hello = document.getElementById("hi");

hello.addEventListener('click', () => {
    alert("Вы кликнули на заголовок - так держать!");
});

const studentPhoto = document.getElementById('me');

studentPhoto.addEventListener('mouseover', () => {
    studentPhoto.style.width = '240px'; 
    studentPhoto.style.height = '144px';
});

studentPhoto.addEventListener('mouseout', () => {
    studentPhoto.style.width = '200px';
    studentPhoto.style.height = '120px'; 
});

studentPhoto.addEventListener('click', () => {
    studentPhoto.src = 'public/winter.jpg';
});

studentPhoto.addEventListener('dblclick', () => {
    alert('Не налегай, у меня не так много любимых преподавателей');
});