function filterText (unfiltered) {
  const punctuations = /[!"#$%&'()*+,.\/:;<=>?@\[\\\]^`{|}~-]+/g;
  
  const result = unfiltered.replace(punctuations, '');

  return(result);
}

module.exports = filterText;