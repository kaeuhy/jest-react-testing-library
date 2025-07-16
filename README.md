# 🧪 TDD Todo List with Jest & React Testing Library

이 프로젝트는 [Velog: Jest + React Testing Library](https://velog.io/@leehyunho2001/Next.js-TypeScript-환경에서-Jest와-testing-library-사용하기) 를 바탕으로 **TDD 방식으로 구현**한 예제입니다.

---

## 프로젝트 목표

- 단위 테스트에 대한 이해
- React Testing Library를 활용한 컴포넌트 테스트 작성
- TypeScript + Vite 환경에서 Jest 구성 및 실행
- 테스트 코드 기반으로 컴포넌트를 구현해보는 TDD 실습

---

## 기술 스택

- **React**
- **TypeScript**
- **Vite**
- **Jest**
- **React Testing Library**
- **styled-components**

---

## 주요 테스트 항목

| 컴포넌트      | 테스트 내용                                                                 |
|-------------|-----------------------------------------------------------------------------|
| `TodoForm`  | 입력창 값 변경, 등록 버튼 클릭, 입력 초기화 확인                              |
| `TodoItem`  | 체크박스 토글, 삭제 버튼 동작, 스타일 변경 확인                               |
| `TodoList`  | 리스트 렌더링, props 전달 여부 확인                                          |
| `TodoApp`   | 컴포넌트 통합 테스트 (기본 렌더링, 추가, 삭제, 체크 기능 통합 테스트)             |

---

## 진행하며 발생한 오류 및 해결 과정

| 오류 내용                                                            | 해결 방법 요약                                                                       |
|---------------------------------------------------------------------|----------------------------------------------------------------------------------------|
| `@types/styled-components` 설치 시 React 버전 충돌                 | 타입 버전 조정 또는 `--legacy-peer-deps` 사용                                          |
| Jest 테스트 실행 시 `ERESOLVE` dependency conflict                | `npm install --legacy-peer-deps`                                                      |
| `styled.label` 사용 시 TS 에러 (`styled is not defined`)          | `styled-components` import 누락 해결                                                  |
| `main.tsx` 관련 Vite 모듈 로딩 실패                                | 파일 존재 여부 및 `vite.config.ts`의 경로 별칭 확인                                   |
| Jest 테스트 실패 (`unexpected token`)                              | `ts-jest` 설치 및 transform 설정                                                      |
| `handleCheckBox does not exist on type` 타입 에러                  | Props 인터페이스에 해당 프로퍼티 명시                                                 |
---

## 프로젝트 구조

```bash
src/
├── components/
│   ├── TodoApp.tsx
│   ├── TodoForm.tsx
│   ├── TodoItem.tsx
│   └── TodoList.tsx
├── tests/
│   ├── TodoApp.test.tsx
│   ├── TodoForm.test.tsx
│   ├── TodoItem.test.tsx
│   └── TodoList.test.tsx
├── types/
│   ├── todoProps.ts
│   ├── todoItemProps.ts
│   └── todoListProps.ts
└── pages/
    └── index.tsx
```
---

## 📌 참고 자료

- [Velog: Jest + React Testing Library](https://velog.io/@leehyunho2001/Next.js-TypeScript-환경에서-Jest와-testing-library-사용하기)
