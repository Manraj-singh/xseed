export const data = [
  {
    title: "3 Digit Addition",

    introduction:
      "3-digit addition is the addition of numbers where either one or all the addends are of 3 digits. We know that addition is an operation used in Math to get the sum of numbers. While the addition of one-digit numbers can be done mentally, the addition of 3 digit numbers needs to follow some rules. 3 digit addition can be done with regrouping or without regrouping using the basic rules of addition. Let us learn more about 3-digit addition in this article.",
    video: "https://youtube.com/embed/Wm0zq-NqEFs",
    sections: [
      {
        title: "What is 3-Digit Addition?",
        text: "In 3-digit addition, we need to place the given numbers into columns according to their respective place values, like ones, tens, hundreds, thousands, and so on. The addition of 3-digit numbers is similar to 2-digit numbers where numbers can be added without regrouping (carrying) or with regrouping. It should be noted that the numbers that are being added are called addends and the answer that is obtained after adding these numbers is called their sum. Let us see the basic steps that are followed in 3-digit addition.",
        steps: [
          "Place the given numbers (addends) one below the other in such a way that they fall correctly under the columns of ones, tens, and hundreds.",
          "Start adding the numbers from right to left beginning from the ones column, followed by the tens column and then the hundreds column.",
          "After all the columns are added, we get the sum of the given numbers.",
        ],
      },
      {
        title: "3-Digit Addition Without Regrouping",
        text: "While adding 3-digit numbers, if the sum of any 2 digits is less than or equal to 9, we write the sum below the respective column and after all the columns are added, the answer is obtained. This is called addition without regrouping. For example, let us add the numbers 148 and 431 to see 3-digit addition without regrouping.0",
        image:
          "https://d138zd1ktt9iqe.cloudfront.net/media/seo_landing_files/3-digit-addition-01-1-1654173143.png",
        steps: [
          "Add the numbers under the ones column. 8 + 1 = 9. Write the sum (9) in ones column.",
          "Add the numbers under the tens column. 4 + 3 = 7. Write the sum (7) in the tens column",
          "Add the numbers under the hundreds column. 1 + 4 = 5. Write the sum (5) in the hundreds column.",
        ],
        answer: "Thus, the sum of the numbers 148 and 431 is 579.",
      },
      {
        title: "Three-Digit Addition With Regrouping",
        text: "Regrouping is another name for carrying over. In the operation of addition, when the sum of the addends is greater than 9 in any of the columns, we regroup the numbers and carry over the extra digit to the preceding column. Let us understand this with the help of the following example, let us add 582 and 173.",
        image:
          "https://d138zd1ktt9iqe.cloudfront.net/media/seo_landing_files/3-digit-addition-02-1-1654173171.png",
        steps: [
          "Add the numbers under the ones column. 2 + 3 = 5. Write 5 in ones column",
          "Add the numbers under the tens column. 8 + 7 = 15. Write 5 in the tens column and carry 1 to the hundreds column. We did this step because after adding 8 and 7 we get 15, but we cannot place 15 in the tens column because we can write just one digit below each column. So, we regroup the number 15. For this, we place the 5 in the tens column (corresponding column) and place the 1 on top of the hundreds column (the preceding column). In other words, when we get two-digit numbers as the sum, we place the ones digit in the corresponding column and we carry over the tens digit to the next column to the left. This carry-over is added in that column where it is placed and the addition continues.",
          "Add the numbers in the hundreds column. This means, 5 + 1 + 1 (carry-over ) = 7. Here, after the carry-over is placed in the hundreds column, it is added along with the other addends.",
        ],
        answer: "Thus, the sum of the numbers 582 and 173 is 755.",
      },
    ],
  },
];
