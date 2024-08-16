// HTML tag validation
// Write a function that validates whether HTML tags are paired correctly or not.
// Example:
// <html><head><title>My Title</title></head></html> - true
// <html><head><title>My Title</title></head></head></html> - false
// <html><head><title>My Title</title></head></html - true

function checkValidHTML(html) {
    // implement your solution here
    const stack = [];
    const pattern = /<\/?([a-zA-Z]+)>/g;
    let match;
    while ((match = pattern.exec(html)) != null) {
        const tag = match[0];
        const tagName = match[1];
        // console.log(tag, tagName);
        if (tag.startsWith('</')) {
            if (stack.length == 0 || stack.pop() != tagName) {
                return false;
            }
        } else {
            stack.push(tagName);
        }
    }

    return stack.length === 0;
}

console.log(checkValidHTML('<html><head><title>My Title</title></head></html>'));
console.log(checkValidHTML('<html><head><title>My Title</title></head></head></html>'));
console.log(checkValidHTML('<html><head><title>My Title</title></head></html'));