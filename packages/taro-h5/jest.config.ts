import * as path from 'node:path'

import type { Config } from 'jest'

const config: Config = {
  collectCoverage: false,
  globals: {
    window: true,
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  moduleNameMapper: {
    '@tarojs/taro': '<rootDir>/src/index.ts',
    '@tarojs/taro-h5': '<rootDir>/src/index.ts',
    '@tarojs/shared': path.resolve(__dirname, '..', '..', 'packages/shared/src/index.ts'),
    '@tarojs/plugin-framework-react/dist/runtime': '<rootDir>/__mocks__/taro-framework',
    '@tarojs/plugin-framework-vue3/dist/runtime': '<rootDir>/__mocks__/taro-framework',
    // @ts-ignore
    '(^.+\\.(css|sass|scss|less|styl|stylus|pcss|postcss)$)|weui': ['jest-transform-css', {
      module: true
    }],
    '\\.(gif|ttf|eot|svg)$': '<rootDir>/__mocks__/fileMock.js',
    platform: '<rootDir>/__mocks__/platform.ts',
  },
  preset: 'ts-jest',
  setupFiles: ['<rootDir>/__mocks__/setEnv.ts'],
  setupFilesAfterEnv: [
    'jest-mock-console/dist/setupTestFramework.js'
  ],
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    url: 'http://localhost/'
  },
  testMatch: ['**/__tests__/**/?(*.)+(spec|test).[jt]s?(x)'],
  testPathIgnorePatterns: [
    'node_modules',
    'utils'
  ],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': ['ts-jest', {
      diagnostics: false,
      tsconfig: {
        jsx: 'react',
        allowJs: true
      }
    }],
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/']
}

export default config
