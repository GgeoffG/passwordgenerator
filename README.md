# Password Generator

## Description


- This webpage will generate a random password from various arrays of letters, numbers, and symbols
- The purpose is to generate a secure password with given parameters
- The webpage makes it easy to select a password legnth and variables that will fit most criteria for secure passwords on other websites or services.
- Undertaking this project has allowed me (Geoffrey) to understand many different elements of javascript such as functions, query selectors, Math.floor(Math.random()), as well as if statements and for loops

## Table of Contents 


- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

To run this page on your local machine or access development simply install the html and assets folders into a directory.

## Usage

When the user clicks the generate password button a series of prompts and confirmations will allow the user to select various
parameters/attributes they would like their created password to contain.
If the user selects a numeric value between 8-20 and selects okay on at least one additional character set from (special characters,Uppercase characters, Numerical characters)
then a password with the given parameters will be created.
If a user fails to input a numeric value between 8-20 then an alert will appear and no password will be displayed
If a user fails to select at least one additional variable then an alert will appear and no password will be displayed

## Credits

UofO bootcamp provided the base code of this website- https://bootcamp.uoregon.edu/coding/landing
Thanks to 'Web Dev Simplified' https://www.youtube.com/watch?v=iKo9pDKKHnc&t=316s who's video taught me the code used for the 'arrayPusher' function, the .fromCharCode method, the .join method, and influenced much of the code for this generator.

## License

MIT License

Copyright (c) [2023] [Geoffrey Langenberg]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.