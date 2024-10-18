type Josa =
  | '이/가'
  | '을/를'
  | '은/는'
  | '으로/로'
  | '와/과'
  | '이나/나'
  | '이란/란'
  | '아/야'
  | '이랑/랑'
  | '이에요/예요'
  | '으로서/로서'
  | '으로써/로써'
  | '으로부터/로부터'
  | '이라/라';

const 로josa: Josa[] = ['으로/로', '으로서/로서', '으로써/로써', '으로부터/로부터'];

export function has받침(text: string) {
    return (text.charCodeAt(text.length - 1) - '가'.charCodeAt(0)) % 28 > 0;
}

export function get종성(text: string): string | null {
    const unicode = text.charCodeAt(text.length - 1) - '가'.charCodeAt(0);
    const 종성 = unicode % 28;
    return 종성 > 0 ? String.fromCharCode(0x11a7 + 종성) : null;
}

export function get조사(text: string, josa: Josa): string {
    let [josa1, josa2] = josa.split('/');

    if (text.length === 0)
        return josa1;

    if (josa === '와/과' || (has받침(text) && 로josa.includes(josa) && get종성(text) === 'ᆯ'))
        return has받침(text) ? josa2 : josa1;
    
    if (josa === '이에요/예요' && text[text.length - 1] === '이')
        return josa2;

    return has받침(text) ? josa1 : josa2;
}

// TODO: 조사 뒤에 공백 자동 삽입?
// console.log('닭'.이가 + ' 꼬꼬댁 울고, 오리'.가 + ' 꽥꽥 운다.'); 여기서 공백 때문에 예뻐지지 않 ㅏ헤음, 어차피 조사 뒤에 공백은 무조건 올텐데

export function apply조사(text: string, josa: Josa) {
    if (text.length === 0)
        return text;

    return text + get조사(text, josa);
}

function add조사Method(josa: Josa) {
    const [josa1, josa2] = josa.split('/');

    const keys = [josa1, josa2];
    if (!josa1.includes(josa2))
        keys.push(josa1 + josa2);

    keys.forEach(key => Object.defineProperty(String.prototype, key, {
        get() { return apply조사(this, josa); }
    }));
}

add조사Method('이/가');
add조사Method('을/를');
add조사Method('은/는');
add조사Method('으로/로');
add조사Method('와/과');
add조사Method('이나/나');
add조사Method('이란/란');
add조사Method('아/야');
add조사Method('이랑/랑');
add조사Method('이에요/예요');
add조사Method('으로서/로서');
add조사Method('으로써/로써');
add조사Method('으로부터/로부터');
add조사Method('이라/라');

declare global {
    interface String {
        이: string;
        가: string;
        이가: string;
        을: string;
        를: string;
        을를: string;
        은: string;
        는: string;
        은는: string;
        으로: string;
        로: string;
        와: string;
        과: string;
        와과: string;
        이나: string;
        나: string;
        이란: string;
        란: string;
        아: string;
        야: string;
        아야: string;
        이랑: string;
        랑: string;
        이에요: string;
        예요: string;
        으로서: string;
        로서: string;
        으로써: string;
        로써: string;
        으로부터: string;
        로부터: string;
        이라: string;
        라: string;
    }
}