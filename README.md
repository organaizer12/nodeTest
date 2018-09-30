# nodeTest
Simple test on webdriver io, mocha, chai
<br/>Install Selenium Standalone Service 
```
$ java -jar /your/download/directory/selenium-server-standalone-3.14.0.jar
```
Download <a href=https://github.com/mozilla/geckodriver/releases>geckodriver</a>
for Firefox and make it available in the PATH of your machine.
```
git clone https://github.com/organaizer12/nodeTest.git
cd ./webdriverio
npm install
$ java -jar -Dwebdriver.firefox.profile=’geckodriver’ selenium-server-standalone-3.14.0.jar
```
Open another terminal.
```
./node_modules/.bin/wdio wdio.conf.js
```
