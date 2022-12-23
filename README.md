# Test Task For It's Real

## Second task

https://test-its-real.vercel.app/

## First task solution

This code check right brackets and return amount of them

```
   function countBrackets(string) {

   const arr = Array.from(string)
   const stack = []
   let result = 0;
   arr.forEach((item) => {
      if (item === "{" || item === "[" || item === "(") {
         stack.push(item)
      }
      if (item === "}") {
         if (stack[stack.length - 1] === "{") {
            stack.pop()
            result++
         } else stack.push(item)
      }
      if (item === "]") {
         if (stack[stack.length - 1] === "[") {
            stack.pop()
            result++
         } else stack.push(item)
      }
      if (item === ")") {
         if (stack[stack.length - 1] === "(") {
            stack.pop()
            result++
         } else stack.push(item)
      }

   })



   return result * 2
}

countBrackets("(())") //4
countBrackets("({})") // 4
countBrackets("({)}") // 0
countBrackets("[]{}()") // 6
countBrackets("(})") // 0
countBrackets("[[()]}")  // 4
countBrackets("([]{})[]")  // 8```
