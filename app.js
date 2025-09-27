var arr1 = [1, 5, 3, -6, -7, 3, 0, -11, -5, 2]
var countPos = 0, countNeg = 0
for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] >= 0) {
        countPos++
    }
    if (arr1[i] < 0) {
        countNeg++
    }
}
console.log("Total positive numbers: ", countPos)
console.log("Total negative numbers: ", countNeg)


var arr2 = [3, 5, 9, 6, 3, 11, 5, 2, 9, 7, 12, 4]
var count1 = 0
for (var i = 0; i < arr2.length; i++) {
    if (arr2[i] % 3 == 0) {
        count1++
    }
}
console.log("Number divisible by 3 are: ", count1)

var arr2 = [3, 5, 9, 6, 3, 11, 5, 2, 9, 7, 12, 4]
var largestNum = []
var max = 0
for (var i = 0; i < arr2.length; i++) {
    if (arr2[i] > max) {
        max = arr2[i]
        largestNum.push(max)
    }
}

console.log("Second largest number is: ", largestNum[largestNum.length - 2])


var arr2 = [3, 5, 9, 6, 3, 11, 5, 2, 9, 7, 12, 4]
var smallestNum = []
var min = 10000000
for (var i = 0; i < arr2.length; i++) {
    if (arr2[i] < min) {
        min = arr2[i]
        smallestNum.push(min)
    }
}
console.log("Second smallest number is: ", smallestNum[smallestNum.length - 2])


var sum = max - min
console.log("Difference between largest and smallest number is: ", sum)



console.log("Original array: ", arr2)
var index1 = arr2[arr2.length - 1]
var index2 = arr2[0]
arr2[0] = index1
arr2[arr2.length - 1] = index2
console.log("Swapped array: ", arr2)


var arr3 = [1, 2, 3, 4]
var index1 = arr3[0]
for (var i = 0; i < arr3.length; i++) {
    arr3[i] = arr3[i + 1]
}
arr3[arr3.length - 1] = index1
console.log(arr3)


var arr3 = [1, 2, 3, 4]
var index1 = arr3[arr3.length - 1]
for (var i = arr3.length - 1; i >= 0; i--) {
    arr3[i] = arr3[i - 1]
}
arr3[0] = index1
console.log(arr3)


var arr4 = [1, 2, 3, 7]
var check = 0
for (var i = 0; i < arr4.length; i++) {
    if (arr4[i] > arr4[i + 1]) {
        check++
    }
}
if (check == 0) {
    console.log("This array is in ascending order")
}
else {
    console.log("This array is not in ascending order")
}

console.log("Reversed array: ")
for (var i = arr4.length - 1; i >= 0; i--) {
    console.log(arr4[i])
}


