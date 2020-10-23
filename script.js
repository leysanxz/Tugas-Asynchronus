//// PROMISE.ALL & CHAIN ////
const handleOnClick = async () => {
    promiseChain();
  }
  
  const getUser = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!id) {
                reject(Error("Invalid ID"))
            }
  
            let response;
            if (id > 10) {
                resolve (
                    response = {
                        success: false,
                        id: id,
                        message: "User Not Found!"
                    }
                )
  
            } else {
                resolve (
                    response = {
                        success: true,
                        id: id,
                        message: "User Found"
                    }
                )
            }
        }, 2000)
    })
  }
  
  const promiseChain = () => {
    console.log("Clicked...")
    getUser(11)
        .then(res => {
            console.log(res)
            return getUser(10)
        })
        .then(res => {
            console.log(res)
            return getUser(9)
        })
        .then(res => {
            console.log(res)
        })
        .catch(error => console.log(error))
  }
  const janjiSemua = Promise.all([
    getUser(3), // 1
    getUser(4), // 2
    getUser(10), // 3
    getUser(11),  // 4
    getUser(12)  // 5
])
.then(res => console.log(res))
.catch(error => console.log(error))

///// ASYNC-AWAIT /////

function getFirstName() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            return true ? resolve("Hello") : reject(Error("Gagal"));
        }, 1500);
    });
    return promise;
}
  
  const getLastName = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return true ? resolve("World") : reject(Error("Gagal"));
      });
    });
  };
  
  const handleOnClick = async () => {
    console.log("Clicked....");
    const firstName = await getFirstName();
    const lastName = await getLastName();
    const fullName = `${firstName} ${lastName}`;
    document.querySelector("#hasil").innerText = fullName;
  };