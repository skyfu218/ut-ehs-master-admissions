const sourceBase='https://ut-ehs.web.app';
const asset=p=>sourceBase+p;

const equipment=[
 {id:'physiology',number:'01',title:'運動生理檢測器材',titleEn:'EXERCISE PHYSIOLOGY',lead:'量測心肺、代謝、血液、循環與神經肌肉反應。',items:[['攜帶式運動能量分析儀','COSMED K5','量測攝氧量、換氣與能量代謝。','k5.webp'],['十二導程心電圖','h/p/cosmos Quark T12X / 12-lead ECG','記錄運動中的心電反應。','ecg.webp'],['個人攜帶式心率錶','POLAR Heart Rate Monitor','追蹤心率與運動強度。','polar.webp'],['高速運動訓練跑步機','h/p/cosmos pulsar 3p','支援跑步運動負荷與心肺測試。','treadmill.webp'],['攜帶式血乳酸分析儀','Lactate Scout 4','追蹤血乳酸與運動強度。','lactate.webp'],['全自動乾式生化分析儀','FUJIFILM DRI-CHEM NX600','進行多項血液生化分析。','drichem.webp'],['自動血液分析儀','OPTI Medical OPTI CCA-TS','進行血液相關生理分析。','opti.webp'],['血氨測定機','ARKRAY PocketChem BA PA-4140','評估血氨與疲勞反應。','ammonia.webp'],['尿比重屈折計','ATAGO PAL-IOS','評估尿比重與水合狀態。','urine.webp'],['動脈硬化檢測儀','OMRON HBP-8000','評估血管與循環功能。','arterial.webp'],['肌肉超音波圖像儀','ACUSON S2000 / ARFI','以 ARFI 量測肌肉硬度，觀察疲勞與恢復狀態。','ultrasound-arfi-operation.png',['ultrasound-arfi-result.png']],['動作與肌電分析系統','Noraxon MyoMotion & EMG','分析關節動作與神經肌肉活化。','noraxon.webp'],['眼動追蹤儀','ERGONEERS Dikablis Glasses 3','分析眼動與視覺策略。','eyetracker.webp'],['團體運動心率安全監測系統','Zephyr 10-person Wireless Physiological Monitoring','即時傳輸多人運動生理訊號。','zephyr.webp']]},
 {id:'performance',number:'02',title:'運動能力檢測器材',titleEn:'HUMAN PERFORMANCE & BIOMECHANICS',lead:'把運動學、力量、肌力、反應與平衡轉成可比較的資料。',items:[['三維紅外線動作分析系統','VICON 3D Motion Capture','進行三維運動學分析。','vicon.webp'],['測力板','AMTI Force Plates','量測地面反作用力與動力學。','amti.webp'],['多功能訓練與評估系統','BTE PrimusRS','評估肌力、功率與功能性動作。','bte.webp'],['等速肌力測試系統','Biodex System 4 Pro','評估等速、等長肌力與關節功能。','biodex.webp'],['運動表現測量系統','Microgate OptoJump Next 15 m','分析跳躍、步態與接觸時間。','optojump.webp'],['無線光閘計時系統','VALD SmartSpeed','量測衝刺與分段速度。','smartspeed.webp'],['認知反應計時系統','Sportreact','評估認知與反應時間。','sportreact.webp'],['平衡測力板','Biodex Balance System / BioSway','評估靜態與動態平衡。','balance.webp']]},
 {id:'body',number:'03',title:'身體組成檢測器材',titleEn:'BODY COMPOSITION',lead:'評估骨密度、體脂、肌肉量與全身組成。',items:[['雙能量 X 光吸收儀','Lunar iDXA / Dual-energy X-ray Absorptiometry','評估骨密度、脂肪與瘦體組織分布。','dxa.webp'],['身體組成分析儀','InBody 270','分析體脂、肌肉量與身體組成。','inbody.webp']]},
 {id:'training',number:'04',title:'運動訓練器材',titleEn:'SPORTS TRAINING',lead:'提供游泳、划船、跑步、單車、懸吊與慣性阻力訓練。',items:[['游泳測功訓練機','VASA Swim Ergometer','訓練游泳專項力量與划水動作。','vasa.webp'],['陸上 C／K 艇訓練器','Dansprint KE0001P Canoe / Kayak Ergometer','模擬 C／K 艇划槳動作。','dansprint.webp'],['陸上划船測功訓練儀','Concept2 Model D + PM5 RowErg','訓練划船與有氧能力。','rowerg.webp'],['上肢循環式訓練儀','Concept2 SkiErg + PM5','訓練上肢循環與耐力。','skierg.webp'],['無動力弧形跑步機','DRAX Fitness SPT-1000BC','進行無動力跑步與衝刺訓練。','curved-treadmill.webp'],['自行車測功訓練器','ergoline optibike','進行自行車運動訓練。','optibike.webp'],['自行車離心訓練器','RBM Cyclus2 Eccentric Trainer','進行下肢離心運動訓練。','cyclus2.webp'],['吊繩訓練系統','Redcord 100003','進行神經肌肉與功能性訓練。','redcord.webp'],['爆發力訓練器','GymAware','提供速度、功率與爆發力回饋。','gymaware.webp'],['慣性離心阻力訓練系統','Exxentric kBox3 / kBox4 / kPulley','進行慣性阻力與離心超負荷訓練。','exxentric.webp']]},
 {id:'recovery',number:'05',title:'疲勞恢復器材',titleEn:'RECOVERY SCIENCE',lead:'把低溫、氧氣、水流按摩、壓縮與光療納入恢復安排。',items:[['低溫疲勞恢復儀','Space Cabin Cryomaster','用低溫介入支援運動後恢復。','cryomaster.webp'],['輕高壓氧恢復儀','HBOT Medical O2 Fresh M50','提供氧氣環境介入與恢復。','hbot.webp'],['水流按摩恢復儀','OG Wellness HS-30','以水流按摩協助疲勞恢復。','hydromassage.webp'],['冷熱循環壓縮按摩系統','Game Ready','結合溫度與壓縮進行局部恢復。','gameready.webp'],['低能量雷射光療儀','JC-ILIB-800','用於專業規範下的光生物調節介入。','laser.webp']]},
 {id:'imaging',number:'06',title:'影像攝影設備',titleEn:'SPORTS IMAGING',lead:'使用水下、空中與高速影像觀察動作及技術。',items:[['水下運動攝影系統','SWIMPRO Underwater Video System','進行水下游泳技術分析。','swimpro.webp'],['航拍無人機','DJI Inspire 1','記錄場域與移動軌跡。','drone.webp'],['高速攝影機','Sony NEX-VA30H','記錄高速運動影像。','sony-nex.webp'],['專業高速攝影機','Sony PXW-FS5','拍攝動作與運動技術影像。','sony-fs5.webp']]},
 {id:'therapy',number:'07',title:'物理治療相關器材',titleEn:'PHYSICAL THERAPY MODALITIES',lead:'由專業人員帶領認識電療、熱療、超音波、牽引與循環加壓。',items:[['中頻向量干擾治療器','AMSTIM 591','提供中頻干擾電刺激。','amstim.webp'],['微型熱源器','ME-9250 Microwave Diathermy','提供微波熱療。','microwave.webp'],['短波熱療機','DX-500 Shortwave Diathermy','提供短波深層熱療。','shortwave.webp'],['紅外線照射器','InfraCare HP3641','提供局部紅外線溫熱介入。','infrared.webp'],['超音波治療器','Sonicator 740 Therapeutic Ultrasound','以治療性超音波進行軟組織處置。','sonicator.webp'],['多頻道雷射暨電刺激治療儀','LA200II Laser & Electrical Stimulation','結合雷射與電刺激模式。','la200.webp'],['中低頻組合電刺激器','OG Wellness FS-350','提供中低頻電刺激。','fs350.webp'],['電動濕熱熱敷器','OG Wellness KT-641','提供濕熱療法。','hotpack.webp'],['頸腰椎牽引治療床','OG Wellness OL-2000','支援頸椎與腰椎牽引。','traction.webp'],['肢體加壓循環機','IRC RE Compression System','以循環加壓協助肢體恢復。','compression.webp'],['低週波治療儀','UNIT 101L Low-frequency Therapy','提供低週波電刺激。','unit101.webp'],['石蠟熱療槽','TB6 Paraffin Bath','提供石蠟熱療。','paraffin.webp'],['低能量雷射光療儀','JC-ILIB-800','支援光生物調節及恢復研究。','laser.webp']]},
 {id:'environment',number:'08',title:'環境模擬器材',titleEn:'ENVIRONMENTAL SIMULATION',lead:'在可控制的溫濕度、氧氣與水流環境中進行訓練及研究。',items:[['環境模擬艙','巨孚 GWER-C110-CP Environmental Chamber','模擬高溫、高濕環境，研究熱壓力、散熱效益與能量代謝需求。','../environment/chamber-cycling.png',['../environment/chamber-tactical.png']],['激流池','Swimming Flume / Controlled-current Pool','控制水流速度，支援游泳訓練與技術分析。','flume.webp'],['低氧艙','Hypoxic Chamber','模擬高海拔低氧環境。','hypoxic.webp']]}
];

const faculty=[['賴長琦','教授／系主任','運動健康科學研發','lai.webp','健康促進、健康評估、健康管理、人體生理學、芳香療法'],['曾國維','教授','運動傷害防護','tseng.webp','運動醫學、運動能力分析、動作控制、運動生物力學'],['陳永盛','教授','運動健身指導','chen-ys.webp','運動訓練、運動疲勞恢復、運動生理學、足球'],['陳宗與','教授','運動健康科學研發','chen-cy.webp','運動營養學、運動生理學、運動與新陳代謝'],['曾玉華','副教授','運動健身指導','tseng-yh.webp','日文、運動藥物學、體育課程設計'],['張若寧','助理教授','運動健身指導','chang.webp','運動心理學、應用運動心理學、研究法'],['傅思凱','助理教授','運動傷害防護','sky.jpg','運動體能監測與評估、運動科技支援、運動健康科技研發、運動防護'],['翁義軒','助理教授','運動傷害防護','weng.webp','運動傷害處理及預防、動作優化訓練、姿勢矯正']];

const ecss=[
 ['2025','全英文海報發表','學生以英文說明研究設計、結果與應用','/assets/ecss/ecss-2025-10.webp'],['2025','回答國際學者提問','在海報前練習即時理解與專業回應','/assets/ecss/ecss-2025-18.webp'],['2025','國際大會口頭發表','站上講臺，以英文分享研究成果','/assets/ecss/ecss-2025-25.webp'],['2025','全英文口頭交流','從準備簡報到面對現場提問','/assets/ecss/ecss-2025-42.webp'],['2025','跨國研究交流','與不同國家參與者分享研究觀點','/assets/ecss/ecss-2025-35.webp'],['2025','師生共同參與','教師帶隊，讓研討會成為移動的國際教室','/assets/ecss/ecss-2025-05.webp'],['2025','團隊與旅程','學生彼此支持，也建立走向國際的自信','/assets/ecss/ecss-2025-53.webp'],['2025','ECSS 國際年會現場','把課堂與研究帶到世界舞臺','/assets/ecss/ecss-2025-48.webp'],['2024','學生站上國際舞臺','以全英文進行研究口頭發表，練習把專業清楚說給世界聽','/assets/ecss/2024-students/student-oral-1.webp'],['2024','全英文口頭發表紀錄','學生在 ECSS 會場完整說明研究方法與成果','/assets/ecss/2024-students/video-1.jpg','/media/ecss/2024-student-presentation-1.mp4'],['2024','研究成果現場分享','以數據圖表回答研究問題並面對國際聽眾','/assets/ecss/2024-students/video-2.jpg','/media/ecss/2024-student-presentation-2.mp4'],['2024','口頭發表與成果交流','學生獨立完成英文簡報，在正式會場分享研究','/assets/ecss/2024-students/student-oral-2.webp'],['2024','會前準備','反覆確認研究內容、投影片與英文表達','/assets/ecss/2024-students/presentation-prep.webp'],['2024','學生團隊共同準備','彼此討論、校對資料，讓每一場發表更完整','/assets/ecss/2024-students/team-prep.webp'],['2024','專注研讀與演練','從資料閱讀到表達練習，累積站上國際舞臺的底氣','/assets/ecss/2024-students/student-review.webp'],['2024','跨國專業交流','主動與國際運動科學專業人員對話，拓展研究視野','/assets/ecss/2024-students/international-exchange.webp'],['2024','師生共同出席 ECSS Glasgow 2024','以學生為主角的國際學習旅程，教師陪伴團隊完成挑戰','/assets/ecss/2024-students/team-group.webp']
];

const icsstPresentations=[
 ['林敬捷','JINGJIE LIN','離心收縮引起的肌肉損傷對平地行走過程中下肢運動學的影響','Impact of Eccentric-Induced Muscle Damage on Lower Limbs Kinetics During Level Walking'],
 ['蘇宇平','YUPING SU','神經肌肉控制與力量：下坡行走後膝關節伸肌的表現——誘發性疲勞','Neuromuscular Control and Strength Performance of Knee Extensors Following Downhill Walking–Induced Fatigue'],
 ['洪嘉均','CHIACHUN HUNG','客製鞋墊對空氣手槍射擊中下肢神經肌肉疲勞軌跡的影響','Effects of Custom Insoles on Lower-Limb Neuromuscular Fatigue Progression during Air Pistol Shooting'],
 ['顏劭宇','SHAOYU YEN','智慧鞋墊應用於下樓梯任務之信效度驗證：加速規衝擊值與測力板垂直反作用力之相關性分析','Validation of Smart Insole During Stair Descent: Correlation Analysis Between Accelerometry and Force Plate Vertical Ground Reaction Forces'],
 ['黃宇祥','YU-HSIANG HUANG','不同足部介面對專業舞者單腳前跳時地面反作用力的影響','Effect of Sock Condition on Ground Reaction Forces in Professional Dancers During Single-Leg Forward Jump'],
 ['李蓁','ZHEN LI','足部包覆狀態對舞蹈大跳 Grand Jeté 空中姿態與髖膝關節協調性之運動學分析','A Kinematic Analysis of the Effects of Foot Coverage Conditions on Aerial Posture and Hip–Knee Joint Coordination During the Grand Jeté'],
 ['賴曉嵐','SIAOLAN LAI','結合動作學習與神經肌肉控制之十二週團體運動介入對社區高齡者功能性體適能之效益','Effects of a 12-Week Multicomponent Exercise Intervention Integrating Motor Learning and Neuromuscular Control on Functional Fitness in Community-Dwelling Older Adults'],
 ['李玟潔','WUN-JIE LI','長時間離心負荷行走中與恢復期之步態時空參數代償機制分析','Analysis of Spatiotemporal Gait Compensatory Mechanisms During and After Long-Term Eccentric-Loading Walking'],
 ['柯竣升','CHUN-SHENG KO','智慧型手機應用程式於深蹲與懸垂上膊抓舉速度基礎訓練中的效度與最佳拍攝距離','Validity and Optimal Camera Distance of a Smartphone Application for Velocity-Based Training in Squat and Hang Power Clean'],
 ['洪裎恩','CHENG-EN HONG','高壓氧治療對下坡行走誘發肌肉損傷後，下肢爆發力與最大肌力恢復的影響','Effects of Hyperbaric Oxygen Therapy on the Recovery of Lower Limb Explosive Power and Maximal Strength After Downhill Walking–Induced Muscle Damage']
];

const icsstPhotos=[
 ['06','師生團隊抵達 ICSST Okinawa 2026','研究生共同參與國際研討會'],['14','研究生進行口頭發表','以英文完整說明研究設計與成果'],['15','運動科技研究口頭發表','分享手機影像與速度基礎訓練研究'],['16','運動生物力學口頭發表','以實驗方法回應國際研究問題'],['17','運動表現研究口頭發表','將客製鞋墊與射擊表現研究帶上國際舞臺'],['03','全英文海報發表','向國際參與者說明智慧型手機量測研究'],['12','研究生與海報成果','呈現離心負荷行走與動作分析成果'],['10','海報現場專業交流','回答研究方法與結果相關提問'],['02','研究生說明研究成果','在海報前進行面對面的學術討論'],['04','國際學者現場提問','透過交流深化研究觀點'],['05','師生共同參與海報交流','從研究準備走向國際對話'],['07','跨世代研究交流','與國際學者討論神經肌肉控制研究'],['08','運動生物力學海報討論','以圖表與數據清楚回應問題'],['09','研究團隊現場討論','從海報內容延伸合作與新問題'],['01','學生站上國際發表現場','累積英文表達與研究溝通經驗'],['13','會前準備與專注聆聽','為正式發表與問答做好準備']
];

const equipImage=file=>file.startsWith('../')?asset('/assets/'+file.slice(3)):asset('/assets/equipment/'+file);
const featured=[['環境模擬艙','/assets/environment/chamber-cycling.png','巨孚 GWER-C110-CP Environmental Chamber','environment'],['雙能量 X 光吸收儀','/assets/equipment/dxa.webp','Lunar iDXA / DXA','body'],['激流池','/assets/equipment/flume.webp','Swimming Flume','environment'],['肌肉超音波圖像儀','/assets/equipment/ultrasound-arfi-operation.png','ACUSON S2000 / ARFI','physiology']];
document.querySelector('#equipment-featured').innerHTML=featured.map(x=>`<button data-equip="${x[3]}"><img src="${asset(x[1])}" alt="${x[0]}" loading="lazy"><span><b>${x[0]}</b><small>${x[2]}</small></span></button>`).join('');
document.querySelector('#equipment-tabs').innerHTML=equipment.map((x,i)=>`<button role="tab" aria-selected="${i===0}" data-equip="${x.id}" class="${i===0?'active':''}"><b>${x.number}</b>${x.title}</button>`).join('');
document.querySelector('#equipment-panels').innerHTML=equipment.map((x,i)=>`<section data-equip-panel="${x.id}" ${i?'hidden':''}><div class="equipment-panel-head"><p class="eyebrow dark">CATEGORY ${x.number} / ${x.titleEn}</p><h3>${x.title}</h3><p>${x.lead}</p></div><p class="swipe-hint">向右滑看更多器材 <b>→</b></p><div class="equipment-items">${x.items.map(([name,en,desc,img,extra=[]])=>`<article><div class="equipment-card-media"><img src="${equipImage(img)}" alt="${name}" loading="lazy">${extra.map((e,j)=>`<img src="${equipImage(e)}" alt="${name}${j?'量測結果':'延伸測試'}" loading="lazy">`).join('')}</div><div><h4>${name}</h4><small>${en}</small><p>${desc}</p></div></article>`).join('')}</div></section>`).join('');
document.querySelectorAll('[data-equip]').forEach(b=>b.addEventListener('click',()=>{const id=b.dataset.equip;document.querySelectorAll('[data-equip][role=tab]').forEach(x=>{x.classList.toggle('active',x.dataset.equip===id);x.setAttribute('aria-selected',String(x.dataset.equip===id))});document.querySelectorAll('[data-equip-panel]').forEach(x=>x.hidden=x.dataset.equipPanel!==id);document.querySelector(`[data-equip-panel="${id}"]`)?.scrollIntoView({block:'nearest'})}));

document.querySelector('#faculty-grid').innerHTML=faculty.map(([name,role,group,image,expertise])=>`<article><div class="roster-person"><img src="${asset('/assets/'+image)}" alt="${name}${role}個人照" loading="lazy"><div><span>${group}</span><h3>${name}</h3><b>${role}</b></div></div><p>${expertise}</p></article>`).join('');

function renderEcss(){const target=document.querySelector('#global');if(!target)return;const events={2025:{date:'2025.07.01–07.04',zh:'第 30 屆歐洲運動科學學院年會',en:'The 30th Annual Congress of the European College of Sport Science',place:'義大利里米尼｜Palacongressi di Rimini, Rimini, Italy'},2024:{date:'2024.07.02–07.05',zh:'第 29 屆歐洲運動科學學院年會',en:'The 29th Annual Congress of the European College of Sport Science',place:'英國蘇格蘭格拉斯哥｜Scottish Event Campus, Glasgow, Scotland, UK'}};target.className='ecss section';target.innerHTML=`<div class="ecss-intro"><p class="eyebrow dark">GLOBAL CLASSROOM / ECSS</p><h2>教師帶領學生<br>出席國際學術研討會</h2><p>我們把專業知識帶到國際重要的運動科學與運動醫學研討會，接觸最新研究、與各國學者交流，也讓學生實際站上國際舞臺。</p><blockquote>從全英文海報與口頭發表，到回答提問、交換研究觀點；這趟旅程讓學生練習勇敢表達，也把世界帶回自己的學習與研究。</blockquote><div class="ecss-values"><span><b>01</b>全英文發表</span><span><b>02</b>國際學術交流</span><span><b>03</b>研究新知</span><span><b>04</b>師生共同成長</span></div></div><div class="ecss-years">${['2025','2024'].map(year=>{const e=events[year];return `<article><header><span>${year}</span><div><small>${e.date}</small><h3>${e.zh}</h3><p>${e.en}</p><a href="https://sport-science.org/" target="_blank" rel="noreferrer">${e.place} ↗</a></div></header><p class="swipe-hint">向右滑看更多現場照片 <b>→</b></p><div class="ecss-gallery">${ecss.filter(x=>x[0]===year).map((x,i)=>`<figure class="${i===0?'featured':''}">${x[4]?`<video controls playsinline preload="metadata" poster="${asset(x[3])}"><source src="${asset(x[4])}" type="video/mp4"></video>`:`<img src="${asset(x[3])}" alt="${x[1]}" loading="lazy">`}<figcaption><b>${x[1]}</b><span>${x[2]}</span></figcaption></figure>`).join('')}</div></article>`}).join('')}</div><p class="source-note">會名、日期及地點依 ECSS 官方資料；照片由系上提供之「2024 ECSS」與「2025 ECSS」資料夾選輯。</p>`}
renderEcss();

function renderGlobalConferences(){
  const target=document.querySelector('#global');
  if(!target)return;
  const events={2025:{date:'2025.07.01–07.04',zh:'第 30 屆歐洲運動科學學院年會',en:'The 30th Annual Congress of the European College of Sport Science',place:'義大利里米尼｜Palacongressi di Rimini, Rimini, Italy'},2024:{date:'2024.07.02–07.05',zh:'第 29 屆歐洲運動科學學院年會',en:'The 29th Annual Congress of the European College of Sport Science',place:'英國蘇格蘭格拉斯哥｜Scottish Event Campus, Glasgow, Scotland, UK'}};
  const icsstGallery=icsstPhotos.map((x,i)=>`<figure class="${i===0?'featured':''}"><img src="assets/icsst-2026/icsst-${x[0]}.jpg" alt="${x[1]}" loading="lazy"><figcaption><b>${x[1]}</b><span>${x[2]}</span></figcaption></figure>`).join('');
  const icsstList=icsstPresentations.map((x,i)=>`<li><span>${String(i+1).padStart(2,'0')}</span><div><b>${x[2]}</b><small>${x[3]}</small><p>主要報告者｜${x[0]} <em>${x[1]}</em></p></div></li>`).join('');
  target.className='ecss section';
  target.innerHTML=`<div class="ecss-intro"><p class="eyebrow dark">GLOBAL CLASSROOM / ICSST・ECSS</p><h2>教師帶領學生<br>出席國際學術研討會</h2><p>我們把專業知識帶到國際重要的運動科學與運動醫學研討會，接觸最新研究、與各國學者交流，也讓學生實際站上國際舞臺。</p><blockquote>從全英文海報與口頭發表，到回答提問、交換研究觀點；這趟旅程讓學生練習勇敢表達，也把世界帶回自己的學習與研究。</blockquote><div class="ecss-values"><span><b>01</b>全英文發表</span><span><b>02</b>國際學術交流</span><span><b>03</b>研究新知</span><span><b>04</b>師生共同成長</span></div></div><div class="ecss-years"><article class="icsst-event"><header><span>2026</span><div><small>2026.04.24</small><h3>國際運動科學與科技研討會</h3><p>International Conference on Sports Science and Technology (ICSST)</p><b class="conference-place">日本沖繩｜Okinawa, Japan</b></div></header><div class="icsst-summary"><div><strong>10</strong><span>研究發表</span></div><p>研究生以口頭與海報形式，分享運動生物力學、神經肌肉控制、智慧感測、運動表現、健康促進與恢復科學等研究成果。</p></div><p class="swipe-hint">向右滑看更多現場照片 <b>→</b></p><div class="ecss-gallery">${icsstGallery}</div><details class="icsst-program"><summary><div><p class="eyebrow dark">PRESENTATION PROGRAM</p><h4>研究生發表清單</h4><p>點選展開主要報告者與中英文題目</p></div><span class="icsst-program-toggle"><b>10</b> 筆發表<em></em></span></summary><ol>${icsstList}</ol></details></article>${['2025','2024'].map(year=>{const e=events[year];return `<article><header><span>${year}</span><div><small>${e.date}</small><h3>${e.zh}</h3><p>${e.en}</p><a href="https://sport-science.org/" target="_blank" rel="noreferrer">${e.place} ↗</a></div></header><p class="swipe-hint">向右滑看更多現場照片 <b>→</b></p><div class="ecss-gallery">${ecss.filter(x=>x[0]===year).map((x,i)=>`<figure class="${i===0?'featured':''}">${x[4]?`<video controls playsinline preload="metadata" poster="${asset(x[3])}"><source src="${asset(x[4])}" type="video/mp4"></video>`:`<img src="${asset(x[3])}" alt="${x[1]}" loading="lazy">`}<figcaption><b>${x[1]}</b><span>${x[2]}</span></figcaption></figure>`).join('')}</div></article>`}).join('')}</div><p class="source-note">ICSST 2026 發表清單與照片由系上提供；ECSS 會名、日期及地點依官方資料，照片由系上提供之「2024 ECSS」與「2025 ECSS」資料夾選輯。</p>`;
}
renderGlobalConferences();

const ambientVideoObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
  const video=entry.target;
  if(entry.isIntersecting){video.play().catch(()=>{});}
  else{video.pause();}
}),{threshold:.18});
function setupAmbientVideos(root=document){
  root.querySelectorAll('video').forEach(video=>{
    video.autoplay=true;
    video.muted=true;
    video.defaultMuted=true;
    video.loop=true;
    video.playsInline=true;
    video.setAttribute('muted','');
    video.setAttribute('loop','');
    video.setAttribute('playsinline','');
    if(!video.dataset.ambientReady){
      video.dataset.ambientReady='true';
      ambientVideoObserver.observe(video);
    }
  });
}
setupAmbientVideos();

const adjunctGroups=document.querySelector('#adjunct-groups');
async function loadAdjunctFaculty(){
  if(!adjunctGroups)return;
  try{
    const response=await fetch('assets/data/adjunct-faculty.json?v=20261118-1');
    if(!response.ok)throw new Error('adjunct faculty data');
    const faculty=await response.json();
    const groupOrder=['運動傷害防護','運動健身指導','運動健康科學研發'];
    adjunctGroups.innerHTML=groupOrder.map(group=>{
      const people=faculty.filter(person=>person.group===group);
      return `<section><h4>${group}<span>${String(people.length).padStart(2,'0')}</span></h4>${people.map(person=>`<article><div><h3>${academicEscape(person.name)}</h3><span>${academicEscape(person.role)}</span></div>${person.organization?`<b>${academicEscape(person.organization)}</b>`:''}<p>${academicEscape(person.expertise||'')}${person.courses?`<small>${academicEscape(person.courses)}</small>`:''}</p></article>`).join('')}</section>`;
    }).join('');
  }catch(error){adjunctGroups.innerHTML='<p class="adjunct-loading">兼任與合聘師資暫時無法載入，請稍後重新整理。</p>';console.error(error);}
}

const academicLabels={publications:'學術發表',projects:'計畫',conferences:'研討會與專書',patents:'專利'};
const academicEscape=value=>String(value??'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
let academicCatalog=[],academicCategory='projects',academicLimit=12,academicOwner='all',academicQuery='',academicVisibleRows=[];
const academicResults=document.querySelector('#academic-results'),academicCount=document.querySelector('#academic-count'),academicMore=document.querySelector('#academic-more'),academicDetail=document.querySelector('#academic-detail'),academicDetailBody=document.querySelector('#academic-detail-body');
const academicLink=(url,label)=>url?`<a href="${academicEscape(url)}" target="_blank" rel="noopener noreferrer">${label} ↗</a>`:'';
function openAcademicDetail(item){
  const categoryLabel=academicLabels[item.category]||'學術成果';
  academicDetailBody.innerHTML=`<p class="eyebrow dark">${academicEscape(item.owner)} / ${categoryLabel}</p><h2>${academicEscape(item.title)}</h2><p>${academicEscape(item.meta||'')}</p>${item.summary?`<h3>${academicEscape(item.summaryLabel||'計畫／成果摘要')}</h3><p>${academicEscape(item.summary)}</p>`:''}${item.doi?`<p class="academic-doi"><b>DOI</b> ${academicEscape(item.doi)}</p>`:''}${item.citation?`<details class="academic-citation"><summary>完整書目</summary><p>${academicEscape(item.citation)}</p></details>`:''}${item.sharedProjectNote?`<p class="academic-detail-note">${academicEscape(item.sharedProjectNote)}</p>`:''}${item.agency?`<p>委託單位：${academicEscape(item.agency)}<br>執行期間：${academicEscape(item.period)}<br>參與角色：${academicEscape(item.role)}</p>`:''}${item.images?.length?`<div class="academic-detail-images">${item.images.map((url,index)=>`<figure><img src="${academicEscape(url)}" loading="lazy" alt="${academicEscape(item.imageCaptions?.[index]||item.title)}">${item.imageCaptions?.[index]?`<figcaption>${academicEscape(item.imageCaptions[index])}</figcaption>`:''}</figure>`).join('')}</div>`:''}${item.videos?.map(video=>`<h3>${academicEscape(video.title)}</h3><video controls playsinline preload="none" poster="${academicEscape(video.poster||'')}"><source src="${academicEscape(video.src)}" type="video/mp4"></video>${academicLink(video.src,'另開影片')}`).join('')||''}<div class="academic-source-actions">${academicLink(item.fullTextLink,'開放全文')}${academicLink(item.link,['publications','conferences'].includes(item.category)?'原文／出版頁面':'閱讀公開來源')}${academicLink(item.abstractLicense,'摘要授權')}${item.sourceUrl&&item.sourceUrl!==item.link?academicLink(item.sourceUrl,item.sourceLabel||'書目來源'):''}</div>${!item.summary&&['publications','conferences'].includes(item.category)?'<p class="academic-detail-note">目前尚未查得可收錄的公開摘要，請由原文或書目來源查閱；不以題目推測研究結果。</p>':''}${item.previewLink?academicLink(item.previewLink,'出版社官方試閱'):''}${item.documents?.map(document=>academicLink(document.src,academicEscape(document.title))).join('')||''}${!item.summary&&!item.images?.length&&!item.link&&!['publications','conferences'].includes(item.category)?'<p class="academic-detail-note">此筆依 CV 成果名錄呈現，尚無另附摘要或照片。</p>':''}`;
  setupAmbientVideos(academicDetailBody);
  academicDetail.showModal();
}
function renderAcademicResults(){
  if(!academicResults)return;
  academicVisibleRows=academicCatalog.filter(item=>item.category===academicCategory&&(academicOwner==='all'||item.owner===academicOwner)&&JSON.stringify(item).toLowerCase().includes(academicQuery.toLowerCase()));
  academicCount.textContent=`${academicLabels[academicCategory]}・符合條件 ${academicVisibleRows.length} 筆`;
  academicResults.innerHTML=academicVisibleRows.length?academicVisibleRows.slice(0,academicLimit).map((item,index)=>`<button class="academic-result" data-academic-result="${index}"><div><h3>${academicEscape(item.title)}</h3><p>${academicEscape(item.owner)}${item.year?' / '+academicEscape(item.year):''}　${academicEscape(item.meta||'')}</p></div><span>查看 ＋</span></button>`).join(''):'<p class="academic-empty">目前沒有符合條件的已收錄成果。</p>';
  academicMore.hidden=academicVisibleRows.length<=academicLimit;
  document.querySelectorAll('[data-academic-result]').forEach(button=>button.addEventListener('click',()=>openAcademicDetail(academicVisibleRows[Number(button.dataset.academicResult)])));
}
async function loadAcademicExplorer(){
  if(!academicResults)return;
  try{
    const response=await fetch('assets/data/faculty-academic.json?v=20261118-1');
    if(!response.ok)throw new Error('academic data');
    academicCatalog=await response.json();
    const owners=[...new Set(academicCatalog.map(item=>item.owner).filter(Boolean))].sort((a,b)=>a.localeCompare(b,'zh-Hant'));
    document.querySelector('#academic-owner').insertAdjacentHTML('beforeend',owners.map(name=>`<option value="${academicEscape(name)}">${academicEscape(name)}</option>`).join(''));
    renderAcademicResults();
  }catch(error){academicCount.textContent='學術成果暫時無法載入，請稍後重新整理。';console.error(error);}
}
document.querySelectorAll('[data-academic-category]').forEach(button=>button.addEventListener('click',()=>{academicCategory=button.dataset.academicCategory;academicLimit=12;document.querySelectorAll('[data-academic-category]').forEach(item=>{const active=item===button;item.classList.toggle('active',active);item.setAttribute('aria-pressed',String(active));});renderAcademicResults();}));
document.querySelector('#academic-search')?.addEventListener('input',event=>{academicQuery=event.target.value;academicLimit=12;renderAcademicResults();});
document.querySelector('#academic-owner')?.addEventListener('change',event=>{academicOwner=event.target.value;academicLimit=12;renderAcademicResults();});
academicMore?.addEventListener('click',()=>{academicLimit+=12;renderAcademicResults();});
document.querySelector('.academic-close')?.addEventListener('click',()=>academicDetail.close());
academicDetail?.addEventListener('click',event=>{if(event.target===academicDetail){const rect=academicDetail.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)academicDetail.close();}});
loadAcademicExplorer();
loadAdjunctFaculty();

const toggle=document.querySelector('.nav-toggle'),nav=document.querySelector('#nav');toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!open));nav.classList.toggle('open',!open)});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}));
