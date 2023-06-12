import Person from '@/Person';
it('should sum', () => {
  const person = new Person();
  expect(person.sayHello()).toBe('Wello World!');
});
