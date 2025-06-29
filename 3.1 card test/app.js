const container = document.querySelectorAll('.card-container').forEach(container => {

    const card = container.querySelector('.card');      //document.getElementById('card1');
    
    container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left; // X position within container
    const y = e.clientY - rect.top;  // Y position within container
    
    const rotateY = ((x / rect.width) - 0.5) * 20;  // range: -10 to +10
    const rotateX = ((y / rect.height) - 0.5) * -20; // range: -10 to +10
    
    card.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(1.01)`;

    });
    
    container.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateY(0deg) rotateX(0deg)';
    // container.style.border = "3px white solid";
});


// container.addEventListener('mouseleave', () => {
//     //   card.style.transform = 'rotateY(0deg) rotateX(0deg)';
//         // container.style.border = "0px white solid"; 

//         });
});

