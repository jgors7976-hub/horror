// script.js — раздельный JavaScript для интерактива FNAF

document.addEventListener('DOMContentLoaded', function() {

  // 1. Пасхалка: клик по секретному блоку
  const secretBox = document.getElementById('secret-code');
  if (secretBox) {
    secretBox.addEventListener('click', function(e) {
      // Меняем содержимое с пасхалкой
      const spans = secretBox.querySelectorAll('span');
      if (spans.length === 3) {
        // Эффект "взлома"
        spans[0].textContent = '🕯️';
        spans[1].textContent = '👻';
        spans[2].textContent = '1987';
        // Дополнительный визуальный эффект
        secretBox.style.background = '#2f0a0a';
        secretBox.style.borderColor = '#ff8888';
        secretBox.style.boxShadow = '0 0 60px #ff2222';
        // Анимация исчезновения через 2с (возврат)
        setTimeout(() => {
          spans[0].textContent = '1987';
          spans[1].textContent = '☠️';
          spans[2].textContent = 'FNAF';
          secretBox.style.background = '#1e0606';
          secretBox.style.borderColor = '#b33';
          secretBox.style.boxShadow = '0 0 40px #a00';
        }, 2000);
      }
    });
  }

  // 2. Динамический эффект "мерцания" для хедера (glitch-текст)
  const glitch = document.querySelector('.glitch-text');
  if (glitch) {
    setInterval(() => {
      // случайное смещение тени (эффект глюка)
      const offsetX = (Math.random() * 6 - 3).toFixed(1);
      const offsetY = (Math.random() * 6 - 3).toFixed(1);
      const blur = (Math.random() * 12 + 4).toFixed(1);
      glitch.style.textShadow = `${offsetX}px ${offsetY}px ${blur}px #ff3333, ${-offsetX}px ${-offsetY}px ${blur}px #aa0000`;
    }, 1200);
  }

  // 3. Подсветка карточек персонажей при наведении (дополнительно)
  const charCards = document.querySelectorAll('.char-card');
  charCards.forEach((card, index) => {
    card.addEventListener('mouseenter', function() {
      // Звуковой эффект в консоль (имитация)
      console.log(`🔊 Аниматроник ${this.textContent} активирован...`);
    });
  });

  // 4. Счётчик "ночей" – при клике на любую ночь в блоке schedule
  const nightItems = document.querySelectorAll('.night-grid span');
  nightItems.forEach((night) => {
    night.addEventListener('click', function() {
      const nightText = this.textContent;
      alert(`🌙 Ты выбрал ${nightText}. Приготовься к кошмару...`);
      // небольшой визуальный фидбек
      this.style.background = '#5f1414';
      this.style.borderColor = '#ff7777';
      setTimeout(() => {
        this.style.background = '#1f0505';
        this.style.borderColor = '#7a2a2a';
      }, 700);
    });
  });

  // 5. Добавляем анимацию появления блоков при загрузке (плавный вход)
  const blocks = document.querySelectorAll('.block');
  blocks.forEach((block, i) => {
    block.style.opacity = '0';
    block.style.transform = 'translateY(24px)';
    setTimeout(() => {
      block.style.transition = 'opacity 0.6s ease, transform 0.5s ease';
      block.style.opacity = '1';
      block.style.transform = 'translateY(0)';
    }, 100 + i * 70);
  });

  // 6. "Эффект камеры" – случайное появление красной вспышки (имитация наблюдения)
  let flashInterval = setInterval(() => {
    // только если страница видима
    if (document.hidden) return;
    const wrapper = document.querySelector('.site-wrapper');
    if (wrapper) {
      wrapper.style.transition = 'box-shadow 0.15s';
      wrapper.style.boxShadow = '0 0 80px 20px rgba(200, 0, 0, 0.5)';
      setTimeout(() => {
        wrapper.style.boxShadow = '0 25px 50px -8px rgba(0,0,0,0.9), inset 0 2px 4px rgba(255,50,50,0.2)';
      }, 200);
    }
  }, 8000); // каждые 8 секунд

  // 7. Останавливаем интервал, если пользователь уходит (оптимизация)
  document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
      clearInterval(flashInterval);
    } else {
      // перезапускаем с новым интервалом
      clearInterval(flashInterval);
      flashInterval = setInterval(() => {
        if (document.hidden) return;
        const wrapper = document.querySelector('.site-wrapper');
        if (wrapper) {
          wrapper.style.transition = 'box-shadow 0.15s';
          wrapper.style.boxShadow = '0 0 80px 20px rgba(200, 0, 0, 0.5)';
          setTimeout(() => {
            wrapper.style.boxShadow = '0 25px 50px -8px rgba(0,0,0,0.9), inset 0 2px 4px rgba(255,50,50,0.2)';
          }, 200);
        }
      }, 8000);
    }
  });

  // 8. Консольное предупреждение (атмосфера)
  console.log('%c⚠️ ОСТОРОЖНО: ТЫ НЕ ОДИН В ЭТОЙ ПИЦЦЕРИИ ⚠️', 'color: #ff3333; font-size: 18px; font-weight: bold;');
  console.log('%c1987 | Five Nights at Freddy\'s', 'color: #aa5555; font-size: 14px;');

  // 9. Дополнительный эффект: случайное мерцание фона (очень слабое)
  setInterval(() => {
    const body = document.body;
    const random = Math.random() * 0.08;
    body.style.backgroundColor = `rgba(30, 0, 0, ${random})`;
    setTimeout(() => {
      body.style.backgroundColor = '#0d0d0d';
    }, 150);
  }, 4000);

  // 10. Клик по цитате – смена текста (пасхалка)
  const blockquote = document.querySelector('blockquote');
  if (blockquote) {
    blockquote.addEventListener('dblclick', function() {
      const original = this.textContent;
      this.textContent = '“Ты думал, что это просто игра? Ошибка.”';
      this.style.color = '#ff6b6b';
      this.style.transition = '0.4s';
      setTimeout(() => {
        this.textContent = original;
        this.style.color = '#ffc8c8';
      }, 2500);
    });
  }

  console.log('🔦 FNAF сайт загружен. Удачи в пятую ночь.');
});
