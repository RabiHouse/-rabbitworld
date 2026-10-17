// 壁紙を増やすには、この配列に1件足し、img/wall/ にサムネイル、downloads/ に配布ファイルを置きます。
// free:true  -> このサイトから直接ダウンロード（file を指定）
// free:false -> link の先（SUZURI や Ko-fi）で入手。shop は "suzuri" か "kofi"
window.SHOPS={suzuri:"https://suzuri.jp/Rabbitflower",kofi:"https://ko-fi.com/rabbitflower"};
window.WALLS=[
{id:"jack-garden",char:"jack",free:true,size:"1440×3200",
 thumb:"img/wall/jack-garden.webp",file:"downloads/jack-garden.jpg",
 title:{ja:"ジャックと花畑",en:"Jack in the flower field"}},
{id:"jennifer-garden",char:"jennifer",free:true,size:"1440×3200",
 thumb:"img/wall/jennifer-garden.webp",file:"downloads/jennifer-garden.jpg",
 title:{ja:"ジェニファーと花畑",en:"Jennifer in the flower field"}},
{id:"misch-garden",char:"misch",free:true,size:"1440×3200",
 thumb:"img/wall/misch-garden.webp",file:"downloads/misch-garden.jpg",
 title:{ja:"ミッシュと花畑",en:"Misch in the flower field"}},
{id:"majoram-garden",char:"majoram",free:true,size:"1440×3200",
 thumb:"img/wall/majoram-garden.webp",file:"downloads/majoram-garden.jpg",
 title:{ja:"マジョラムと花畑",en:"Majoram in the flower field"}}
];
