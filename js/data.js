// キャラクター追加: この配列にオブジェクトを足し、img/ に画像を置くだけ。
// imgs:["1枚目(メイン)","2枚目",...] で複数画像（詳細ページでスライド表示）。1枚だけなら img:"..." でOK。
// map:[x,y] = pin position on map.html in % (0-100). Omit it to hide the pin.
// To add a character: append an object here and drop an image in img/.
window.CHARS=[
{id:"rabiko",map:[50,56],imgs:["img/rabiko.webp","img/rabiko-sns.webp"],color:"#F8A5B8",host:1,
 name:{ja:"♥らびこ♥",en:"♥Rabiko♥"},
 role:{ja:"うさの国と人間界をつなぐインフルエンサー",en:"Influencer linking Rabbit World and the human world"},
 tagline:{ja:"いつもうさの国にいる、みんなのまとめ役",en:"Always here in Rabbit World, bringing everyone together"},
 tags:{ja:["ネザーランドドワーフ","8月3日生まれ","案内役"],en:["Netherland Dwarf","Born Aug 3","Guide"]},
 sections:[
 {t:{ja:"プロフィール",en:"Profile"},ul:{
  ja:["生まれ：うさの国","好きなもの：りんご・いちご・うさぎ用ビスケット","嫌いなもの：人参を含む生野菜（大っ嫌い！）","好きなこと：お隣の猫・ねこみさんの毛づくろい","最近のはやり：自家製ミントをドライミントにして部屋に敷き詰めること"],
  en:["Born in: Rabbit World","Likes: apples, strawberries, rabbit biscuits","Dislikes: raw vegetables, carrots included (she hates them!)","Loves grooming her neighbor, the cat Nekomi","Latest trend: drying homemade mint and spreading it around her room"]}},
 {t:{ja:"うさの国での役割",en:"Her role"},p:{
  ja:"うさの国と人間界をつなぐインフルエンサー。番組のホストのように、うさたちが同じ世界にいることを教えてくれる、まとめ役です。",
  en:"An influencer who links Rabbit World and the human world. Like a show host, she shows that all the rabbits share one world."}},
 {t:{ja:"世話人との出会い",en:"Meeting her caretaker"},p:{
  ja:"小屋で4ヶ月ひとりで過ごしたらびこを、世話人はずっと見守り続けました。やがてお引越しして、今は隣の猫のねこみさんと仲良し。デジタルうさとなり、Rabbitflowerのモデルとして活躍中です。",
  en:"Rabiko spent four months alone in a hutch while her caretaker kept watching over her. Then she moved in, became best friends with the cat next door, Nekomi, and now works as a digital rabbit and Rabbitflower's model."}},
 {t:{ja:"もっと知りたい",en:"More"},ul:{ja:["♥らびこ♥の公式サイトを見る"],en:["Visit Rabiko's own site"]},link:"https://loverabiko.rabbitflowerdiary.com/about"}]},
{id:"jack",map:[76,57],img:"img/jack.webp",color:"#F28B8B",
 name:{ja:"ジャック・ラビー",en:"Jack Rabby"},
 role:{ja:"うさの島の大富豪のご子息／トップモデル／アーティスト",en:"Son of a wealthy family on Rabbit Island / Top model / Artist"},
 tagline:{ja:"無口でミステリアスな、一族の顔のカリスマ",en:"The silent, mysterious charisma who fronts his family"},
 tags:{ja:["トップモデル","アーティスト","無口","妹思い"],en:["Top model","Artist","Quiet","Devoted brother"]},
 sections:[
 {t:{ja:"外見",en:"Look"},ul:{
  ja:["妹ジェニファーと同じく、うさ界でも極めて珍しい神秘的な多色グラデーションの毛色","王子様を思わせる肩章（エポレット）付きの華やかな赤いジャケットをクールに着こなす","凛としたキリッとした眼差しと、気品ただよう静かな佇まい"],
  en:["Like his sister Jennifer, he has an extremely rare, mysterious multicolor gradient coat","Wears a splendid red jacket with epaulettes, like a prince, with cool style","Sharp, dignified eyes and a quiet, graceful presence"]}},
 {t:{ja:"性格",en:"Personality"},p:{
  ja:"口数が少なく無口でミステリアスですが、内に秘めた思いは誰よりも強い。家族思いで、とくに妹のジェニファーのことを、陰ながらいつも優しく気にかけています。",
  en:"He says little and is mysterious, but the feelings inside him are stronger than anyone's. He cares deeply for his family, especially his sister Jennifer, quietly looking out for her."}},
 {t:{ja:"キャリアと役割",en:"Career and role"},ul:{
  ja:["名家の盾：大富豪のお屋敷にはいつもパパラッチが押しかけるため、家族を世間の喧騒から守ろうと、自ら「一族の代表」として表舞台に立つことを決意","トップモデル：圧倒的な気品と多色の美しい毛、洗練されたスタイルで活躍","アーティスト：独自の感性で創作活動も行い、うさ界のトレンドを引っ張るカリスマ的存在"],
  en:["Shield of the family: paparazzi are always at the mansion, so he chose to step forward as the family's representative to protect them from the noise","Top model: shines with overwhelming grace, a beautiful multicolor coat and refined style","Artist: also creates with his own sensibility, a charismatic trendsetter of the rabbit world"]}},
 {t:{ja:"妹ジェニファーとのこと",en:"With his sister Jennifer"},ul:{
  ja:["恥ずかしがり屋で世間知らずな妹が、親友のらびこに誘われて人間界へ遊びに行くと聞き、「心配でたまらない」と自ら同行を決意","表向きはクールを装いながら、人間界でも少し離れたところから、静かに妹の安全を見守っている","ふだんは多くを語らないが、妹が困ったりトラブルに巻き込まれそうになると、誰よりも早くさりげなくサポートに入る"],
  en:["Hearing that his shy, sheltered sister would visit the human world at Rabiko's invitation, he said he was “too worried” and decided to go with her","He acts cool, but quietly watches over her safety from a little distance, even in the human world","He rarely says much, but when she is in trouble he steps in first, quietly"]}},
 {t:{ja:"♥らびこ♥との関係",en:"With ♥Rabiko♥"},p:{
  ja:"らびことは、あまり顔を合わせることはありません。ただ、らびこは親友ジェニファーの兄であるジャックが、テレビにも出ている大ファン。ジャックは、らびこの推し活の相手です。",
  en:"Jack and Rabiko hardly ever meet. But Rabiko is a big fan of Jack, the brother of her best friend Jennifer, who appears on TV. Jack is the star she cheers for."}}]},
{id:"jennifer",map:[72,50],img:"img/jennifer.webp",color:"#B9C8F0",
 name:{ja:"ジェニファー・ラビー",en:"Jennifer Rabby"},
 role:{ja:"うさの島の大富豪のご令嬢",en:"Daughter of a wealthy family on Rabbit Island"},
 tagline:{ja:"パステルの毛色をもつ、恥ずかしがり屋のお嬢様",en:"A shy young lady with pastel-colored fur"},
 tags:{ja:["お嬢様","恥ずかしがり屋","編み物","チモシー茶"],en:["Young lady","Shy","Knitting","Timothy tea"]},
 sections:[
 {t:{ja:"外見",en:"Look"},ul:{
  ja:["うさ界でもたいへんめずらしい、幻想的なパステルグラデーション（多色）の毛色をもつ奇跡のうさぎ","控えめで上品な小さなティアラとパールのネックレス、可憐な小花柄のブルーのワンピース","手には、大好きな編み物の毛糸玉と編み針"],
  en:["A miracle rabbit with a fantastical pastel-gradient, multicolored coat, very rare even among rabbits","A modest little tiara, a pearl necklace and a blue dress with a delicate flower print","Holding her beloved ball of yarn and knitting needles"]}},
 {t:{ja:"性格",en:"Personality"},p:{
  ja:"とても控えめで照れ屋の恥ずかしがり屋さん。大富豪のお嬢様なのに高飛車なところはまったくなく、穏やかで心優しいおっとりした性格です。",
  en:"Very modest and shy. Although she is a wealthy young lady, she has no snobbery at all, and is gentle, kind-hearted and easygoing."}},
 {t:{ja:"趣味と過ごし方",en:"Hobbies"},ul:{
  ja:["静かで落ち着いた空間が大好き。おうちで温かい「チモシー茶」を飲むのが至福のひととき","編み物が大の趣味。チモシー茶を片手に毛糸と向き合う時間に癒やされる","手先がとても器用で、親しい友達に手作りの編み物をプレゼントすることも"],
  en:["She loves quiet, calm places, and her happiest time is sipping warm Timothy tea at home","Knitting is her great hobby, and working with yarn over her favorite tea soothes her","Very skilled with her hands, she sometimes gives close friends handmade knitted gifts"]}},
 {t:{ja:"家族と思い出",en:"Family and memories"},ul:{
  ja:["兄のジャック・ラビー：頼もしい兄をもつ妹として、家族にとても大切にかわいがられて育った","ジャンボリー：小さい頃、仕事でお家に来たジャンボリーが、スキマ時間によくおんぶをして遊んでくれた"],
  en:["Her brother Jack Rabby: she grew up cherished by her family as the little sister of a reliable big brother","Jamboree: when she was little, he came to her home for work and often gave her piggyback rides in his spare moments"]}},
 {t:{ja:"♥らびこ♥との関係",en:"With ♥Rabiko♥"},p:{
  ja:"らびことは気心の知れた大の親友。内向的なジェニファーですが、元気いっぱいのらびこからずっと誘われていたこともあり、思い切ってワクワクとドキドキの詰まった「人間界」へ遊びにやって来ました。手作りの編み物も、らびこに心をこめて贈っています。",
  en:"Rabiko is her dear best friend. Jennifer is introverted, but Rabiko had long been inviting her, so she bravely came to play in the exciting and nerve-racking human world. She also gives Rabiko handmade knitted gifts made with love."}},
 {t:{ja:"お気に入りアイテム",en:"Favorite items"},ul:{
  ja:["特注チモシー茶ブレンド（おうち時間に欠かせない、香り高い最高級のチモシー茶）","手作りニットアイテム（マフラーやコースターなど）"],
  en:["Custom Timothy tea blend (finest, fragrant tea she always has at home)","Handmade knit items (scarves, coasters and more)"]}}]},
{id:"misch",map:[40,62],img:"img/misch.webp",color:"#C9A8F0",
 name:{ja:"ミッシュ",en:"Misch"},
 role:{ja:"パン職人／ベーカリー オーナーシェフ",en:"Baker / Owner-chef of the bakery"},
 tagline:{ja:"まん丸お耳のパン屋さん",en:"The round-eared baker"},
 tags:{ja:["パン職人","丸メガネ","完璧主義","独身"],en:["Baker","Round glasses","Perfectionist","Single"]},
 sections:[
 {t:{ja:"外見",en:"Look"},ul:{
  ja:["トレードマークは大きな丸メガネ（焼き上がりを見極める愛用品）","パープルのコック帽と「M」入りエプロン、ピンクのネッカチーフ","いつも焼き立てのフランスパンを抱えている"],
  en:["Big round glasses, used to judge every bake","Purple chef hat, apron with an “M”, and a pink neckerchief","Always holding a fresh baguette"]}},
 {t:{ja:"性格",en:"Personality"},p:{
  ja:"パン作りにはストイックで頑固な完璧主義者。でも接客や普段の会話では穏やかで物腰が柔らかく、みんなをホッとさせます。",
  en:"Stoic and stubborn about baking, yet gentle and soft-spoken with customers. Everyone relaxes around him."}},
 {t:{ja:"パンへのこだわり",en:"Devotion to bread"},ul:{
  ja:["黄金の配合：小麦粉・全粒粉・チモシーイーストの独自配合。外はサクサク、中はモチモチ","仕込みから焼き上げまで自分で確認。だから限定パンは数ヶ月待ちのことも","「うさパンコンクール」でグランプリ多数。うさの国トップクラスの有名店"],
  en:["Golden ratio: his own blend of flour, whole wheat and Timothy yeast. Crisp outside, chewy inside","He checks everything himself, so limited breads can take months to get","Many Grand Prix wins at the Rabbit Bread Contest"]}},
 {t:{ja:"マジョラムとの関係",en:"With Majoram"},p:{
  ja:"パン一筋で独身のミッシュですが、最近は近所の花屋マジョラムと楽しそうに談笑する姿がよく目撃されています。お店に飾る花やパンの隠し味のハーブを相談するうちに、少しずつ距離が縮まっているようです。",
  en:"Misch has lived for bread alone, but lately he is often seen chatting happily with Majoram the florist next door. Asking about flowers for the shop and herbs for his breads seems to be bringing them closer."}},
 {t:{ja:"♥らびこ♥との関係",en:"With ♥Rabiko♥"},p:{
  ja:"らびこはミッシュのパンの大ファンで、朝食の食パン、ランチのサンドイッチ、おやつのたまごパンを買いに来る常連中の常連。ついつい買いすぎてしまうらびこを、ミッシュは温かい笑顔で見守っています。",
  en:"Rabiko is a huge fan of Misch's bread and a regular of regulars, coming for breakfast loaves, lunch sandwiches and egg bread for snacks. Misch watches with a warm smile as she buys too much again."}},
 {t:{ja:"看板メニュー",en:"Signature breads"},ul:{
  ja:["サクサクもちもち チモシーバゲット","日持ちのする たまごパン","特製ミックスサンドイッチ"],
  en:["Crispy-chewy Timothy baguette","Long-lasting egg bread","Special mixed sandwich"]}}]},
{id:"majoram",map:[64,66],img:"img/majoram.webp",color:"#F7B6A3",
 name:{ja:"マジョラム",en:"Majoram"},
 role:{ja:"フラワーコーディネーター／お花屋さん店主",en:"Flower coordinator / Owner of the flower shop"},
 tagline:{ja:"お花が長持ちすると評判の、姉御肌のお花屋さん",en:"The big-sister florist whose flowers last and last"},
 tags:{ja:["お花屋さん","姉御肌","勉強熱心","手作りお花飾り"],en:["Florist","Big-sister type","Dedicated","Handmade flower accessories"]},
 sections:[
 {t:{ja:"外見",en:"Look"},ul:{
  ja:["緑のチェック柄シャツにシックなエプロン、作業道具を入れたポケットがトレードマーク","カールしたおしゃれなポニーテールと、手作りのピンクのお花飾りがチャームポイント","澄んだパープルの瞳と、優しく温かい笑顔で街の人を迎える"],
  en:["A green checkered shirt, a chic apron, and a pocket full of tools are her trademarks","A curly stylish ponytail and a handmade pink flower accessory","Clear purple eyes and a warm, gentle smile for everyone in town"]}},
 {t:{ja:"性格",en:"Personality"},p:{
  ja:"明るくサバサバとした姉御肌。誰に対しても分け隔てなく接するので、街の人々から絶大な信頼を寄せられています。お仕事にはとても勉強熱心で、お花への愛情と情熱にあふれています。",
  en:"Bright, frank and big-sisterly. She treats everyone equally, so townsfolk trust her deeply. She studies hard for her work and is full of love and passion for flowers."}},
 {t:{ja:"お花への情熱",en:"Passion for flowers"},ul:{
  ja:["きっかけは「うさ界の花々をもっと深く知りたい」という探究心。研究のなかで、お花を美しく見せるフラワーコーディネーターの才能が開花","深い知識とお手入れの技術で、「マジョラムのお店のお花はとても長持ち」と街中で大評判","長持ちのコツや生け方を、優しく教えてくれるのも人気の理由"],
  en:["It began with her curiosity to know rabbit flowers better, and through her research her talent as a flower coordinator bloomed","Thanks to deep knowledge and careful care, flowers from her shop are famous around town for lasting a very long time","She gently teaches tips and arranging methods, which is part of her popularity"]}},
 {t:{ja:"お店と旦那さんとの思い出",en:"Her shop and her husband"},p:{
  ja:"かつて大恋愛の末に結婚した最愛の旦那さんと、二人で仲良く立ち上げたお花屋さん。今は一人でお店を切り盛りしていますが、旦那さんとの思い出が詰まった大切なお店を、愛情いっぱいに守り続けています。",
  en:"She opened the flower shop with her beloved husband, whom she married after a great romance. She now runs it on her own, and keeps protecting the shop full of memories with him."}},
 {t:{ja:"ミッシュとの関係",en:"With Misch"},p:{
  ja:"最近は、近所のパン屋ミッシュがお店に飾るお花の相談やハーブの知恵を聞きにやって来て、楽しそうに談笑する姿がよく見かけられています。",
  en:"Lately Misch the baker next door often visits to ask about flowers for his shop and about herbs, and the two are often seen chatting happily."}},
 {t:{ja:"♥らびこ♥との関係",en:"With ♥Rabiko♥"},p:{
  ja:"らびこが普段、頭や首につけているお気に入りのお花は、すべてマジョラムのお店で買ったもの。長持ちで色鮮やかなお花は、らびこのおしゃれに欠かせないマストアイテムです。",
  en:"The flowers Rabiko usually wears on her head and neck all come from Majoram's shop. Long-lasting and colorful, they are a must-have for her style."}},
 {t:{ja:"人気の商品・サービス",en:"Popular items"},ul:{
  ja:["長持ち保証のブーケ＆アレンジメント（大切な人への贈り物やお部屋のインテリアに）","手作りフラワーアクセサリー（ピンクのお花飾りなど、お耳や首元を彩る）"],
  en:["Long-lasting guaranteed bouquets and arrangements (for gifts or home decor)","Handmade flower accessories (like her pink flower ornaments for ears and neck)"]}}]},
{id:"cammy",map:[44,68],img:"img/cammy.webp",color:"#9EDCC8",
 name:{ja:"キャミー",en:"Cammy"},
 role:{ja:"パティシエ／人気洋菓子店オーナーシェフ",en:"Patissier / Owner-chef of a popular cake shop"},
 tagline:{ja:"うさの街で一番流行しているケーキ屋さん",en:"Owner of the most popular cake shop in Rabbit town"},
 tags:{ja:["パティシエ","ムードメーカー","ドジっ子","ニャーマウの弟子"],en:["Patissier","Mood maker","Clumsy","Nyamau's apprentice"]},
 sections:[
 {t:{ja:"外見",en:"Look"},ul:{
  ja:["パステルミントの格子柄キャップとエプロン、ピンクのスカートとネッカチーフの華やかな制服姿","ぱっちりした大きな目と長いまつ毛。どこか♥らびこ♥にも似た愛くるしい顔立ち","手にはいつも、猫界仕込みの優雅なデコレーションケーキ"],
  en:["Pastel mint checkered cap and apron with a pink skirt and neckerchief","Big bright eyes and long lashes, with a cute look a little like ♥Rabiko♥","Always carries an elegant decorated cake in the cat-world style"]}},
 {t:{ja:"性格",en:"Personality"},p:{
  ja:"ひょうきんでおちゃめな、周りをパーッと明るくするムードメーカー。修行時代の苦労は表に出さず、いつも笑顔で前向きです。一生懸命になりすぎてよく転ぶドジな一面も、豪快に笑い飛ばします。",
  en:"A funny, playful mood maker who brightens everyone around her. She never shows the hardships of her training and stays cheerful. She trips a lot from trying too hard, and just laughs it off."}},
 {t:{ja:"パティシエとしての歩み",en:"Her path as a patissier"},ul:{
  ja:["猫界のパティシエの巨匠「ニャーマウ」に弟子入りし、長年技術を磨いた本格派","猫界のしなやかさや優雅さを、デザインや食感に取り入れる技を修得","暖簾分けを許され、うさの街で「うさ専用」のケーキショップをオープン","猫界のエレガントさとうさぎの好みを融合したケーキが話題に"],
  en:["Trained for years under the cat-world master patissier Nyamau","Learned to bring feline grace and elegance into her designs and textures","Allowed to open her own shop, she started a cake shop made just for rabbits in Rabbit town","Her cakes blend cat-world elegance with rabbit tastes, and they are the talk of the town"]}},
 {t:{ja:"♥らびこ♥との関係",en:"With ♥Rabiko♥"},p:{
  ja:"キャミーに雰囲気が似ていると言われたらびこは、お店の可愛い制服に憧れてアルバイトに入ったことがありますが、本格的な仕込みと立ち仕事についていけず、3ヶ月で挫折。それでもキャミーのケーキの虜で、今も通い詰めているので、ダイエットは一向に始められません。",
  en:"Told she looks like Cammy, Rabiko once took a part-time job at the shop because she loved the cute uniform. The serious prep work and long hours were too much, and she quit after three months. She is still hooked on Cammy's cakes and keeps visiting, so her diet never starts."}},
 {t:{ja:"看板メニュー",en:"Signature cakes"},ul:{
  ja:["しなやかキャット＆うさフレッシュケーキ（ニャーマウ伝授の優雅なデコレーション）","おちゃめなふわもちショートケーキ（一口食べれば誰もが笑顔に）"],
  en:["Supple Cat & Rabbit Fresh Cake (elegant decoration taught by Nyamau)","Playful Fluffy-Chewy Shortcake (one bite makes everyone smile)"]}}]},
{id:"tae",map:[31,53],img:"img/tae.webp",color:"#F08A9A",
 name:{ja:"ミッドナイト・タエ",en:"Midnight Tae"},
 role:{ja:"うさオペラ界のディーバ（歌姫）",en:"Diva of the Rabbit opera world"},
 tagline:{ja:"満天の星空のような歌声の歌姫",en:"The diva whose voice is like a starry sky"},
 tags:{ja:["歌姫","5つごのママ","ドジっ子","星模様のお耳"],en:["Diva","Mom of quintuplets","Clumsy","Star-patterned ears"]},
 sections:[
 {t:{ja:"外見",en:"Look"},ul:{
  ja:["鮮やかな赤のドレスと頭の大きなリボンがトレードマーク","優雅なウェーブヘアーに輝くネックレス。ピンクグラデーションのお耳には星の模様","めったに見せないが、背中には歌姫の象徴の「音符の模様」が生まれつきある"],
  en:["Her trademarks are a vivid red dress and a big ribbon on her head","Elegant wavy hair, a sparkling necklace, and pink-gradient ears scattered with stars","She rarely shows it, but she was born with a musical-note mark on her back, the sign of a diva"]}},
 {t:{ja:"性格",en:"Personality"},ul:{
  ja:["ステージの上：凛として動きもキビキビ。圧倒的な存在感のプロフェッショナル","ステージの下：5つごの育児に奮闘する親しみやすいママ。ちょっぴりドジでお茶目"],
  en:["On stage: poised and sharp, a professional with overwhelming presence","Off stage: a friendly mom busy raising quintuplets, a little clumsy and playful"]}},
 {t:{ja:"歌姫としての才能と異名",en:"Her voice and her name"},p:{
  ja:"幼い頃から音楽の世界に身を置き、神から授かった美声で、うさの国のうさぎたちを虜にしてきた奇跡の歌姫。ひとたび歌い出すと、満天の星空に吸い込まれるような歌声に誰もがうっとりします。夜空のような静けさと美しさから、親愛と尊敬を込めて「ミッドナイト」と呼ばれるようになりました。",
  en:"She has lived in the world of music since childhood, and her heaven-sent voice has won over rabbits across Rabbit World. Once she sings, everyone is drawn in as if into a starry sky. Her voice has the calm and beauty of the night, so she is lovingly and respectfully called “Midnight.”"}},
 {t:{ja:"家族とプライベート",en:"Family life"},ul:{
  ja:["私生活では、元気いっぱいの5つごうさぎのがんばり屋ママ","ステージを降りると大忙しの子育ての毎日。家ではドジを踏んで慌てることも","旦那さんは専業主夫として家庭を守り、才能ある妻を全面的に支える愛妻家。夫婦仲はとても睦まじい"],
  en:["At home she is a hardworking mom of lively quintuplets","Off stage her days are full of childcare, and she sometimes panics over little slips at home","Her husband is a stay-at-home dad who guards the household and fully supports her. They are very happy together"]}},
 {t:{ja:"♥らびこ♥との関係",en:"With ♥Rabiko♥"},p:{
  ja:"らびこのママはタエの大ファン。そのおかげで、らびこは小さい頃からタエの歌声を聞いて育ちました。",
  en:"Rabiko's mom is a big fan of Tae, so Rabiko grew up listening to Tae's singing from the time she was little."}},
 {t:{ja:"代表曲・名シーン",en:"Signature moments"},ul:{
  ja:["アリア『満天の星空の下で』：イントロだけで会場が静まり返る伝説のアリア","カーテンコールでドレスの裾を踏んでよろけ、ファンから「可愛い！」と歓声が上がるのがお約束"],
  en:["Aria “Under the Starry Sky”: a legendary piece that silences the hall from the first notes","At curtain calls she often trips on her hem, and fans cheer “So cute!”"]}}]},
{id:"cranberry",map:[56,49],img:"img/cranberry.webp",color:"#F4A3A0",
 name:{ja:"クランベリー一家",en:"The Cranberry Family"},
 role:{ja:"パイ屋さんの仲良しファミリー",en:"A close family running a pie shop"},
 tagline:{ja:"行列の絶えない大人気パイ屋さん",en:"The pie shop with a never-ending line"},
 tags:{ja:["パイ屋","7匹家族","三つ子と双子","ホーリーの夢"],en:["Pie shop","Family of seven","Triplets & twins","Holly's dream"]},
 sections:[
 {t:{ja:"一家のこと",en:"About the family"},p:{
  ja:"お母さんホーリーの夢だった「自分だけのパイ屋さん」を開くため、うさの街の近くへ引っ越してきた仲良しファミリー。5匹の仔うさぎ（三つ子と双子）の子育てと大繁盛のお店を、夫婦で助け合いながらがんばっています。",
  en:"A close family who moved near Rabbit town so that mother Holly could open the pie shop of her dreams. The couple help each other raise five little ones (triplets and twins) while running their very busy shop."}},
 {t:{ja:"家族構成",en:"Family members"},ul:{
  ja:["お母さん ホーリー：パイ屋オーナーシェフ。ピンクのベレー帽とパフスリーブのエプロン、大きな緑の瞳。夢を叶えた情熱家で、忙しい合間にも絶品パイを次々と生み出すアイデアマン","お父さん キングス：会社員で、パイ屋の強力なサポーター。赤いフレームのメガネに灰色のニット。平日は仕事、そのあと仕込みやお店、子育てまで全力でこなす頼れるパパ","三つ子：おしゃれでおしゃまな長女のアイビー、元気な男の子のシオンと、ママにしがみつく甘えん坊のジニア","双子の赤ちゃん：引っ越し後に生まれたばかり。名前はまだ非公開で、常連さんの間でも「どんな名前になるのかな？」とひそかに話題"],
  en:["Mom Holly: owner-chef of the pie shop, in a pink beret and puff-sleeve apron with big green eyes. A passionate dreamer whose ideas keep producing wonderful pies","Dad Kings: an office worker and strong supporter of the shop, with red-framed glasses and a gray knit. After work he helps with prep, the shop and the kids","Triplets: stylish Ivy, the eldest girl, lively Shion, and Zinnia, a cuddly boy who clings to Mom's skirt","Newborn twins: born after the move. Their names are still secret, and regulars quietly wonder what they will be"]}},
 {t:{ja:"お店のこと",en:"The shop"},p:{
  ja:"こぢんまりとした小さな店なのに、焼きたてパイの種類はとても豊富。いつ行っても行列ができていて、「並ばないと買えないお店」として街で大評判です。",
  en:"The shop is small, yet it sells a huge variety of freshly baked pies. There is always a line, and it is famous around town as the shop you have to queue for."}},
 {t:{ja:"♥らびこ♥との関係",en:"With ♥Rabiko♥"},p:{
  ja:"らびこはこのお店のアップルパイの大ファン。サクサクの生地とほくほくのりんごがたまらず、行列に並んででも定期的に買いに通っています。",
  en:"Rabiko is a huge fan of the shop's apple pie. She can't resist the crisp crust and warm apples, and keeps coming back, even if she has to wait in line."}},
 {t:{ja:"看板メニュー",en:"Signature pies"},ul:{
  ja:["名物！焼きたてアップルパイ（焼き上がりの時間には、香ばしい香りが街中に漂う）","ホーリー気まぐれ季節のフルーツパイ（種類が豊富で毎日通っても飽きない）"],
  en:["Famous freshly baked apple pie (its aroma drifts across town at baking time)","Holly's whimsical seasonal fruit pies (so many kinds that you never tire of them)"]}}]},
{id:"jamboree",map:[56,79],img:"img/jamboree.webp",color:"#9DB8E8",
 name:{ja:"ジャンボリー",en:"Jamboree"},
 role:{ja:"和平使節／情報密偵（国際外交官）",en:"Peace envoy / Intelligence agent (international diplomat)"},
 tagline:{ja:"素顔を誰も知らない、世界を巡る平和の使者",en:"A mysterious peace envoy no one has seen unmasked"},
 tags:{ja:["外交官","忍うさの血筋","年齢不詳","素顔は謎"],en:["Diplomat","Ninja-rabbit bloodline","Age unknown","Face unseen"]},
 sections:[
 {t:{ja:"外見",en:"Look"},ul:{
  ja:["青いターバンと布で頭と口元をすっぽり覆い、目以外の素顔は誰も見たことがない","深みのあるピンク色の瞳。手足に包帯を巻き、旅慣れた草履を履いている","お耳の珍しい「うずまき柄」は、先祖が伝説の「忍うさ」だった血筋の証","マントの中には、旅の道具や秘密の情報道具など、いろいろなものが隠されている"],
  en:["A blue turban and cloth cover his head and mouth, so no one has seen his face besides his eyes","Deep pink eyes, bandaged hands and feet, and well-traveled sandals","The rare swirl pattern on his ears shows his bloodline from legendary ninja rabbits","His cloak hides travel gear and secret intelligence tools"]}},
 {t:{ja:"年齢・声・性格",en:"Age, voice and personality"},p:{
  ja:"年齢は不詳で、素顔も年齢もすべてが謎。低く落ち着いた渋い声の持ち主ですが、言葉を交わすと、ミステリアスな見た目からは想像できないほど優しく温かいうさぎです。",
  en:"His age is unknown, and both his face and his age are a complete mystery. He has a low, calm voice, but once you talk with him you find him far kinder and warmer than his mysterious look suggests."}},
 {t:{ja:"和平と外交への情熱",en:"Devoted to peace"},ul:{
  ja:["うさの国と他の国との平和な関係を守るため、世界中を旅している","各国で貴重な情報や情勢を集め、互いを理解して仲良く暮らせるよう陰ながら奔走","忍うさの血を引き、気配を消す術、情報収集、危険察知は天下一品。その力を争いではなく「和平」のために使っている"],
  en:["Travels the world to protect peaceful relations between Rabbit World and other countries","Gathers valuable information in each country and works quietly so that all can understand each other","With ninja-rabbit blood, his skills in stealth, intelligence and sensing danger are unmatched, and he uses them for peace, not conflict"]}},
 {t:{ja:"♥らびこ♥との関係",en:"With ♥Rabiko♥"},p:{
  ja:"らびこ本人はジャンボリーのことをあまり知りません。ただ、らびこの友人で超お嬢様のジェニファー・ラビーから、こんな話を聞いています。ジェニファーが小さい頃、仕事で家に来たジャンボリーが、スキマ時間によくおんぶをして遊んでくれたそうです。",
  en:"Rabiko doesn't really know Jamboree herself. But she has heard a story from her friend Jennifer Rabbie, a super-rich young lady. When Jennifer was little, Jamboree would come to her home for work and often gave her piggyback rides in his spare moments."}},
 {t:{ja:"噂話",en:"Rumors"},ul:{
  ja:["マントの裏地には無数のポケットがあり、各国のお土産や暗号文書、護身用の道具まで入っているらしい","国王や身近な人でも素顔を見たことがなく、街では「実はすごい男前では？」「童顔だから隠しているのでは？」とひそかに噂されている"],
  en:["The cloak's lining is said to have countless pockets holding souvenirs from many countries, coded documents and even self-defense tools","Not even the king or those close to him have seen his face, and townsfolk whisper “maybe he's really handsome?” or “maybe he hides a baby face?”"]}}]},
{id:"rune",map:[46,27],img:"img/rune.webp",color:"#B8A9E8",
 name:{ja:"ルーン",en:"Rune"},
 role:{ja:"天文台研究員／星読み占い師（副業）",en:"Observatory researcher / Star-reading fortune teller (side job)"},
 tagline:{ja:"空を読む、極度のうさ見知りの研究員",en:"The extremely rabbit-shy researcher who reads the sky"},
 tags:{ja:["天文台","星読み占い","うさ見知り","漫画好き"],en:["Observatory","Star fortune-telling","Shy","Manga fan"]},
 sections:[
 {t:{ja:"外見",en:"Look"},ul:{
  ja:["天文台での正装（？）は、星柄の魔法使いのような三角帽子とロングコート","コートの下は白い丸襟のシャツ、足元はカジュアルな茶色のスニーカー","知的な紫色の瞳と、真剣に空を見つめる真面目な表情","手にはいつも小型望遠鏡と、緑色の書籍（表紙に『COSMIC』）"],
  en:["Her observatory formal wear (?) is a star-patterned wizard-style pointed hat and long coat","A white round-collared shirt under the coat, and casual brown sneakers","Intelligent purple eyes and a serious look as she gazes at the sky","Always carries a small telescope and a green book with “COSMIC” on the cover"]}},
 {t:{ja:"性格",en:"Personality"},ul:{
  ja:["極度の「うさ見知り」：知らないうさに会うのがとても苦手で、天文台で一人、空を観察したり研究に没頭したりする時間が何より好き","真面目でストイック：研究に妥協せず、日々データを蓄積している","漫画大好き：一人の時間を愛する理由のひとつが、漫画を読む時間。漫画の知識はうさの国でもトップクラス"],
  en:["Extremely shy around other rabbits: she loves being alone at the observatory, watching the sky and losing herself in research","Serious and stoic: she never compromises on research and records data every day","A manga lover: reading manga is one reason she loves her alone time, and her manga knowledge is top class in Rabbit World"]}},
 {t:{ja:"能力と才能",en:"Her gifts"},ul:{
  ja:["神業的な「空読み」：昔から、空の色、星の位置、雲の動きから、天気の変化や運気の流れを予測するのが得意","人気沸騰の「星読み占い」：空読みの才能を活かして始めた副業が、ネットで「驚くほど当たる」と大評判。占いの館には姿を現さず、天文台から占いサイトやSNSでのみ鑑定している"],
  en:["Uncanny “sky reading”: since long ago she has been good at predicting weather changes and the flow of luck from the sky's color, the stars and the clouds","Wildly popular “star reading”: her side job, started with her sky-reading talent, is famous online for being surprisingly accurate. She never appears at a fortune-telling house and gives readings only through her site and social media from the observatory"]}},
 {t:{ja:"いま、気にかけていること",en:"What worries her now"},ul:{
  ja:["「地球の不機嫌」の予測：空のわずかな変化から、私たちが暮らす「地球」の機嫌が悪くなっていることに、うさの国で唯一気づき、予測している","物議を醸す研究論文：その予測に基づく論文を発表しようとしているが、内容があまりに衝撃的なため「うさたちに不必要な不安を与えるのでは」と天文台内で物議を醸し、発表が遅れている","真実を伝えるべきだという思いと、皆を怖がらせたくないという思いの間で葛藤している"],
  en:["Predicting Earth's bad mood: from slight changes in the sky, she alone in Rabbit World has noticed and predicted that Earth, our home, is in a bad mood","A controversial paper: she wants to publish a paper based on that prediction, but its content is so shocking that the observatory worries it may needlessly frighten rabbits, and publication is delayed","She is torn between wanting to tell the truth and not wanting to frighten everyone"]}},
 {t:{ja:"♥らびこ♥との関係",en:"With ♥Rabiko♥"},p:{
  ja:"ルーンとらびこは直接の知り合いではありません。でも星読み占いが大好きならびこは、ルーンの占いサイトやSNSを毎日欠かさずチェックしていて、自称「一番のファン」。ただし、その占い師が極度のうさ見知りの天文台研究員だということは、知りません。",
  en:"Rune and Rabiko do not know each other directly. But Rabiko loves star reading and checks Rune's fortune site and social media every day, calling herself her “number one fan.” She does not know that the fortune teller is an extremely shy observatory researcher."}},
 {t:{ja:"愛用品",en:"Her favorite things"},ul:{
  ja:["愛用の望遠鏡：星や空、ときには地球の様子を観察するための必需品","研究書『COSMIC』：歴代の天文データと、ルーンの「空読み」の知見が詰まった緑色の重要な書籍"],
  en:["Her telescope: essential for watching the stars, the sky and sometimes the state of Earth","Research book “COSMIC”: a green, important book packed with astronomical data over the years and Rune's sky-reading insights"]}}]},
{id:"champer",map:[57,23],img:"img/champer.webp",emoji:"⛰️",color:"#E8837A",
 name:{ja:"チャンパー",en:"Champer"},
 role:{ja:"登山家／探検家",en:"Mountaineer / Explorer"},
 tagline:{ja:"いつも世界のどこかの山にいる、山登りの達うさ",en:"The master climber rabbit, always somewhere in the world's mountains"},
 tags:{ja:["登山家","探検家","山登りの達うさ","お口の髭"],en:["Mountaineer","Explorer","Master climber","Moustache"]},
 sections:[
 {t:{ja:"外見",en:"Look"},ul:{
  ja:["山の刺繍マークが入った赤いキャップと、ワイルドなお口元の髭がトレードマーク","防寒性と機動性に優れたグレーのパーカー、丈夫なトレッキングパンツ、頑丈な登山靴","寝袋をくくりつけた大きな登山用リュックを背負い、片手には愛用の方位磁石（コンパス）"],
  en:["A red cap embroidered with a mountain mark and a wild moustache are his trademarks","A warm, flexible gray parka, sturdy trekking pants and tough climbing boots","A big climbing backpack with a sleeping bag strapped on, and his beloved compass in one hand"]}},
 {t:{ja:"性格",en:"Personality"},p:{
  ja:"厳しい自然に挑み続けるストイックさと、強い意志を感じさせる凛とした眼差しの持ち主。一度山に入ると音信不通になりがちですが、山と家族、そして仲間を深く愛する、熱いハートの持ち主です。",
  en:"Stoic enough to keep challenging harsh nature, with a poised gaze that shows strong will. Once in the mountains he tends to go out of contact, but he has a warm heart that deeply loves the mountains, his family and his friends."}},
 {t:{ja:"登山家としての実績と冒険",en:"Climbs and adventures"},ul:{
  ja:["限界に挑む達うさ：うさの国のなだらかな山だけでなく、足を踏み入れることすら難しい「虎の国」や「鷹の国」の険しく高い山々を、破竹の勢いで踏破","数々の登頂記録や偉業を打ち立て、冒険家たちの間でも一目置かれる存在","いつも世界のどこかの山の中：一年のほとんどを過酷な山々で過ごすので、めったに連絡がとれないミステリアスな冒険家"],
  en:["A master who pushes limits: he has swept through the steep, high mountains of Tiger Country and Hawk Country, places that are hard even to set foot in, as well as the gentle mountains of Rabbit World","He has set many summit records and feats, and is respected even among explorers","Always somewhere in the world's mountains: he spends most of the year in harsh mountains, so he is a mysterious explorer who can rarely be reached"]}},
 {t:{ja:"街の外れで待つ家族",en:"The family waiting for him"},p:{
  ja:"街の外れの住宅街には、チャンパーの帰りを待つ大切な家族がいます。家に帰れるのは、一年のうち2ヶ月ほど。家族は、毎回の挑戦をハラハラと心配しつつも、あたたかく無事を祈って、応援し続けています。",
  en:"In a residential area at the edge of town, his dear family waits for him to come home. He can be home only about two months a year. The family worries nervously at every challenge, but keeps warmly praying for his safety and cheering him on."}},
 {t:{ja:"ルーンとの関係",en:"With Rune"},p:{
  ja:"うさの国の高い山の頂上にある天文台にいる天文学者ルーンとは、「山に縁のある者同士」として、深く気心の知れた間柄。空や星を読むルーンと、山の天候やルートを読むチャンパーとして、お互いの専門知識を交換したり、連絡を取り合ったりしています。",
  en:"He and Rune, the astronomer at the observatory on a high mountaintop in Rabbit World, know each other well as two with ties to the mountains. Rune reads the sky and the stars, Champer reads mountain weather and routes, and they trade knowledge and keep in touch."}},
 {t:{ja:"♥らびこ♥との関係",en:"With ♥Rabiko♥"},p:{
  ja:"チャンパーは、自分で山で摘んだり採ったりした山菜やきのこなどを売る直販通販サイト「チャンパーのベジサイト」を開いています。らびこはその会員で、数量限定のとれたての山の幸をよく買っています。ポイント集めもできて、美味しい山菜が手に入るので、とても気に入っています。",
  en:"Champer runs a direct-sales online shop called “Champer's Veggie Site,” selling wild vegetables and mushrooms he picks himself in the mountains. Rabiko is a member and often buys its limited-quantity, freshly picked mountain treats. She loves it because she can collect points and get delicious wild vegetables."}},
 {t:{ja:"愛用のギア",en:"His favorite gear"},ul:{
  ja:["黄金の方位磁石（コンパス）：猛吹雪や霧の中でも、進むべき道を正確に示してくれる長年の相棒","万能サバイバルリュックと寝袋：虎の国や鷹の国の極寒地帯でも一夜を明かせる、信頼と実績の登山装備一式"],
  en:["Golden compass: a long-time partner that shows the way even in blizzards and fog","All-purpose survival backpack and sleeping bag: trusted climbing gear that can see him through a night even in the freezing regions of Tiger Country and Hawk Country"]}}]},
{id:"night",map:[34,69],alert:{ja:"⚠ 出没警報が出ている、政府の倉庫のあたり",en:"⚠ Sighting alert: near a government warehouse"},img:"img/night.webp",color:"#7C86C8",
 name:{ja:"ナイト",en:"Night"},
 role:{ja:"義賊（怪盗）",en:"Gentleman thief (a Robin Hood of the night)"},
 tagline:{ja:"真夜中に現れる、正体不明の義賊",en:"The unknown hero who appears at midnight"},
 tags:{ja:["義賊","怪盗","正体不明","女子うさのヒーロー"],en:["Gentleman thief","Mystery","Unknown identity","Hero of the night"]},
 sections:[
 {t:{ja:"外見",en:"Look"},ul:{
  ja:["クラシカルなシルクハットと、素顔を隠す黒いアイマスクがトレードマーク","黒いマントに青いベストとパンツ、胸元には黒いリボンの洗練された紳士スタイル","マスク越しの神秘的な紫色の瞳と、片手に持った葉つきニンジンがチャームポイント","長いお耳から「うさの国の住民」とはわかっているが、ふだんどこにいて、どこから現れるのかは、誰も知らない"],
  en:["A classic top hat and a black eye mask hiding his face are his trademarks","A black cape, blue vest and trousers, and a black ribbon at the chest, a refined gentleman's style","Mysterious purple eyes behind the mask, and a leafy carrot in one hand","His long ears show he lives in Rabbit World, but where he stays and where he comes from, nobody knows"]}},
 {t:{ja:"性格",en:"Personality"},p:{
  ja:"困っているうさぎを放っておけない、優しく情に厚い義理堅い性格。数年かけて情報を精査する慎重さと、真夜中に鮮やかに現れる大胆さを併せ持っています。",
  en:"Kind, warm-hearted and loyal, he can't leave rabbits in trouble alone. He is both careful enough to study information for years and bold enough to appear gracefully at midnight."}},
 {t:{ja:"義賊としての信念と活動",en:"What he believes in"},p:{
  ja:"犯罪のない平和なうさの国にも、厳しい暮らしをしているうさぎは少なくありません。そこでナイトは、政府の倉庫にたくさんの食材や生活用品がしまわれていて、その多くが「規格外」などの理由で捨てられていることを、数年かけて突き止めました。「もったいない」から始まった彼の活動は、捨てられるはずの物を役立てること。真夜中に倉庫へこっそり入り、持てる分だけ持ち出して、生活に困っているうさぎたちに一軒ずつ配って歩いています。",
  en:"Even peaceful Rabbit World has many rabbits living hard lives. Over several years, Night found out that government warehouses hold lots of food and daily goods, and much of it is thrown away for being “non-standard.” His work began with the thought “what a waste”: he quietly slips into the warehouses at midnight, takes only what he can carry, and delivers it house by house to rabbits who need it."}},
 {t:{ja:"うさの国での噂",en:"Rumors about him"},ul:{
  ja:["政府もナイトをマークしていて、夜は倉庫の周りで「ナイト出没警報」を出して警戒している","でも、政府の中にもナイトに助けられた家族やうさぎがたくさんいるので、警報は出つつも「ほぼ見逃されている」という噂","顔が見えないミステリアスさから、「正体不明のかっこいいヒーロー」として、女子うさたちの間でファンが急増中"],
  en:["The government has marked him, and puts out a “Night Sighting Alert” around the warehouses at night","But many in the government have family and friends he has helped, so the alert goes out while he is “mostly overlooked,” people whisper","His hidden face makes him a “mysterious cool hero,” and fans among the girl rabbits are growing fast"]}},
 {t:{ja:"♥らびこ♥との関係",en:"With ♥Rabiko♥"},p:{
  ja:"らびこは毎晩SNSでナイトの目撃情報や最新の噂をチェックするのが日課。ご近所でナイトにまつわる事件や出来事があると、自分のSNSやブログ、日記に熱心に書きとめています。",
  en:"Rabiko checks sightings and the latest rumors about Night on social media every night. When something connected to Night happens nearby, she eagerly records it in her own social media, blog and diary."}}]},
{id:"leblanc",map:[15,40],img:"img/leblanc.webp",color:"#CDEEDF",
 name:{ja:"ルブラン美夜子",en:"Leblanc Miyako"},
 role:{ja:"うさTV お天気キャスター／フリーアナウンサー",en:"Rabbit TV weather caster / Freelance announcer"},
 tagline:{ja:"うさの国の人気お天気キャスター",en:"Rabbit World's popular weather caster"},
 tags:{ja:["お天気キャスター","11月8日生まれ","さそり座","グラマラスバディ"],en:["Weather caster","Born Nov 8","Scorpio","Glamorous"]},
 sections:[
 {t:{ja:"プロフィール",en:"Profile"},ul:{
  ja:["担当番組：『ルブラン美夜子のレッツウェザー』（天気予報、速報、ローカルスポット体験取材など）","誕生日：11月8日（いいお肌の日）","星座：さそり座","自称：「グラマラスバディ」が自慢の大人の女性うさぎ"],
  en:["Show: “Leblanc Miyako's Let's Weather” (forecasts, breaking weather, local spot reports and more)","Birthday: November 8 (Good Skin Day in Japan)","Zodiac: Scorpio","Self-described: a grown-up lady rabbit proud of her glamorous figure"]}},
 {t:{ja:"アナウンサーとしてのこだわり",en:"As an announcer"},ul:{
  ja:["情熱的で芯が強く、いつも洗練された大人の佇まい","自慢のバディを最も美しく見せるポージングや角度には、モデル並みのこだわり"],
  en:["Passionate and strong-willed, always poised and elegant","Models-level devotion to the poses and angles that show her figure at its best"]}},
 {t:{ja:"愛されるシュールさ",en:"Her charm"},p:{
  ja:"本人はいたって大真面目でエレガントに進行しているのに、なぜかハプニングを引き寄せてしまう体質。どんなトラブルでも、キリッとした真顔と透き通る美声でお天気を伝え切る姿が、視聴者に絶妙なシュールさと癒やしを届けています。",
  en:"She hosts with complete seriousness and elegance, yet somehow attracts mishaps. Whatever happens, she delivers the weather with a sharp, straight face and a clear, beautiful voice, which gives viewers a perfectly surreal kind of comfort."}},
 {t:{ja:"ライフスタイル",en:"Lifestyle"},ul:{
  ja:["モットー：「うさにも美しさを」","美容と健康の研究に余念がなく、話題の美容法は番組の体験取材にかこつけて体当たりでチャレンジ","休日はローカルなカフェ巡りやスパ巡り"],
  en:["Motto: “Beauty for rabbits, too”","Always researching beauty and health, and tries trending treatments herself on her show","On days off she tours local cafes and spas"]}},
 {t:{ja:"♥らびこ♥との関係",en:"With ♥Rabiko♥"},p:{
  ja:"らびこが毎日見ているお天気予報のテレビ番組のキャスターです。らびこはテレビ越しに見ているだけで、二人はお互いを知る間柄ではありません。",
  en:"She is the caster on the weather forecast that Rabiko watches on TV every day. Rabiko only knows her through the screen, and the two have never met."}},
 {t:{ja:"毎日のお天気ブログ",en:"Her daily blog"},ul:{ja:["うさTVのお天気コーナーを読む"],en:["Read the Rabbit TV Weather Corner"]},link:"https://rabbittv.rabbitflowerdiary.com/"}]}
];
