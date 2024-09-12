const btnEL = document.querySelector('.btn');

const newUser = {
    name: 'Seba',
    job: 'Programmer',
    age: 21
};


const clickHandler = async () => {
    try {
        const res = await fetch('https://reqres.in/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(newUser)
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