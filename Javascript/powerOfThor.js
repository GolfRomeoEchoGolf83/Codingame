/**
 * Created by Greg on 01/12/2016.
 */
/**
 *
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 * ---
 * Hint: You can use the debug stream to print initialTX and initialTY, if Thor seems not follow your orders.
 **/

var inputs = readline().split(' ');
var LightX = parseInt(inputs[0]);
var LightY = parseInt(inputs[1]);
var ThorX = parseInt(inputs[2]);
var ThorY = parseInt(inputs[3]);

while (true) {
    var E = parseInt(readline());
    if (ThorY == LightY) {
        if (ThorX < LightX) {
            print('E');
            ThorX++;
        } else {
            print('W')
            ThorX--;
        }
    } else if (ThorY > LightY) {
        if (ThorX == LightX) {
            print('N');
            ThorY--;
        } else if (ThorX > LightX) {
            print('NW');
            ThorX--;
            ThorY--;
        } else {
            print('NE');
            ThorX++;
            ThorY--;
        }
    } else if (ThorY < LightY) {
        if (ThorX == LightX) {
            print('S');
            ThorY++;
        } else if (ThorX > LightX) {
            print('SW');
            ThorX--;
            ThorY++;
        } else {
            print('SE');
            ThorX++;
            ThorY++;
        }
    }
}
