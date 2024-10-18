export function _isHangul(text: string): boolean {
    return text.length > 0 && [...text].every(ch => '가' <= ch && ch <= '힣');
}

export function isHangul(text: string): boolean {
    return /^[가-힣]+$/.test(text);
}

// export function disassemble(text: string): string[];
// export function disassembleGroups(text: string): string[][];
// export function assemble(letters: string[]): string;

// export function to예사소리(letter: string): string;
// export function to거센소리(letter: string): string;
// export function to된소리(letter: string): string;

// export function canBe초성(letter: string): boolean;
// export function canBe중성(letter: string): boolean;
// export function canBe종성(letter: string): boolean;

// export function has받침();
// ...