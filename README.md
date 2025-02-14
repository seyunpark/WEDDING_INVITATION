## 📚 내용 및 기능

- 결혼식 날짜, 위치, 인사말 출력
- 사진첩
- 축의금을 보내실 곳 (계좌번호 클립보드 복사 기능 지원)
- 카카오톡 공유 기능 및 링크 공유 기능

## 🚘 시작하기

1. `$ cd WEDDING_INVITATION` - 해당 프로젝트 폴더로 이동
2. `$ npm install` - 디펜던시 설치
3. `$ npm start` - 로컬로 실행

## 🔧 Netlify로 만들기

Netlify로 만드신다면 아래 글을 참고하세요 🕵🏻‍♂️

[Gatsby 테마로 모바일 결혼 청첩장 만들기](https://joy.pe.kr/gatsby-wedding-deploy/)

## ❌ 오류 발생 시

`rm -rf package-lock.json` 과 `rm -rf node_modules` 후 다시 `npm install` 수행

## 🛠 커스터마이징

`./src/components/location.jsx`를 수정하여 원하는 위치의 카카오 지도를 사용합니다.

```javascript
//  1. `https://map.kakao.com/`로 이동
//  2. 원하는 위치를 검색하여 `HTML 태그 복사`클릭
//  3. `소스 생성하기`클릭
//  4. `timestamp,key` 위의 코드에 알맞게 입력

const executeScript = () => {
  const scriptTag = document.createElement("script");
  const inlineScript = document.createTextNode(`new daum.roughmap.Lander({
    "timestamp" : "1652464367301",
    "key" : "2a8fe",
    "mapWidth" : "640",
    "mapHeight" : "360"
  }).render();`);
  scriptTag.appendChild(inlineScript);
  document.body.appendChild(scriptTag);
};
```

## db 구성 방법

mysql을 사용합니다.

* 사용버전 mysql 8.0


* init 과정
```
mysql -u root -p

CREATE DATABASE wedding_db;
USE wedding_db;

CREATE TABLE invitations (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    date VARCHAR(100) NOT NULL,
    location VARCHAR(255) NOT NULL,
    groom_name VARCHAR(100) NOT NULL,
    groom_account VARCHAR(100) NOT NULL,
    groom_father_name VARCHAR(100),
    groom_father_account VARCHAR(100),
    groom_mother_name VARCHAR(100),
    groom_mother_account VARCHAR(100),
    bride_name VARCHAR(100) NOT NULL,
    bride_account VARCHAR(100) NOT NULL,
    bride_father_name VARCHAR(100),
    bride_father_account VARCHAR(100),
    bride_mother_name VARCHAR(100),
    bride_mother_account VARCHAR(100)
);

```

* 데이터 삽입
```
INSERT INTO invitations VALUES 
('abc123', '홍길동', '2025년 05월 01일, 목요일 오전 11시 00분', '서울 강남구 ○○○웨딩홀 3층',
 '김철수', '○○은행 123-456-789', '김영수', '○○은행 987-654-321', '이순자', '○○은행 654-321-987',
 '박지영', '○○은행 222-333-444', '박민수', '○○은행 111-222-333', '조경희', '○○은행 555-666-777');

INSERT INTO invitations VALUES 
('xyz789', '김영희', '2025년 06월 10일, 금요일 오후 3시 30분', '부산 해운대 ○○○웨딩홀 5층',
 '이준호', '○○은행 444-555-666', '이상훈', '○○은행 777-888-999', '최미경', '○○은행 000-111-222',
 '최윤아', '○○은행 999-888-777', '최영수', '○○은행 666-555-444', '윤경희', '○○은행 333-222-111');

```