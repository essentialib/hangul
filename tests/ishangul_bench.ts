import { _isHangul, isHangul } from "../src/hangul";

function randomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function makeAnyHangulText(): string {
    const len = randomInt(1, 100);
    return Array(len).fill(0).map(() => String.fromCharCode(randomInt('가'.charCodeAt(0), '힣'.charCodeAt(0)))).join('');
}

const hangulTexts = Array(1000).fill(0).map(() => makeAnyHangulText());

console.time('isHangul');
for (const text of hangulTexts) {
    _isHangul(text);
}
console.timeEnd('isHangul');    // 5.654ms

console.time('isHangul2');
for (const text of hangulTexts) {
    isHangul(text);
}
console.timeEnd('isHangul2');   // 0.612ms