// JavaScript Document

//
// First 3 divs are visible on page from load, we'll put them in an array called 'visible' later
//


// create p element to hold Reviews text
var p1 = document.createElement('p');
// create Text within p node
var rev1 = document.createTextNode('\"Great Jearb!\" - Coach Z');
// insert that text within p node
p1.appendChild(rev1);

// get div with id 'node1'
var node1 = document.getElementById('node1');
// insert the p element into that div
node1.appendChild(p1);

// repeat steps above for another Review blurb
var p2 = document.createElement('p');
var rev2 = document.createTextNode('\"The best of the best of the best\" - Milbert Grendfield');
p2.appendChild(rev2);
var node2 = document.getElementById('node2');
node2.appendChild(p2);

// another Reviews blurb
var p3 = document.createElement('p');
var rev3 = document.createTextNode('\"I sure bought one, I bought five!\" - Hillpickery Journal');
p3.appendChild(rev3);
var node3 = document.getElementById('node3');
node3.appendChild(p3);

//
// following p elements will be invisible to start. They exist in divs that havent been inserted on the page
// we'll insert them in the 'invisible' array, and swap them later with the divs in the 'visible' array
//

// create a new div but don't append it to document, assign it an ID + class (for styling)
var node4 = document.createElement('div');
node4.setAttribute('id', 'node4');
node4.setAttribute('class', 'node');
// create the p element that lives in this div
var p4 = document.createElement('p');
// create text to live in p element
var rev4 = document.createTextNode('\"Much of the store is clothing, I like it.\" - The Mulblurry Times');
// insert that text into the p element
p4.appendChild(rev4);
node4.appendChild(p4);

// repeat for next invisible div
var node5 = document.createElement('div');
node5.setAttribute('id', 'node5');
node5.setAttribute('class', 'node');
var p5 = document.createElement('p');
var rev5 = document.createTextNode('\"I\ll buy some more stuff here, ferr sheeyure bahd.\" - Jacko Torta');
p5.appendChild(rev5);
node5.appendChild(p5);

// next invisible div
var node6 = document.createElement('div');
node6.setAttribute('id', 'node6');
node6.setAttribute('class', 'node');
var p6 = document.createElement('p');
var rev6 = document.createTextNode('\"Wonderful to behold, beholdable to be held\" - Had Matter');
p6.appendChild(rev6);
node6.appendChild(p6);

// next invisible div
var node7 = document.createElement('div');
node7.setAttribute('id', 'node7');
node7.setAttribute('class', 'node');
var p7 = document.createElement('p');
var rev7 = document.createTextNode('\"Ain\'t no laughin\' matter, come t\'think about it\" - Jorgon Swills');
p7.appendChild(rev7);
node7.appendChild(p7);

// next invisible div
var node8 = document.createElement('div');
node8.setAttribute('id', 'node8');
node8.setAttribute('class', 'node');
var p8 = document.createElement('p');
var rev8 = document.createTextNode('\"What is this, some kinda ro-bit?\" - Old Timey HSR');
p8.appendChild(rev8);
node8.appendChild(p8);

// next invisible div
var node9 = document.createElement('div');
node9.setAttribute('id', 'node9');
node9.setAttribute('class', 'node');
var p9 = document.createElement('p');
var rev9 = document.createTextNode('\"I\ll bet you haven\'t found the secret tortoise cake\" - Chef Blarglearg');
p9.appendChild(rev9);
node9.appendChild(p9);

// store 3 visible divs in 'visible' array
var visible = [];
visible[0] = node1;
visible[1] = node2;
visible[2] = node3;

// store 7 invisible divs in 'invisible' array
var invisible = [];
invisible[0] = node4;
invisible[1] = node5;
invisible[2] = node6;
invisible[3] = node7;
invisible[4] = node8;
invisible[5] = node9;

function swap(){

	// store the 3 visible divs in an Out-Buffer array
	var bufferOut = [];
	bufferOut[0] = visible[0];
	bufferOut[1] = visible[1];
	bufferOut[2] = visible[2];

	// remove the 3 visible divs from their container
	for(i = 0; i < visible.length; i++){
		reviewsContainer.removeChild(visible[i]);
	}

	// store the first 3 invisible divs in an In-Buffer array
	var bufferIn = [];
	bufferIn[0] = invisible[0];
	bufferIn[1] = invisible[1];
	bufferIn[2] = invisible[2];

	// remove those same divs from invisible array
	invisible.splice(0, 3);

	// store contents of In-Buffer into visible array
	visible[0] = bufferIn[0];
	visible[1] = bufferIn[1];
	visible[2] = bufferIn[2];

	// insert the contents of the Out-Buffer (the original 3 visible divs) at the end of invisible array
	invisible.push(bufferOut[0], bufferOut[1], bufferOut[2]);

	// write the new content to the document by appending the new divs to their container
	for(i = 0; i < visible.length; i++){
		reviewsContainer.appendChild(visible[i]);
	}

}

// swap divs every 5 seconds
setInterval(swap, 5000);