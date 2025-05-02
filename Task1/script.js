const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

function updateBigCup() {
  const totalSmallCups = smallCups.length;
  const filledCups = document.querySelectorAll('.cup-small.full').length;

  if (filledCups === 0) {
    percentage.style.visibility = 'hidden';
    percentage.style.height = '0';
  } else {
    percentage.style.visibility = 'visible';
    percentage.style.height = `${(filledCups / totalSmallCups) * 330}px`;
    percentage.innerText = `${(filledCups / totalSmallCups) * 100}%`;
  }

  if (filledCups === totalSmallCups) {
    remained.style.visibility = 'hidden';
    remained.style.height = '0';
  } else {
    remained.style.visibility = 'visible';
    liters.innerText = `${2 - (250 * filledCups) / 1000}L`;
  }
}

smallCups.forEach((cup, index) => {
  cup.addEventListener('click', () => {
 
    if (
      cup.classList.contains('full') &&
      !cup.nextElementSibling?.classList.contains('full')
    ) {
      index--;
    }

    smallCups.forEach((cup, idx) => {
      if (idx <= index) {
        cup.classList.add('full');
      } else {
        cup.classList.remove('full');
      }
    });

    updateBigCup(); 
  });
});

updateBigCup();