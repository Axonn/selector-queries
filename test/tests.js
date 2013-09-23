window.onload = function() {
    
    var test_small = document.getElementById("test-small");
    var test_big = document.getElementById("test-big");
	var test_bigger = document.getElementById("test-bigger");
	var test_bigger_child1 = document.getElementById("test-bigger-child1");
	var test_bigger_child2 = document.getElementById("test-bigger-child2");
    
    test("big element has a wide class name", function() {
        ok(test_big.className.indexOf("wide"), "Value should be wide");
    });
    
    test("small element has no wide class name", function() {
        equal(test_small.className.indexOf("wide"), -1, "Value should not be wide");
    });
	
	test("new input element has new rules applied", function() {
		equal(test_bigger.className.indexOf("wider"), -1, "Value should not be wide");
	
		test_bigger.setAttribute('data-squery','min-width:400px=wider');
		test_bigger_child1.setAttribute('data-squery',"min-width:400px=wider");
		
		window.SelectorQueries.addElements([test_bigger]);
		
        equal(test_bigger.className.indexOf("wider"), 1, "Value should be wider");
		equal(test_bigger_child1.className.indexOf("wider"), 1, "Value should be wider");
		equal(test_bigger_child2.className.indexOf("wider"), -1, "Value should not be wider");
		
    });
}