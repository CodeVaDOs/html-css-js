# Call method from the prototype
 Write object constructor `Constructor` with method `callFromPrototype` that will receive a name of the method as a string. On calling this method on the constructed object - call the method of the constructors prorotype. Return value that is returned from the prototype method. A prototype will be assigned to the constructor during testing.

For example,

`var obj = new Constructor;`
`obj.callFromPrototype("helloWorld")`
will call method `helloWorld` from prototype of the `Constructor` and will return any value returned by the `helloWorld`

```
function Constructor() {
  // write your code here
}
```
