function filterText (unfiltered) {
  const punctuations = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
  
  const result = unfiltered.replace(punctuations, ' ');

  return(result);
}

module.exports = filterText;