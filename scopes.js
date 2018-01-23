function foo() {
  var bar;

  function zip(){
    bar = true;
    var quux = "inside zip";
    return bar;
  }

  quux = "inside foo";
  return zip;
}

console.log(foo()());
