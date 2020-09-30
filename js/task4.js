function formatString(string, maxLength = 40) {
  //   Write code under this line

  if (string.length <= maxLength) {
    return string;
  } else if (string.length > maxLength) {
    return string.slice(0, maxLength).concat('...');
  }
}

// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// 'Curabitur ligula sapien, tincidunt non.'

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// 'Vestibulum facilisis, purus nec pulvinar...'

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30));
// 'Vestibulum facilisis, purus ne...'
