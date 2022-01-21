Design decisions: 
Some of the design decisions I made was creating helper functions to make some 
tasks a bit easier. This is just to prevent repetitive coding to make the program more readable.
Some object creations were a bit more difficult as they couldn't be initialized within different names,
so it was needed to be declared by itself opposed to in a function or loop. I decided to create
multiple objects that could be used in obtaining the final statistics needed on the stats page to make it 
easier. This is so all orders and information are kept on the server side and get updated as they need
to be.

How to run the program:
First you need to install the ejs template engine.
To do this, open the command prompt to the directory containing the files.
Then in the command prompt type:
	
	npm install ejs

After doing this the template engine will be installed, and then you can run the server.

To run the server, in the same command prompt window. Type:

	node server.js

After the server has started, go on a web browser and go to the website

localhost:3000

as the server will be using the port 3000.
At this point, you can use the website and server as you wish.
To close the server, press CTRL + C in the command prompt.