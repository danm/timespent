# timespent

Simple helper to get a string representation of ms

## Install

```bash
npm i -S @danm/timespent
```

## Use

```javascript
import { short } from '@danm/timespent';

// miliseconds
short(500); // 1 ms

// seconds
short(1000); // 1 second
short(2000); // 2 seconds
short(2123); // 2 seconds

// minutes
short(1000); // 1 minute
short(2000); // 2 minutes
short(2123); // 2 minutes
```

Supports: ms, seconds, minutes, hours, weeks, months, years

Future support: long times for 2 hours, 6 seconds

## Testing

`npm test`

## License

Distributed under an MIT license
