let fileInput = document.querySelector('#myFile');
fileInput.addEventListener('change', function(event) {

    let file = event.target.files[0];

    console.log(file);


    let reader = new FileReader();

    console.log(reader)

    reader.readAsText(file)

    reader.onload = function() {
        let { result } = reader;
        console.log(result);
        console.log(typeof result);

        let parsedData = null
        try {
            parsedData = JSON.parse(result)
        } catch(event) {
            console.log(event)
        }
        
        console.log(parsedData)

        if(parsedData){
            console.log(parsedData);
        } else {
            alert("Error with Files")
        }
    }
    reader.onerror = function() {
        console.log(reader.error)
    }

})

let arr = [{user: 'Simeon', permissions: 3}, {user: 'Kaloyan', permissions: 1}, {user: 'Valeria', permissions: 1},];
console.log(JSON.stringify(arr))

console.log(`//////////////////////////////////////////////////////////////////////////////////////////////////////`)

let fileInput1 = document.querySelector('#myFile1');
fileInput1.addEventListener('change', function(event) {

    let file1 = event.target.files[0];

    console.log(file1);


    let reader1 = new FileReader();

    console.log(reader1)

    reader1.readAsText(file1)

    reader1.onload = function() {
        let { result } = reader1;

        console.log(result);
        console.log(result.split());
        console.log(result.split("\r\n"));

        // let numberArray = []

        let arrayResult = result.split("\r\n")
        console.log(arrayResult)

        // arrayResult.forEach(element => {
        //     let numArr = element.split(',').map(num => Number(num));
        //     numberArray.push(numArr);
        // })

        let numberArray = arrayResult.map(element => {
            return element.split(",").map(num => Number(num));
        })

        numberArray.forEach(item => {
            console.log(item);
            item.forEach(innerItem => {
                console.log(innerItem)
            })

            numberArray.forEach(item => {
                console.log(item.reduce((previousValue, currentValue)  => {
                    return previousValue + currentValue;
                }))
            })

            let summedNumbers = numberArray.map(item => {
                return item.reduce((previousValue, currentValue)  => {
                    return previousValue + currentValue;
                })
            })
            console.log(summedNumbers);

            summedNumbers = summedNumbers.reduce((previousValue, currentValue) => {
                return previousValue + currentValue;
            })
            console.log(summedNumbers)



            let summedNumbers1 = numberArray.flat()

            console.log(summedNumbers1)
            summedNumbers1 = summedNumbers1.reduce((previousValue, currentValue) => {
                return previousValue + currentValue;
            })

            console.log(summedNumbers1)
        })

        console.log(numberArray);
        

    }
        
    reader1.onerror = function() {
        console.log(reader1.error)
    }

})

let arr1 = [{user: 'Simeon', permissions: 3}, {user: 'Kaloyan', permissions: 1}, {user: 'Valeria', permissions: 1},];
console.log(JSON.stringify(arr))
