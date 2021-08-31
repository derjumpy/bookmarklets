javascript:
var timestamp = prompt('Timestamp');
var date = new Date(timestamp * 1000);
var options = {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  timeZone: 'UTC',
  timeZoneName: 'short'
};
var zone1 = date.toLocaleString('de-DE', options);
var zone2 = date.toLocaleString('de-DE', Object.assign(options, { timeZone: 'Europe/Berlin' }));

alert(`${zone1}\n${zone2} \(lokale Zeit\)`);
