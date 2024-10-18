import { describe, test, expect } from 'vitest';

import { get조사, apply조사 } from './josa';
import './josa';

describe('josa', () => {
    test('주격조사', () => {
        expect(apply조사('샴푸', '이/가')).toBe('샴푸가');
        expect('샴푸'.이가).toBe('샴푸가');
        expect('샴푸'.이).toBe('샴푸가');
        expect('샴푸'.가).toBe('샴푸가');
        expect(apply조사('칫솔', '이/가')).toBe('칫솔이');
        expect('칫솔'.이가).toBe('칫솔이');
        expect('칫솔'.이).toBe('칫솔이');
        expect('칫솔'.가).toBe('칫솔이');
    });
    test('목적격조사', () => {
        expect(apply조사('샴푸', '을/를')).toBe('샴푸를');
        expect('샴푸'.을를).toBe('샴푸를');
        expect('샴푸'.을).toBe('샴푸를');
        expect('샴푸'.를).toBe('샴푸를');
        expect(apply조사('칫솔', '을/를')).toBe('칫솔을');
        expect('칫솔'.을를).toBe('칫솔을');
        expect('칫솔'.을).toBe('칫솔을');
        expect('칫솔'.를).toBe('칫솔을');
    });
    test('대조의 보조사', () => {
        expect(apply조사('샴푸', '은/는')).toBe('샴푸는');
        expect('샴푸'.은는).toBe('샴푸는');
        expect('샴푸'.은).toBe('샴푸는');
        expect('샴푸'.는).toBe('샴푸는');
        expect(apply조사('칫솔', '은/는')).toBe('칫솔은');
        expect('칫솔'.은는).toBe('칫솔은');
        expect('칫솔'.은).toBe('칫솔은');
        expect('칫솔'.는).toBe('칫솔은');
    });
    test('방향의 격조사', () => {
        expect(apply조사('바깥', '으로/로')).toBe('바깥으로');
        expect('바깥'.으로).toBe('바깥으로');
        expect('바깥'.로).toBe('바깥으로');
        expect(apply조사('내부', '으로/로')).toBe('내부로');
        expect('내부'.으로).toBe('내부로');
        expect('내부'.로).toBe('내부로');
    });
    test('방향의 격조사 ㄹ 받침 예외 처리', () => {
        expect(apply조사('지름길', '으로/로')).toBe('지름길로');
        expect('지름길'.으로).toBe('지름길로');
        expect('지름길'.로).toBe('지름길로');
    });
    test('비교의 격조사', () => {
        expect(apply조사('샴푸', '와/과')).toBe('샴푸와');
        expect('샴푸'.와과).toBe('샴푸와');
        expect('샴푸'.와).toBe('샴푸와');
        expect('샴푸'.과).toBe('샴푸와');
        expect(apply조사('칫솔', '와/과')).toBe('칫솔과');
        expect('칫솔'.와과).toBe('칫솔과');
        expect('칫솔'.와).toBe('칫솔과');
        expect('칫솔'.과).toBe('칫솔과');
    });
    test('선택의 보조사', () => {
        expect(apply조사('샴푸', '이나/나')).toBe('샴푸나');
        expect('샴푸'.이나).toBe('샴푸나');
        expect('샴푸'.나).toBe('샴푸나');
        expect(apply조사('칫솔', '이나/나')).toBe('칫솔이나');
        expect('칫솔'.이나).toBe('칫솔이나');
        expect('칫솔'.나).toBe('칫솔이나');
    });
    test('화제의 보조사', () => {
        expect(apply조사('샴푸', '이란/란')).toBe('샴푸란');
        expect('샴푸'.이란).toBe('샴푸란');
        expect('샴푸'.란).toBe('샴푸란');
        expect(apply조사('칫솔', '이란/란')).toBe('칫솔이란');
        expect('칫솔'.이란).toBe('칫솔이란');
        expect('칫솔'.란).toBe('칫솔이란');
    });
    test('호격조사', () => {
        expect(apply조사('철수', '아/야')).toBe('철수야');
        expect('철수'.아야).toBe('철수야');
        expect('철수'.아).toBe('철수야');
        expect('철수'.야).toBe('철수야');
        expect(apply조사('길동', '아/야')).toBe('길동아');
        expect('길동'.아야).toBe('길동아');
        expect('길동'.아).toBe('길동아');
        expect('길동'.야).toBe('길동아');
    });
    test('접속조사', () => {
        expect(apply조사('고기', '이랑/랑')).toBe('고기랑');
        expect('고기'.이랑).toBe('고기랑');
        expect('고기'.랑).toBe('고기랑');
        expect(apply조사('과일', '이랑/랑')).toBe('과일이랑');
        expect('과일'.이랑).toBe('과일이랑');
        expect('과일'.랑).toBe('과일이랑');
    });
    test('주제의 보조사', () => {
        expect(apply조사('의사', '이라/라')).toBe('의사라');
        expect('의사'.이라).toBe('의사라');
        expect('의사'.라).toBe('의사라');
        expect(apply조사('선생님', '이라/라')).toBe('선생님이라');
        expect('선생님'.이라).toBe('선생님이라');
        expect('선생님'.라).toBe('선생님이라');
    });
    test('서술격조사와 종결어미', () => {
        expect(apply조사('사과', '이에요/예요')).toBe('사과예요');
        expect('사과'.이에요).toBe('사과예요');
        expect('사과'.예요).toBe('사과예요');
        expect(apply조사('책', '이에요/예요')).toBe('책이에요');
        expect('책'.이에요).toBe('책이에요');
        expect('책'.예요).toBe('책이에요');
    });
    test('서술격조사와 종결어미, "이" 로 끝나는 단어 예외 처리', () => {
        expect(apply조사('때밀이', '이에요/예요')).toBe('때밀이예요');
        expect('때밀이'.이에요).toBe('때밀이예요');
        expect('때밀이'.예요).toBe('때밀이예요');
    });
    test('지위나 신분 또는 자격을 나타내는 위격조사', () => {
        expect(apply조사('학생', '으로서/로서')).toBe('학생으로서');
        expect('학생'.으로서).toBe('학생으로서');
        expect('학생'.로서).toBe('학생으로서');
        expect(apply조사('부모', '으로서/로서')).toBe('부모로서');
        expect('부모'.으로서).toBe('부모로서');
        expect('부모'.로서).toBe('부모로서');
    });
    test('지위나 신분 또는 자격을 나타내는 위격조사 ㄹ 받침 예외 처리', () => {
        expect(apply조사('라이벌', '으로서/로서')).toBe('라이벌로서');
        expect('라이벌'.으로서).toBe('라이벌로서');
        expect('라이벌'.로서).toBe('라이벌로서');
    });
    test('수단의 의미를 나타내는 도구격조사', () => {
        expect(apply조사('토큰', '으로써/로써')).toBe('토큰으로써');
        expect('토큰'.으로써).toBe('토큰으로써');
        expect('토큰'.로써).toBe('토큰으로써');
        expect(apply조사('함수', '으로써/로써')).toBe('함수로써');
        expect('함수'.으로써).toBe('함수로써');
        expect('함수'.로써).toBe('함수로써');
    });
    test('수단의 의미를 나타내는 도구격조사 ㄹ 받침 예외 처리', () => {
        expect(apply조사('건물', '으로써/로써')).toBe('건물로써');
        expect('건물'.으로써).toBe('건물로써');
        expect('건물'.로써).toBe('건물로써');
    });
    test('어떤 행동의 출발점이나 비롯되는 대상임을 나타내는 격 조사', () => {
        expect(apply조사('역삼동', '으로부터/로부터')).toBe('역삼동으로부터');
        expect('역삼동'.으로부터).toBe('역삼동으로부터');
        expect('역삼동'.로부터).toBe('역삼동으로부터');
        expect(apply조사('저기', '으로부터/로부터')).toBe('저기로부터');
        expect('저기'.으로부터).toBe('저기로부터');
        expect('저기'.로부터).toBe('저기로부터');
    });
    test('어떤 행동의 출발점이나 비롯되는 대상임을 나타내는 격 조사 ㄹ 받침 예외 처리', () => {
        expect(apply조사('동굴', '으로부터/로부터')).toBe('동굴로부터');
        expect('동굴'.으로부터).toBe('동굴로부터');
        expect('동굴'.로부터).toBe('동굴로부터');
    });
    test('단어가 빈 문자열일 경우 빈 문자열을 반환한다.', () => {
        expect(apply조사('', '이/가')).toBe('');
        expect(''.이가).toBe('');
        expect(''.이).toBe('');
        expect(''.가).toBe('');
    });
});
  
describe('josa.pick', () => {
    test('첫 번째 매개변수가 빈 문자열이라면 옵션 중 첫 번째 값을 반환한다.', () => {
       expect(get조사('', '이/가')).toBe('이');
    });
    test('주격조사', () => {
        expect(get조사('샴푸', '이/가')).toBe('가');
        expect(get조사('칫솔', '이/가')).toBe('이');
    });
    test('목적격조사', () => {
        expect(get조사('샴푸', '을/를')).toBe('를');
        expect(get조사('칫솔', '을/를')).toBe('을');
    });
    test('대조의 보조사', () => {
        expect(get조사('샴푸', '은/는')).toBe('는');
        expect(get조사('칫솔', '은/는')).toBe('은');
    });
    test('방향의 격조사', () => {
        expect(get조사('바깥', '으로/로')).toBe('으로');
        expect(get조사('내부', '으로/로')).toBe('로');
    });
    test('방향의 격조사 ㄹ 받침 예외 처리', () => {
          expect(get조사('지름길', '으로/로')).toBe('로');
    });
    test('비교의 격조사', () => {
        expect(get조사('샴푸', '와/과')).toBe('와');
        expect(get조사('칫솔', '와/과')).toBe('과');
    });
    test('선택의 보조사', () => {
        expect(get조사('샴푸', '이나/나')).toBe('나');
        expect(get조사('칫솔', '이나/나')).toBe('이나');
    });
    test('화제의 보조사', () => {
        expect(get조사('샴푸', '이란/란')).toBe('란');
        expect(get조사('칫솔', '이란/란')).toBe('이란');
    });
    test('호격조사', () => {
        expect(get조사('철수', '아/야')).toBe('야');
        expect(get조사('길동', '아/야')).toBe('아');
    });
    test('접속조사', () => {
        expect(get조사('고기', '이랑/랑')).toBe('랑');
        expect(get조사('과일', '이랑/랑')).toBe('이랑');
    });
    test('서술격조사와 종결어미', () => {
        expect(get조사('사과', '이에요/예요')).toBe('예요');
        expect(get조사('책', '이에요/예요')).toBe('이에요');
    });
    test('서술격조사와 종결어미, "이" 로 끝나는 단어 예외 처리', () => {
        expect(get조사('때밀이', '이에요/예요')).toBe('예요');
    });
    test('지위나 신분 또는 자격을 나타내는 위격조사', () => {
        expect(get조사('학생', '으로서/로서')).toBe('으로서');
        expect(get조사('부모', '으로서/로서')).toBe('로서');
    });
    test('지위나 신분 또는 자격을 나타내는 위격조사 ㄹ 받침 예외 처리', () => {
        expect(get조사('라이벌', '으로서/로서')).toBe('로서');
    });
    test('수단의 의미를 나타내는 도구격조사', () => {
        expect(get조사('토큰', '으로써/로써')).toBe('으로써');
        expect(get조사('함수', '으로써/로써')).toBe('로써');
    });
    test('수단의 의미를 나타내는 도구격조사 ㄹ 받침 예외 처리', () => {
        expect(get조사('건물', '으로써/로써')).toBe('로써');
    });
    test('어떤 행동의 출발점이나 비롯되는 대상임을 나타내는 격 조사', () => {
        expect(get조사('역삼동', '으로부터/로부터')).toBe('으로부터');
        expect(get조사('저기', '으로부터/로부터')).toBe('로부터');
    });
    test('어떤 행동의 출발점이나 비롯되는 대상임을 나타내는 격 조사 ㄹ 받침 예외 처리', () => {
        expect(get조사('동굴', '으로부터/로부터')).toBe('로부터');
    });
});