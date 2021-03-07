/*
 * Author S Brinta<brrinta@gmail.com>
 * Email: brrinta@gmail.com
 * Web: https://brinta.me
 * Created on : Saturday 06 Mar, 2021 02:46:01 BDT
 */

export const config: {
    'timeout': Number,
    'clientId': String,
    'logger': {
        'enabled': Boolean,
        'location': String,
        //logging levels - { error: 0, warn: 1, info: 2, verbose: 3, debug: 4, silly: 5
        'level': String
    },
    'proxy': {
        'setProxy': Boolean,
        'proxyUrl': String
    }
};

