"use strict";
module.exports = {
    scrape: [
        'user',
        'hashtag',
        'trend',
        'music',
        'discover_user',
        'discover_hashtag',
        'discover_music',
        'history',
        'video',
        'from-file',
        'userprofile',
    ],
    history: ['user', 'hashtag', 'trend', 'music'],
    sourceType: {
        user: 8,
        music: 11,
        trend: 12,
    },
    userAgentList: [
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:81.0) Gecko/20100101 Firefox/81.0',
    ],
};
