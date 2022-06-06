# JavaScript built-in functions implementation
Implement JavaScript built-in functions from scratch, inspired by [Elzero Web School](https://www.linkedin.com/posts/osamaelzero_aeuaedaepaeoaevabraepaesaeaaeyaezaew-activity-6936092989798645760-k4rp?utm_source=linkedin_share&utm_medium=member_desktop_web)

## String Methods
- [x] charAt()
- [ ] charCodeAt()
- [x] concat()
- [ ] endsWith()
- [x] includes()
- [ ] indexOf()
- [ ] lastIndexOf()
- [ ] match()
- [ ] matchAll()
- [ ] repeat()
- [ ] replace()
- [ ] replaceAll()
- [ ] search()
- [ ] slice()
- [ ] split()
- [ ] startsWith()
- [ ] substr()
- [ ] substring()
- [ ] toLowerCase()
- [ ] toUpperCase()
- [ ] toString()
- [ ] trim()
- [ ] valueOf()

## Array Methods
- [ ] [1, 2, 3].push(4); // [1, 2, 3, 4]
- [ ] [1, 2, 3].pop(); // [1, 2]
- [ ] [1, 2, 3].shift(); // [2, 3]
- [ ] [1, 2, 3].unshift(0); // [0, 1, 2, 3]
- [ ] ['a', 'b'].concat('c'); // ['a', 'b', 'c']
- [ ] ['a', 'b', 'c'].join('-'); // a-b-c
- [ ] ['a', 'b', 'c'].slice(1); // ['b', 'c']
- [ ] ['a', 'b', 'c'].indexOf('b'); // 1
- [ ] ['a', 'b', 'c'].includes('c'); // true
- [ ] [3, 5, 6, 8].find((n) => n % 2 === 0); // 6
- [ ] [2, 4, 3, 5].findIndex((n) => n % 2 !== 0); // 2
- [ ] [3, 4, 8, 6].map((n) => n * 2); // [6, 8, 16, 12]
- [ ] [1, 4, 7, 8].filter((n) => n % 2 === 0); // [4, 8]
- [ ] [2, 4, 3, 7].reduce((acc, cur) => acc + cur); // 16
- [ ] [2, 3, 4, 5].every((x) => x < 6); // true
- [ ] [3, 5, 6, 8].some((n) => n > 6); // true
- [ ] [1, 2, 3, 4].reverse(); // [4, 3, 2, 1]
- [ ] [3, 5, 7, 8].at(-2); // 7
