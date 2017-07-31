'use strict';
/* eslint-disable */
module.exports = {
	devices: {
		horizon_settopbox: {
			name: 'horizon_settopbox',
			class: 'tv',
			icon: '../ir_generator/assets/remote.svg',
			images: {
				small: '../ir_generator/assets/images/small.jpg',
				large: '../ir_generator/assets/images/large.jpg'
			},
			capabilities: ['onoff', 'channel_up', 'channel_down'],
			capabilityToCommandMap: {
				onoff: 'POWER_TOGGLE',
				channel_up: 'CHANNEL_UP',
				channel_down: 'CHANNEL_DOWN'
			},
			signal: 'horizon_settopbox',
			actions: [{
				id: 'horizon_settopbox:send_cmd',
				title: 'ir_generator.flow.send_cmd',
				args: [{
					name: 'cmd',
					type: 'autocomplete'
				}, {
					name: 'device',
					type: 'device',
					filter: 'driver_id=horizon_settopbox'
				}]
			}, {
				id: 'horizon_settopbox:send_cmd_number',
				title: 'ir_generator.flow.send_cmd_number',
				args: [{
					name: 'number',
					type: 'number',
					min: '0',
					max: '9999'
				}, {
					name: 'device',
					type: 'device',
					filter: 'driver_id=horizon_settopbox'
				}]
			}],
			pair: {
				viewOrder: ['generic_check_device', 'generic_done'],
				views: [{
					template: './lib/pair/check_device.html',
					options: {
						title: 'views.generic_done.title',
						device_exists_message: 'views.generic_check_device.device_exists_message',
						prepend: '',
						append: ''
					},
					prepend: [],
					append: [],
					id: 'generic_check_device'
				}, {
					template: './lib/pair/done.html',
					options: {
						title: 'views.generic_done.title',
						prepend: '',
						append: ''
					},
					prepend: [],
					append: [],
					id: 'generic_done'
				}]
			},
			id: 'horizon_settopbox',
			driver: './lib/ir/driver',
			signalDefinition: {
				id: 'horizon_settopbox',
				type: 'prontohex',
				repetitions: 1,
				options: {
					cmdNumberPrefix: 'DIGIT_',
					minTxInterval: 250
				},
				cmds: ['CHANNEL_DOWN',
					'CHANNEL_UP',
					'CURSOR_DOWN',
					'CURSOR_ENTER',
					'CURSOR_LEFT',
					'CURSOR_RIGHT',
					'CURSOR_UP',
					'DIGIT_0',
					'DIGIT_1',
					'DIGIT_2',
					'DIGIT_3',
					'DIGIT_4',
					'DIGIT_5',
					'DIGIT_6',
					'DIGIT_7',
					'DIGIT_8',
					'DIGIT_9',
					'EXIT',
					'FORWARD',
					'MENU_MAIN',
					'PAUSE',
					'PLAY',
					'POWER_TOGGLE',
					'PREVIOUS_CHANNEL',
					'RECORD',
					'REVERSE',
					'STOP',
					'TELETEXT'
				],
				parseCmd: undefined
			}
		}
	}
};
