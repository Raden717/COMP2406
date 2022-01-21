Design decisions:
Some of the design decisions I made was creating helper functions to make some
tasks a bit easier. This is just to prevent repetitive coding to make the program more readable.
I tried to use routers, but ultimately it didn't end so well and for the restaurants, I decided to do that
all inside the server file opposed to creating routers as it made it easier.

How to run the program:
First you need to install the pug template engine and express.
To do this, open the command prompt to the directory containing the files.
Then in the command prompt type:

	npm install pug
	npm install express

After doing this the template engine will be installed, and then you can run the server.

To run the server, in the same command prompt window. Type:

	node server.js

After the server has started, go on a web browser and go to the website

localhost:3000

as the server will be using the port 3000.
At this point, you can use the website and server as you wish.
Note, the buttons are basically useless and don't send any requests as I wasn't able to figure it out
To close the server, press CTRL + C in the command prompt.
