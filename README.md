# Bank Tech Test

## Overview

A quick tech test submission for a tiny app in to you which you can deposit and withdraw values.

## User Stories

Can be found [here](./user_stories.txt)

## Usage

* Clone repo
* `cd` to the project's root directory
* To first check test coverage, open SpecRunner.html in your browser `open SpecRunner.html`
* SpecRunner.html requires all the necessary files, so from here you can open your browser's Dev Tools and navigate to the JS Console to start interacting with the app.
* From here you can create your 'bank account' with `var myCoolAccount = new Account();`
* You can now deposit 'moneys' by calling deposit like so `myCoolAccount.deposit(1000);`
* You can now withdraw some of it by calling withdraw `myCoolAccount.withdraw(500);`
* You can get a printed 'bank statement' with `myCoolAccount.printStatement()`

## Tech

* Pure object-oriented JS

## Screenshot

![Bank Tech Test Screenshot](http://img1.imagilive.com/0417/Screen_Shot_2017-04-18_at_172249.png)
