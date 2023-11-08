document.getElementById("myForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Formun varsayılan davranışını engelleyin (sayfa yenileme gibi)
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const description = document.getElementById("description").value;
    const age = document.getElementById("age").value;
    const hobbie = document.getElementById("hobbie").value;

    const postData = { name, email, description, age, hobbie };
    axios.put('http://localhost:3000/users:id', putData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        console.log('Başarılı:', response.data);
      })
      .catch(error => {
        console.error('Hata:', error);
});

    axios.post('http://localhost:3000/users', postData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(response => {
          console.log('Başarılı:', response.data);
        })
        .catch(error => {
          console.error('Hata:', error);
        });
    })