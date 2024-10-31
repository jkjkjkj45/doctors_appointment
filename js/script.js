function openModal(doctorName) {
  document.getElementById('doctorName').innerText = doctorName;

  // Получаем актуальную дату
  const today = new Date();
  const options = { year: 'numeric', month: 'numeric', day: 'numeric' };

  // Генерируем даты на неделю
  const dates = [];
  for (let i = 0; i < 7; i++) {
    const nextDate = new Date(today);
    nextDate.setDate(today.getDate() + i);
    dates.push(nextDate.toLocaleDateString('ru-RU', options));
  }

  // Заполняем заголовки дат в таблице
  const dateHeaderRow = document.querySelector('#timeTableBody').previousElementSibling.children[1];
  dateHeaderRow.innerHTML = ''; // Очищаем предыдущие заголовки
  dates.forEach(date => {
    const th = document.createElement('th');
    th.innerText = date;
    dateHeaderRow.appendChild(th);
  });

  // Генерируем время с 8:00 до 17:30
  const timeSlots = [];
  for (let hour = 8; hour <= 17; hour++) {
    timeSlots.push(`${hour}:00`);
    timeSlots.push(`${hour}:30`);
  }

  // Заполняем таблицу
  const timeTableBody = document.getElementById('timeTableBody');
  timeTableBody.innerHTML = '';

  // Создаем строки для времени
  timeSlots.forEach(time => {
    const row = document.createElement('tr');
    dates.forEach(date => {
      const cell = document.createElement('td');
      cell.innerText = time;
      cell.onclick = () => alert(`Вы записались к врачу на ${time} ${date}`);
      row.appendChild(cell);
    });
    timeTableBody.appendChild(row);
  });

  // Показываем модальное окно
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

// Закрытие модального окна при клике вне его содержимого
window.onclick = function (event) {
  const modal = document.getElementById('myModal');
  if (event.target == modal) {
    closeModal();
  }
}
