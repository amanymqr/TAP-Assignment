function twoSum(nums, target) {
    const seen = new Set();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (seen.has(complement)) {
            return [i, seen.get(complement)];
        }
        seen.add(nums[i]);
    }
    throw new Error('No two sum solution');
}

// Example usage:
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result); // [0, 1]