const btnEL = document.querySelector('.btn');

const newUser = {
    name: 'Seba',
    job: 'Programmer',
    age: 21
};


const clickHandler = async () => {
    try {
        const res = await fetch('https://reqres.in/api/users');
        const data = await res.json();
        
        if (!res.ok) {
            console.log(data.description);
            return;
        }

        console.log(data[3].first_name);
    } catch (error) {
        console.log(error);
    }
};
    

  btnEL.addEventListener('click', clickHandler);  