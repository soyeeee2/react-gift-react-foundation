step2 week1 고생하셨습니다 노력은 했으나 많이 힘들었고.. 까다로운 부분이 꽤나 있어 전부 구현하지는 못했습니다ㅠㅠ Step1, 2, 3 별로 진행한 부분만 정리해 올리니 참고해주시면 감사하겠습니다

# Step 1

## Typescript 템플릿 기반 React 프로젝트(CRA) 생성

npx create-react-app my-app --template typescript
으로 프로젝트 생성을 완료하였습니다

## Eslint 설정

```
import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js'

export default [
    { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
    { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReactConfig,
]
```

## Prettier

1. Prettier install
2. .eslintrc.json
   extends와 plugin에 명시해주었습니다

```
"extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended"
    ],
    "plugins": ["react", "react-hooks", "@typescript-eslint", "prettier"],
```

## Reset css

적용이 안되어서 modern-normalize로 대체하였습니다

```
npm install modern-normalize
@import 'node_modules/modern-normalize/modern-normalize.css';
```

## 절대경로 alias

1. craco install
   craco.config.js 설정해주었습니다

```
const { CracoAliasPlugin } = require("react-app-alias");

module.exports = {
    plugins: [
        {
            plugin: CracoAliasPlugin,
            options: {
                source: "tsconfig",
                baseUrl: "./src",
                tsConfigPath: "./tsconfig.paths.json",
            },
        },
    ],
};
```

2. tsconfig.paths.json
   baseUrl과 paths 설정 완료

```
{
    "compilerOptions": {
        "baseUrl": "./src",
        "paths": {
            "@components/*": ["components/*"],
            "@utils/*": ["utils/*"],
            "@styles/*": ["styles/*"],
            "@stories/*": ["./stories/*"]
        }
    }
}
```

3. tsconfig.json
   path를 가져와 적용, baseUrl은 역시 src로 지정하였습니다

```
"extends": "./tsconfig.paths.json",
```

# Step 2

## Button

1. button.css
   css 설정하고 classname으로 theme가 바뀌도록 해주었습니다

2. button.stories.ts
   meta로 기본 템플릿 설정 후 default export 해주었습니다

```
import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta = {
    title: "COMMON/Button",
    component: Button,
    tags: ["autodocs"],
} satisfies Meta<typeof Button>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: "버튼",
        onClick: () => {
            alert("버튼 클릭!");
        },
        theme: "kakao",
        size: "large",
    },
};

```

3. button.tsx
   버튼 테마 별로 상태를 지정해주고 Button component로 내보내기 하였습니다

4. App.tsx
   가져온 버튼으로 theme를 다르게 지정해주어 색상과 크기가 다 다르게 커스텀되도록 하였습니다

```
<div className="App">
            <div className="btnWrapS">
                <Button {...kakaoSmall} />
                <Button {...outlineSmall} />
                <Button {...blackSmall} />
                <Button {...lightGraySmall} />
            </div>
            <div className="btnWrapL">
                <Button {...kakaoLarge} />
                <Button {...outlineLarge} />
                <Button {...blackLarge} />
                <Button {...lightGrayLarge} />
            </div>
        </div>
```

## Input

버튼과 같은 방식으로 진행해 구현하였습니다

---다른 쿠키즈의 코드를 참고해 구현하였으나 적용하지 못했습니다--

## Image

## GoodsItem

# Step 3

## 1. Webpack은 무엇이고 어떤 역할을 하고 있나요?

Webpack은 현대 웹 애플리케이션을 구축하는 데 필수적인 모듈 번들러입니다. 웹 애플리케이션의 모든 모듈(자바스크립트, CSS, 이미지 등)을 의존성 그래프를 따라 하나의 번들로 묶어주는 역할을 합니다. 이를 통해 여러 파일로 나뉘어 있는 코드를 하나의 파일로 병합해 웹 애플리케이션의 성능을 최적화하고 로딩 속도를 개선합니다.

### Webpack의 주요 기능:

-   번들링: 다양한 파일을 하나의 파일로 묶어주는 기능
-   코드 스플리팅: 애플리케이션의 각 부분을 개별 번들로 나눠 필요할 때만 로드하도록 최적화
-   로더(Loaders): JavaScript 외의 파일(CSS, 이미지 등)을 처리하는 방법을 정의
-   플러그인(Plugins): 번들링 과정에서 추가적인 기능을 수행 (예: 코드 압축, 파일 생성)

## 2. 브라우저는 어떻게 JSX 파일을 읽을 수 있나요?

JSX는 JavaScript XML의 약자로, React에서 JavaScript와 HTML을 결합하여 작성할 수 있는 문법입니다. 브라우저는 기본적으로 JSX를 이해할 수 없기 때문에, JSX를 브라우저가 이해할 수 있는 JavaScript 코드로 변환하는 과정이 필요합니다.

이 변환 과정에는 주로 Babel과 같은 트랜스파일러가 사용됩니다. Babel은 JSX와 최신 JavaScript 코드를 브라우저가 이해할 수 있는 ES5 코드로 변환해 줍니다. 이 과정은 보통 Webpack과 같은 번들러와 함께 설정됩니다.

-   JSX 코드 작성: React 컴포넌트 안에서 JSX 문법으로 작성
-   Babel 트랜스파일링: Babel을 통해 JSX를 일반 JavaScript로 변환
-   Webpack 번들링: 변환된 JavaScript 코드를 하나의 파일로 번들링
-   브라우저 실행: 브라우저가 번들된 JavaScript 파일을 로드하여 실행

## 3. React에서 상태 변화가 생겼을 때 어떻게 변화를 알아챌 수 있나요?

React에서 상태 변화를 감지하고 이를 처리하는 방법은 React의 상태 관리 메커니즘에 의해 이루어집니다. React는 컴포넌트의 상태(state)가 변경될 때마다 이를 감지하고, 해당 변경 사항을 반영하여 UI를 다시 렌더링합니다.

-   상태(state) 정의: 컴포넌트 내에서 useState 훅 또는 클래스 컴포넌트의 this.state를 통해 상태를 정의
-   상태 변경(setState): 상태를 변경할 때 useState의 상태 변경 함수나 클래스 컴포넌트의 setState 메서드를 호출
-   렌더링 트리거: 상태가 변경되면 React는 자동으로 해당 컴포넌트를 다시 렌더링
-   변화 반영: 변경된 상태를 기반으로 새로운 UI가 생성되어 사용자에게 반영

#### 폴더 구조 참고

https://fe-developers.kakaoent.com/2022/220505-how-page-part-use-atomic-design-system/
