import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars = {
  // 清單一：包含 A 和 B
  playlistOne: [
    {
      type: 'category',
      label: '🚀 入門清單 [A, B]',
      items: ['doc-a', 'doc-b'], // 這裡定義排序
    },
  ],
  // 清單二：包含 C 和 A (自定義排序)
  playlistTwo: [
    {
      type: 'category',
      label: '🔥 進階專題 [C, A]',
      items: ['doc-c', 'doc-a'], // 這裡定義不同的排序
    },
  ],
};

export default sidebars;
