// 背景画像を持つセクション
const parallaxSections = document.querySelectorAll(".parallax-section");
// パララックス効果を適用するテキスト
const parallaxTexts = document.querySelectorAll(".parallax-text");

function handleScroll() {
  const scrollY = window.scrollY; // 現在のスクロール量

  // 背景画像のパララックスエフェクト
  parallaxSections.forEach((section) => {
    // 背景画像のスクロール速度を調整 (小さいほど速く動く)
    const speed = 0.5;
    const backgroundPosition = `center ${-scrollY * speed}px`;
    section.style.backgroundPositionY = backgroundPosition;
  });

  // テキスト要素のパララックスエフェクト
  parallaxTexts.forEach((text) => {
    // テキストのスクロール速度を調整 (大きいほど速く動く)
    const textSpeed = 0.3;
    text.style.transform = `translateY(${scrollY * textSpeed}px)`;
  });
}

// スクロールイベントリスナーを設定
window.addEventListener("scroll", handleScroll);

// ページロード時にも一度実行して初期位置を調整
handleScroll();

// メモ:
// 実際のプロジェクトでは、パフォーマンス最適化のために
// requestAnimationFrame を使ってスクロールイベントの処理を遅延させるのが一般的です。
// 例:
/*
let ticking = false;
function handleScrollOptimized() {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            handleScroll();
            ticking = false;
        });
        ticking = true;
    }
}
window.addEventListener('scroll', handleScrollOptimized);
*/
