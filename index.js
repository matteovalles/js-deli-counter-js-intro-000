function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    katzDeliLine.shift
    return `Currently serving ${katzDeliLine[0].}`
  } else {
    return 'There is nobody waiting to be served!'
  }
}
