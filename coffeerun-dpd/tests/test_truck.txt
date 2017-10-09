8.8
App.DataStore();
var dsOne = new App.DataStore();

var dsTwo = new App.DataStore();
dsOne.data['email'] = 'james@bond.com';

dsOne.data['order'] = 'black coffee';

dsTwo.data['email'] = 'moneypenny@bond.com';

dsTwo.data['order'] = 'chai tea';


dsOne.data;

dsTwo.data;

8.10
var ds = new App.DataStore();
ds.add('m@bond.com', 'tea');
ds.add('james@bond.com', 'eshpressho');
ds.getAll();
ds.remove('james@bond.com');
ds.getAll();
ds.get('m@bond.com');
ds.get('james@bond.com');

8.12
var myTruck = new App.Truck('007', new App.DataStore());
myTruck.createOrder({emailAddress: 'dr@no.com', coffee: 'decaf'});
myTruck.createOrder({emailAddress: 'me@goldfinger.com', coffee: 'double mocha'});
myTruck.createOrder({emailAddress: 'm@bond.com', coffee: 'earl grey'});
myTruck.db;

8.32
myTruck.createOrder({emailAddress: 'me@goldfinger.com', coffee: 'double mocha'}); 
myTruck.createOrder({emailAddress: 'dr@no.com', coffee: 'decaf'});
myTruck.createOrder({emailAddress: 'm@bond.com', coffee: 'earl grey'});
myTruck.printOrders();
myTruck.deliverOrder('dr@no.com'); myTruck.deliverOrder('m@ bond.com'); myTruck.printOrders();