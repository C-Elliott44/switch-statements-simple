// Switch statements are faster than if statements
// This is because once a match is found the code runs and the checking stops
// if statement checks all conditions

var msg;        // Message
var level = 2;  // Level for switch statement

switch (level) {
    case 1:
        msg = 'Good luck on the first test';
        break;
    
    case 2:
        msg = 'Second of three - keep going!';
        break;

    case 3:
        msg = 'Final round, almost there!';
        break;

    default:
        msg = 'Good luck!';
        break;
}

var el = document.getElementById('answer');
el.textContent = msg;