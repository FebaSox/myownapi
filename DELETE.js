const btnEL = document.querySelector('.btn');

const clickHandler = async () => {
    try {
        const res = await fetch('https://reqres.in/api/users', {
            method: 'DELETE'
        });
        const data = await res.json();

        if (!res.ok) {
            console.log(data.description);
            return;
        }

        console.log(data);
    } catch (error) {
        console.log(error);
    }
};
    

  btnEL.addEventListener('click', clickHandler);  