let images = document.querySelectorAll('.list img');
let rightBox = document.getElementById('right');
let leftBox = document.getElementById('left');

images.forEach(function (img) {
    img.addEventListener('dragstart', function (e) {
        let selected = e.target;

        rightBox.addEventListener('dragover', function (e) {
            e.preventDefault();
        });
        rightBox.addEventListener('drop', function (e) {
            rightBox.appendChild(selected);
        });

        leftBox.addEventListener('dragover', function (e) {
            e.preventDefault();
        });
        leftBox.addEventListener('drop', function (e) {
            leftBox.appendChild(selected);
        });
    });
});

leftBox.addEventListener('dragover', function (e) {
    e.preventDefault();
});
rightBox.addEventListener('dragover', function (e) {
    e.preventDefault();
});
