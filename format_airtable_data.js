let [,, quote, phoneNumbers, quoteIndex] = process.argv;



quoteIndex = Number(JSON.parse(quoteIndex).fields.index);
quote = JSON.parse(quote).records[quoteIndex].fields.quote;
phoneNumbers = JSON.parse(phoneNumbers).records.map(record => record.fields.number);

const payload = {
 quote,
 phoneNumbers,
 phoneNumberLength: phoneNumbers.length
}

console.log(JSON.stringify(payload));
