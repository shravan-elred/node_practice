import * as fs from "fs";

import * as os from "os";

console.log('CPUs', os.cpus().length)

fs.writeFileSync('text.txt', 'Ahoy!', () => { });
fs.writeFile('text.txt', 'Ahoy! async', () => { });

const sampleContacts = [
    '98765432100',
    '98765432110',
    '98765432120',
    '98765432130',
    '98765432140',
    '98765432150',
    '98765432160',
    '98765432170',
    '98765432180',
    '98765432190'
];

fs.writeFileSync('contacts.txt', sampleContacts.join('\n'));
console.log('created contacts.txt');

const response = fs.readFileSync('contacts.txt', 'utf-8');

const contacts = response.split('\n');
var updatedContacts = [];
for (let i = 0; i < contacts.length; i++) {
    updatedContacts.push(parseInt(contacts[i]) * 10);
}

fs.writeFileSync('updatedContacts.txt', updatedContacts.join('\n'));
console.log('created updatedContacts.txt');

fs.unlinkSync('contacts.txt');
console.log('unlicked contacts.txt');

const stats = fs.statSync('updatedContacts.txt');
console.log('updatedContacts.txt', stats);