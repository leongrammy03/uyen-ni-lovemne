window.LOVE_GAME_CONFIG = {
  defaults: {
    partnerName: 'Uyen Ni',
    senderName: 'Leon',
    senderEmail: 'leongramminger@gmail.com',
    partnerTimezone: 'America/Toronto',
    senderTimezone: 'Europe/Amsterdam',
    dateTitle: 'Dinner & a sunset walk',
    completedDateIdeasKey: 'uyen-ni-completed-date-ideas',
    time: '19:00',
    durationHours: '2',
    lives: 3
  },

  dateIdeas: [
    {
      id: 'baking',
      label: 'Bake something together',
      title: 'Long-distance baking date',
      location: 'video call + matching ingredients'
    },
    {
      id: 'movie',
      label: 'Movie sync night',
      title: 'Movie sync night',
      location: 'Netflix / Disney+ / wherever the snacks are'
    },
    {
      id: 'dinner',
      label: 'Cook the same dinner',
      title: 'Cook the same dinner date',
      location: 'two kitchens, one recipe'
    },
    {
      id: 'game',
      label: 'Game night',
      title: 'Long-distance game night',
      location: 'Discord + cozy chaos'
    },
    {
      id: 'tea',
      label: 'Sleepy tea call',
      title: 'Sleepy tea call',
      location: 'video call + tea'
    },
    {
      id: 'airport',
      label: 'Plan the airport hug',
      title: 'Future airport hug planning',
      location: 'AMS-YUL dream department'
    }
  ],

  copy: {
    askPrompts: [
      'Do you still love me, {partner}?',
      'Wait... are you sure?',
      'Hmm, think about it again!',
      'The button does not want this either!',
      '"Yes" is right there, you know  \u2192',
      'You will never catch "No" anyway!',
      'Pretty please? Just say yes \u2661',
      '{sender} is getting nervous down here...',
      'Okay now you are just teasing him \u2661'
    ],
    loveReasons: [
      'the way you laugh at your own jokes',
      'you always steal my hoodies (keep them)',
      'your hugs fix entire bad days',
      'you make even ordinary days fun',
      'my favorite person to do nothing with',
      "the soft voice you're making sometimes",
      'you say yes to my dumbest ideas',
      'you, exactly as you are'
    ]
  },

  stages: [
    {
      name: 'THE BASICS',
      blurb: 'Easy stuff. You got this. \u2661',
      questions: [
        {
          q: 'On which date did we first meet?',
          opts: ['29 / 01 / 2022', '03 / 03 / 2022', '01 / 02 / 2022', '01 / 02 / 1957'],
          ans: '29 / 01 / 2022'
        },
        {
          q: 'What is my favourite colour?',
          opts: ['Blue', 'Green', 'Yellow', 'Pink'],
          ans: 'Blue'
        },
        {
          q: 'What is my favourite food?',
          opts: ['Pho', 'Goi Cuon', 'Bun Bo Hue', 'Burgers'],
          ans: 'Pho'
        }
      ]
    },
    {
      name: 'OUR ADVENTURES',
      blurb: 'Trips, places & questionable decisions.',
      questions: [
        {
          q: 'How many countries have we travelled to together?',
          opts: ['24', '12', '37', '8'],
          ans: '24'
        },
        {
          q: 'Where did we (oops) pee on each other?',
          opts: ['Punta Cana', 'Bali', 'Singapore', 'Amsterdam'],
          ans: 'Punta Cana'
        },
        {
          q: 'Where did we share our first kiss?',
          opts: ['Tamar Park', 'Weave', 'Sunset Peak', 'Victoria Park'],
          ans: 'Tamar Park'
        }
      ]
    },
    {
      name: 'FROM THE HEART',
      blurb: 'The final stretch...',
      questions: [
        {
          q: 'What is my love language?',
          opts: ['Cuddles', 'Cooking', 'Surprising gifts', 'Being annoying'],
          ans: 'Cuddles'
        },
        {
          q: 'Final question \u2014 the only correct answer is...',
          opts: ['I love you, Leon \u2661', 'Nope', 'Maybe later', 'Error 404'],
          ans: 'I love you, Leon \u2661'
        }
      ]
    }
  ],

  sprites: {
    bunny: {
      pixelSize: 11,
      colors: {
        k: '#6b4636',
        w: '#fff7ef',
        p: '#ff9fb0',
        e: '#3a2b25',
        c: '#ffc4cf'
      },
      map: [
        '...kkk....kkk...',
        '...kpk....kpk...',
        '...kpk....kpk...',
        '...kpk....kpk...',
        '...kpk....kpk...',
        '..kwwwwwwwwwwk..',
        '..kwwwwwwwwwwk..',
        '..kwwewwwwewwk..',
        '..kwwewppwewwk..',
        '..kwcwppppwcwk..',
        '..kwwwwwwwwwwk..',
        '...kwwwwwwwwk...',
        '..kwwwwwwwwwwk..',
        '..kwwwwwwwwwwk..',
        '..kwwkwwwwkwwk..',
        '..kkkkkkkkkkkk..'
      ]
    },
    heart: {
      pixelSize: 5,
      colors: {
        p: '#ff7a93',
        k: '#e8546b'
      },
      map: ['.k.k.', 'kpppk', 'kpppk', '.kpk.', '..k..']
    },
    mouths: {
      idle: ['.....', '.....', '.kkk.'],
      happy: ['k...k', 'k...k', '.kkk.'],
      sad: ['.kkk.', 'k...k', 'k...k']
    }
  },

  audio: {
    bootLoad: [196, 247, 294, 392, 523, 659],
    bootChime: [392, 523, 659, 784, 1046],
    happy: [523, 659, 784, 1046, 1318],
    winLead: [392, 493.88, 587.33, 659.25, 587.33, 493.88, 523.25, 659.25],
    winBass: [196, 246.94, 293.66, 261.63]
  },

  achievements: [
    {
      id: 'heart_coin',
      title: 'HEART COIN INSERTED',
      body: 'Player 1 accepted the mission.'
    },
    {
      id: 'no_button_survivor',
      title: 'NO BUTTON SURVIVOR',
      body: 'Dodged fate three times and still got caught.'
    },
    {
      id: 'first_hit',
      title: 'FIRST HIT',
      body: 'Correct answer. Combo started.'
    },
    {
      id: 'stage_clear',
      title: 'STAGE CLEAR BONUS',
      body: 'Distance took damage. Love meter rising.'
    },
    {
      id: 'perfect_run',
      title: 'PERFECT RUN',
      body: 'No hearts lost. Leon is emotionally defeated.'
    },
    {
      id: 'date_quest',
      title: 'DATE QUEST ACCEPTED',
      body: 'Calendar mission unlocked.'
    }
  ],

  effects: {
    confettiColors: ['#ff7a5c', '#ffd6a5', '#ff9fb0', '#ffe08a', '#ff5d73', '#9bd9f2'],
    skyColors: {
      far: ['#edbcb1', '#e7b3a8', '#f0c2b6', '#e3ada3'],
      mid: ['#b38494', '#a5788a', '#bb8b9b', '#ab7e90'],
      near: ['#4a3346', '#3f2c3b', '#553c4f', '#473041']
    }
  },

  // ♥ Secret easter egg — type "ocean" anywhere on the page
  // Edit these lines to write your real love letter.
  konamiLetter: [
    'PLAYER 1,',
    '',
    'If you find this letter, it means that unfortunately things did not work out between us, I hope though that despite everything you found a happy place in your life',
    'If you find this letter, it means that unfortunately things did not work out between us, I hope though that despite everything you found a happy place in your life',
    'If you find this letter, it means that unfortunately things did not work out between us, I hope though that despite everything you found a happy place in your life',
    'If you find this letter, it means that unfortunately things did not work out between us, I hope though that despite everything you found a happy place in your life',
    'If you find this letter, it means that unfortunately things did not work out between us, I hope though that despite everything you found a happy place in your life',
    'If you find this letter, it means that unfortunately things did not work out between us, I hope though that despite everything you found a happy place in your life',
    'If you find this letter, it means that unfortunately things did not work out between us, I hope though that despite everything you found a happy place in your life',
    'I will always cherist the time that we spent together, no matter what...',
    '',
    'Edit this in game-config.js',
    'under konamiLetter.',
    '',
    '- Leon ♡'
  ]
};
