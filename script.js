// select anything with data-time
// Array.from converted a nodelist into an array of strings
const timeNodes = Array.from(document.querySelectorAll('[data-time]'));
// console.log(timeNodes); 

//  dataset property provides access to all the
// custom data attributes (data-*) set on the element
const seconds = timeNodes
    .map(node => node.dataset.time)
    .map(timeCode => {
        // split method separates mins and secs
        // parseFloat fnction returns a floating point number
        const [mins, secs] = timeCode.split(':').map(parseFloat); 
        return (mins * 60) + secs;  
    })
    .reduce((accumulator, currentValue) => accumulator + currentValue)
    console.log(seconds); // total number of seconds 

    let secondsLeft = seconds;
    const hours = Math.floor(secondsLeft / 3600);
    console.log(hours); // total number of hours

    secondsLeft = secondsLeft % 3600;
    console.log(secondsLeft); // number of seconds left

    const minutes = Math.floor(secondsLeft / 60);
    secondsLeft = secondsLeft % 60;
    console.log(hours, minutes, secondsLeft);


    