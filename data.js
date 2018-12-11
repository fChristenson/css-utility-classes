const urls = [
  "https://media.nelly.com/i/nlyscandinavia/070835-0082_01?$categorypage_M$&fmt=webp",
  "https://media.nelly.com/i/nlyscandinavia/322630-0014_01?$categorypage_M$&fmt=webp",
  "https://media.nelly.com/i/nlyscandinavia/229024-0029_01?$categorypage_M$&fmt=webp",
  "https://media.nelly.com/i/nlyscandinavia/322637-0014_01?$categorypage_M$&fmt=webp",
  "https://media.nelly.com/i/nlyscandinavia/321482-0014_01?$categorypage_M$&fmt=webp",
  "https://media.nelly.com/i/nlyscandinavia/148797-0014_01?$categorypage_M$&fmt=webp",
  "https://media.nelly.com/i/nlyscandinavia/148230-0014_01?$categorypage_M$&fmt=webp",
  "https://media.nelly.com/i/nlyscandinavia/148476-1947_01?$categorypage_M$&fmt=webp"
];

const Product = url => {
  return {
    url,
    name: "onlMILANA FAUX FUR COAT OTW",
    brand: "Only",
    newPrice: "559 kr",
    oldPrice: "799 kr",
    savings: "30%"
  };
};

module.exports = urls.map(Product);
