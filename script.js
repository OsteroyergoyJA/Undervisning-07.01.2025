import { greet } from '/module.js';

greet();

console.log('hello');

/*
import { pi, add } from '/module.js';
console.log(add(7, 3));

import multiply from '/module.js';
console.log(multiply(2, 3));

/* *  importerer alt fra module. */

/* Fra HTml  <script type="module">
      import { pi, add } from '/module.js';
      console.log(add(7, 3));
    </script>
    <script type="module">
      import multiply from '/module.js';
      console.log(multiply(2, 3));
    </script>

    */
import * as math from '/module.js';
console.log(math.subtract(2, 3));
