const members = document.querySelectorAll('.membersbt');
const senbatsu = document.querySelectorAll('.senbatsu');
const resetButton = document.getElementById('reset-button');

members.forEach(member => {
  member.addEventListener('dragstart', dragStart);
});

senbatsu.forEach(senbatsuDiv => {
  senbatsuDiv.addEventListener('dragover', dragOver);
  senbatsuDiv.addEventListener('drop', drop);
  senbatsuDiv.addEventListener('dragleave', dragLeave);
});

let draggedMember = null;
let imageArray = []; // Array buat nyimpen gambar

function dragStart(e) {
  draggedMember = e.target;
}

function dragOver(e) {
  e.preventDefault();
}

function drop(e) {
  e.preventDefault();

  const targetMember = e.target;
  const targetDiv = targetMember.closest('.senbatsu');

  if (targetDiv) {
    targetDiv.appendChild(draggedMember);
  }
}

function dragLeave(e) {
  const areaGambar = document.getElementById('area-gambar');
  if (!areaGambar.contains(draggedMember)) {
    areaGambar.appendChild(draggedMember);
  }
}

resetButton.addEventListener('click', () => {
  const areaGambar = document.getElementById('area-gambar');
  
  // drag gambar dari div senbatsu ke area gambar
  senbatsu.forEach(senbatsuDiv => {
    const imgElement = senbatsuDiv.querySelector('.membersbt');
    if (imgElement) {
      areaGambar.appendChild(imgElement);
      imageArray.push(imgElement); // nyimpen gambar ke dalam array
    }
  });

  // drag gambar dari array ke area gambar
  imageArray.forEach(img => {
    areaGambar.appendChild(img);
  });
});
