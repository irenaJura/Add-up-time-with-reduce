### Tally up string times with reduce

In this exercize I learned how to add up the times from DOM elements.

Each individual time is saved in a custom data attribute of a list item.

We select all of them and covert them into an array of strings.

We then map over them to get the times and we loop over them to split them into minutes and seconds. Also, those strings get converted into numbers by parseFloat function.

Then the reduce function returns the total number of seconds.

What's left is to calculate the hours, minutes and seconds left.