module.exports = function check(str, bracketsConfig) {
  const openBrackets = ['(', '[', '{', '1', '3', '5'];
	const closeBrackets = {
		')': '(',
		'}': '{',
		']': '[',
		'2': '1',
		'4': '3',
		'6': '5',
	}
  let stack = [];
  for (let i in str) {
		const currentEl = str[i];

		if (openBrackets.includes(currentEl) || (currentEl === '|' || currentEl === '7' || currentEl === '8') && !stack.includes(currentEl)) {
			stack.push(currentEl);
		} else {
			if (stack.length === 0) {
				return false;
			}
			const prevEl = stack[stack.length - 1];

			if (closeBrackets[currentEl] === prevEl || (currentEl === "|" || currentEl === "7" || currentEl === "8")) {
				stack.pop();
			} else {
				return false;
			}
		}
	}

	return stack.length === 0;
};