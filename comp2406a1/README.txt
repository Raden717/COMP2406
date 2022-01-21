One of the decisions I had to make was create the functions when buttons were created
opposed to creating them outside the main function.

This is because each button was reliant on whatever item they were referencing to, and
in doing this. I would need to have access to the item as they were being added. 

For when items were being added, I decided to do a for loop inside a for loop
mainly because I can split the categories and their items that way. Nothing special.

For the order summary, there are 2 lists here. One that will contain the items added
and the other just containing the everything else. This is so the summary list would
always be below the item list and for them not to interfere with eachother.