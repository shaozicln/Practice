let darkmode = localStorage.getItem('darkmode');
const Switch = document.getElementById('switch');

const Light = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null)
}

const Dark = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
}

if (darkmode === "active") Dark();

Switch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode');
    darkmode === "active" ? Light() : Dark();
})