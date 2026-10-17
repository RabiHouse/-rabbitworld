// 風景イラスト（Cloudinary）。増やすときは SCENES に1行足すだけ。
// 書き方: 名前:"v番号/ファイル名.png"  （https://res.cloudinary.com/クラウド名/image/upload/ の後ろの部分）
// farm=畑のある家 greenhouse=温室 theater=劇場 mountain=白い山 street=街 harbor=海辺 treehouse=ツリーハウス mansion=豪邸 castle=夜の空の城
// 表示は横長（バナー3:1・区切り4:1）に、被写体を中心に自動で切り取られます。
window.CLOUD="dzgxt2s8f";
window.SCENES={
 farm:"v1791873618/1_bpznr4.png",
 greenhouse:"v1791873617/2_tzaeso.png",
 theater:"v1791873617/3_qa0dgp.png",
 mountain:"v1791873617/4_b9vknz.png",
 street:"v1791873620/5_envrnx.png",
 harbor:"v1791873619/6_jm1vdu.png",
 treehouse:"v1791873617/7_gqivhl.png",
 mansion:"v1791873618/8_tb5kvx.png",
 castle:"v1791873620/9_tlmqoi.png"
};
window.sceneUrl=(k,w,ar)=>`https://res.cloudinary.com/${CLOUD}/image/upload/f_auto,q_auto:best,c_fill,g_auto,ar_${ar},w_${w}/${SCENES[k]}`;
