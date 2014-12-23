# FirstSteps module for Processwire based on intro.js
@author  Luis Santiago "blad" & The Superhero Nico Knoll "Nico"

ProcessWire 2.x 


#### Details

Tutorials ...etc

#### Installation

This module's files should be placed in /site/modules/FirstSteps/


#### How to use it in YOUR module

As with version 1.6.0 your now able to use FirstSteps in your Process modules, too.
The only requirement is that they have a "___execute()" function and an own page, which every Process module should have anyway.

**Example:**
Add the following code inside your "___execute()" function:

```php
public function ___execute() {
  $firstSteps = $this->modules->get('FirstStepsHelper');
		
	$firstSteps->addStep(
		'title', 
		'content',
		'#selector', // like #wrapper
		'position' // bottom, top, left, right
	);
	
	$firstStepsRendered = $firstSteps->render();
	
	return $firstStepsRendered;
}
```


#### Support forum

https://processwire.com/talk/topic/7728-module-firststeps/
