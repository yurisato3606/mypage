enchant();

// ページが読み込まれたときに実行される関数
window.onload = function() {
  // 全体設定
  core = new Core(570, 570);
  core.fps = 16;

  // 背景画像
  core.preload('moon.png');

  core.onload = function() {
    let bg = new Sprite(570, 570);
    bg.image = core.assets['moon.png'];
    core.rootScene.addChild(bg);

    // ラベル1　初期設定
    let label1 = new Label("大学図書館員のための<br>Webアプリ開発本");
    label1.color = '#0000FF';
    label1.font =  "italic bold'HG正楷書体-PRO'";
    label1.tl.scaleTo(2,3,1);
    label1.x = 900;
    label1.y = 600;
    core.rootScene.addChild(label1);

    // ラベル2　初期設定
    let label2 = new Label("前田朗著");
    label2.color = 'green';
    label2.font =  "30px 'HG正楷書体-PRO'";
    label2.x = 500;
    label2.y = 0;
    core.rootScene.addChild(label2);

    // ラベル3　初期設定
    let label3 = new Label("刊行予定とかなし！");
    label3.color = 'red';
    label3.font =  "35px 'HG正楷書体-PRO'";
    label3.x = 100;
    label3.y = 500;

    let count = 0;
    this.addEventListener('enterframe', function() {
      // label1 弧を描く移動
      if (count < 320) {
   	    label1.x = (Math.sin(count / 90) * 100) + 200;
   	    label1.y = (Math.cos(count / 90) * 100) + 200;
      }
      // label2 斜め移動
      label2.x --;
      label2.y ++;
      label2.y ++;
      // Finish
      if (count > 120) {
        // label1 回転・拡大・フェードアウト
        label2.tl.rotateBy(360,20);
   	    label2.tl.scaleTo(50,50,20);
   	    label2.tl.fadeOut(30);
        // label3 フェードイン
   	    core.rootScene.addChild(label3);
   	    label3.tl.fadeIn(30);
      }
      count ++;
    });
  }
  core.start();
}
