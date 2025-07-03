# パララックスエフェクト

## 概要

このプロジェクトは、HTML、CSS、JavaScript を使用してパララックスエフェクトを実装した Web ページです。スクロールに応じて背景画像とテキスト要素が異なる速度で動くことで、視覚的な奥行き感を演出します。

## 目的

今後 TypeScript や React にスケールする為の準備段階として、基本的な DOM 操作とスクロールイベントの処理を学習することが目的です。

## 使用技術

- HTML5
- CSS3
- JavaScript (ES6+)

## ファイル構成

```
project/
├── index.html      # メインのHTMLファイル
├── style.css       # スタイルシート
├── script.js       # JavaScript ロジック
└── img/           # 背景画像フォルダ
    ├── Tasty_IceTea2025_4.png
    ├── Tasty_IceTea2025_3.png
    └── Tasty_IceTea2025_2.png
```

## 機能説明

### HTML の構造

- **parallax-section**: 背景画像を持つフルスクリーンセクション（3 つ）
- **content-section**: 通常のコンテンツセクション（2 つ）
- 各パララックスセクションには`parallax-text`クラスのタイトルが含まれています

### CSS の主要機能

- `background-attachment: fixed` - 背景画像の固定
- `height: 100vh` - ビューポート高さに合わせたセクション設定
- `background-size: cover` - 背景画像のレスポンシブ対応
- テキストにドロップシャドウと z-index による重ね順制御

### JavaScript の動作

1. **背景画像のパララックス**: スクロール量 × 0.5 倍の速度で`backgroundPositionY`を調整
2. **テキストのパララックス**: スクロール量 × 0.3 倍の速度で`translateY`による移動
3. **イベント処理**: `scroll`イベントリスナーでリアルタイム更新

## セットアップ方法

1. プロジェクトファイルをダウンロード
2. `img`フォルダに必要な画像ファイルを配置
3. ローカルサーバーで index.html を開く（ファイルプロトコルでも動作）

## コードの重要なポイント

### パララックス効果の実装

```javascript
// 背景画像の動き
const speed = 0.5;
const backgroundPosition = `center ${-scrollY * speed}px`;
section.style.backgroundPositionY = backgroundPosition;

// テキストの動き
const textSpeed = 0.3;
text.style.transform = `translateY(${scrollY * textSpeed}px)`;
```

### パフォーマンス最適化のヒント

コメントで`requestAnimationFrame`を使った最適化方法が記載されており、本格運用時のパフォーマンス改善が考慮されています。

## 今後の拡張予定

- TypeScript への移行

## 学習ポイント

- DOM 操作の基本
- CSS の position、transform、background-position プロパティ
- スクロールイベントの処理
- 視差効果（パララックス）の原理
- Web アニメーションの基礎概念
