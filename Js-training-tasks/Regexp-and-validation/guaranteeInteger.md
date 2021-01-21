# Guarantee Integer
 You need to create a function that will guarantee that provided value will be an integer. If provided a number - function must return its natural equivalent (so a number like `2.5` must be returned as number `2`). If provided a string that contains a number - cast to a natural number. If provided boolean `true` or an object - return `1`. For anything else return - `0`.

For example, `guaranteeInteger(true)` will return number `1`. `guaranteeInteger({a: "foo"})` will return `1`. `guaranteeInteger(undefined)` will return 0.

```
function guaranteeInteger(num) {
 // write your code here
}
```
