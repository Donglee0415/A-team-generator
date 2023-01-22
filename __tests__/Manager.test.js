// using Manager constructor 
const Manager = require('../lib/Manager');

// creating manager object  
test('creates an Manager object', () => {
    const manager = new Manager('Dong', 90, 'dn.lee0415@gmail.com', 7);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role from getRole()
test('gets role of employee', () => {
    const manager = new Manager('Dong', 90, 'dn.lee0415@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 