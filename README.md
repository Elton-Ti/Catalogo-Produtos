# React + TypeScript + Vite

Este template fornece uma configuração mínima para rodar React no Vite com HMR e algumas regras de ESLint.

Atualmente, existem dois plugins oficiais disponíveis:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) usa [Babel](https://babeljs.io/) (ou [oxc](https://oxc.rs) quando usado com [rolldown-vite](https://vite.dev/guide/rolldown)) para Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) usa [SWC](https://swc.rs/) para Fast Refresh

## React Compiler

O React Compiler não está habilitado neste template devido ao impacto no desempenho de desenvolvimento e build. Para adicioná-lo, veja a documentação: https://react.dev/learn/react-compiler/installation

## Expandindo a configuração do ESLint

Se você estiver desenvolvendo uma aplicação para produção, é recomendado atualizar a configuração para habilitar regras com tipagem:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      tseslint.configs.recommendedTypeChecked,
      tseslint.configs.strictTypeChecked,
      tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
