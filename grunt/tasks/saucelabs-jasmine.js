module.exports = {

	all: {
		tunnelArgs: [ '--debug' ],
		options: {
			username: '', // if not provided it'll default to ENV SAUCE_USERNAME (if applicable)
			key: '', // if not provided it'll default to ENV SAUCE_ACCESS_KEY (if applicable)
			urls: ['http://127.0.0.1:8282/SpecRunner.html'],
			testname: 'select deselect JS Plugin Tests',
			browsers:
			[
				// ["Windows XP", "internet explorer", 8]
				// ["Windows 7", "internet explorer", 9],
				["Windows 7", "internet explorer", 10],
				["Windows 7", "internet explorer", 11],
				// ["XP", "firefox", 19],
				// ["XP", "chrome", 31]
			]
		}
	}

};
