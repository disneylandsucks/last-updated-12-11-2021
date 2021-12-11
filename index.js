const canvasWidth = window.innerWidth
const canvasHeight = window.innerHeight
const imgSize = 600
const gridImageSize = 200
const numRows = 3
const numCols = 4
let shirt1front, shirt1back,shirt2front, shirt2back,shirt3front,shirt3back,shirt4front, shirt4back, shirt5front, shirt5back, shirt6front, shirt6back, shirt7front, shirt7back, shirt8front, shirt8back, shirt9front, shirt9back, shirt10back, shirt11front, shirt12front, shirt13front, shirt13back, shirt14front, shirt14back
let drawing1front, drawing1back, drawing2front, drawing2back, drawing3front, drawing3back, drawing4front, drawing4back, drawing5front, drawing5back, drawing6front, drawing6back, drawing7front, drawing7back, drawing8back, drawing8front, drawing9front, drawing9back, drawing10front, drawing10back, drawing11front, drawing11back, drawing12front, drawing12back, drawing13front, drawing13back, drawing14front, drawing14back, drawing15front, drawing15back
let doodle1front,doodle1back,doodle2front,doodle2back,doodle3front,doodle3back,doodle4front, doodle4back, doodle5front, doodle5back, doodle6front, doodle6back, doodle7front, doodle7back, doodle8front, doodle8back, doodle9front, doodle9back, doodle10front, doodle10back, doodle11front, doodle11back, doodle12front, doodle12back, doodle13front, doodle13back, doodle14front,doodle14back, doodle15front, doodle15back
let funnypicture1, funnypicture2, funnypicture3, funnypicture5,funnypicture4,funnypicture6,funnypicture7,funnypicture8,funnypicture9,funnypicture10, funnypicture11, funnypicture12, funnypicture13, funnypicture14, funnypicture15
let gif1, gif2, gif3, gif4, gif5, gif7, gif8, gif9, gif10, gif11, gif12, gif13, gif14, gif15
let cool1, cool2, cool3, cool4, cool5,cool6, cool7, cool8, cool11, cool12, cool13, cool14, cool15, cool16, cool17, cool18, cool19, cool20, cool21, cool22, cool23,cool24, cool25, cool26, coolpic27, coolpic28, coolpic29, coolpic30
let thetaX = 0
let thetaY = 0
let mouseStart = {x: 0, y: 0}

let shirts = []

let drawings = []

let doodle =[]

let funstuff = []

let newstuff = []



const controlCircleSize = 25
let shirtControlCircleData
let drawingControlCircleData
let doodleControlCircleData
let funstuffcontrolcircledata
let newstuffcontrolcircledata

let toggleButtons
const toggleButtonWidth = 50
const toggleButtonHeight = 50
const numToggles = 9
// const toggleButtonNames = ['single', 'grid', 'doodles']


let counter = 0
let overallState = 1
const numStates = 9


function preload(){
  shirt1front = loadImage('shirt1-front.png');
  shirt1back = loadImage('test.png');

  shirt2front = loadImage('shirt2-front.png');
  shirt2back = loadImage('shirt2-back.png');

  shirt3front = loadImage('shirt3-front.png');
  shirt3back = loadImage('shirt3-back.png');

  shirt4front = loadImage('shirt4-front.png');
  shirt4back = loadImage('shirt4-back.png');

  shirt5front = loadImage('shirt5-front.png');
  shirt5back = loadImage('shirt5-back.png');

  shirt6front = loadImage('shirt6-front.png');
  shirt6back = loadImage('shirt6-back.png');

  shirt7front = loadImage('shirt7-front.png');
  shirt7back = loadImage('shirt7-back.png');

  shirt8front = loadImage('shirt8-front.png');
  shirt8back = loadImage('shirt8-back.png');

  shirt9front = loadImage('shirt9-front.png');
  shirt9back = loadImage('shirt9-back.png');

  shirt10front = loadImage('shirt10-front.png');
  shirt10back = loadImage('shirt10-back.png');

  shirt11front = loadImage('shirt11-front.png');
  shirt11back = loadImage('shirt11-front.png');

  shirt12front = loadImage('shirt12-front.png');
  shirt12front = loadImage('shirt12-front.png');

  shirt13front = loadImage('shirt13-front.png');
  shirt13back = loadImage('shirt13-back.png');

  shirt14front = loadImage('shirt14-front.png');
  shirt14back = loadImage('shirt14-back.png');

  drawing1front = loadImage('drawing-1.png')
  drawing1back= loadImage('drawing-2.png')
  
  drawing2front = loadImage('drawing-3.png')
  drawing2back= loadImage('drawing-4.png')
  
  drawing3front = loadImage('drawing-5.png')
  drawing3back= loadImage('drawing-6.png')
  
  drawing4front = loadImage('drawing-7.png')
  drawing4back= loadImage('drawing-8.png')
  
  drawing5front = loadImage('drawing-9.png')
  drawing5back= loadImage('drawing-10.png')
  
  drawing6front = loadImage('drawing-11.png')
  drawing6back= loadImage('drawing-12.png')
  
  drawing7front = loadImage('drawing-13.png')
  drawing7back= loadImage('drawing-14.png')
  
  drawing8front = loadImage('drawing-15.png')
  drawing8back= loadImage('drawing-16.png')
  
  drawing9front = loadImage('drawing-18.png')
  drawing9back= loadImage('drawing-19.png')
  
  drawing10front = loadImage('drawing-19.png')
  drawing10back= loadImage('drawing-20.png')
  
   drawing11front = loadImage('drawing-21.png')
  drawing11back= loadImage('drawing-22.png')
  
  drawing12front = loadImage('drawing-23.png')
  drawing12back= loadImage('drawing-24.png')
  
  drawing13front = loadImage('drawing-25.png')
  drawing13back= loadImage('drawing-26.png')
  
  drawing14front = loadImage('drawing-29.png')
  drawing14back= loadImage('drawing-28.png')
  
  drawing15front = loadImage('drawing-27.png')
  drawing15back= loadImage('drawing-30.png')

  doodle1front =loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1638840964/doodle-1front_p83olo.png')
  doodle1back =loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1638841098/doodle-1front_lar3yz.png')
  doodle2front =loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1638841263/doodle-8back_eardiq.png')
  doodle2back =loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1638841344/doodle-8front_vie6zd.png')
  doodle3front =loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1638841460/doodle-3front_ecyfvw.png')
  doodle3back =loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1638841459/doodle-3back_waiaqy.png')
  doodle4front =loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1638841665/doodle-2front_xkhjya.png')
  doodle4back =loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1638841665/doodle-2back_tbfrpi.png')
  
  doodle5front =loadImage ('https://res.cloudinary.com/painkillerkid/image/upload/v1638842342/doodle-4front_folbng.png')
  doodle5back =loadImage ('https://res.cloudinary.com/painkillerkid/image/upload/v1638842342/doodle-4back_gdyzcl.png')

  doodle6front =loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1638842161/doodle-6front_xozhaq.png')
  doodle6back =loadImage ('https://res.cloudinary.com/painkillerkid/image/upload/v1638842161/doodle-6back_yvd2gb.png')

  doodle7front =loadImage ('https://res.cloudinary.com/painkillerkid/image/upload/v1638842506/doodle-5front_dzog7u.png')
  doodle7back =loadImage ('https://res.cloudinary.com/painkillerkid/image/upload/v1638842506/doodle-5back_no0omk.png')

  doodle8front =loadImage ('https://res.cloudinary.com/painkillerkid/image/upload/v1638842867/doodle-7front_dx9iuu.png')
   doodle8back =loadImage ('https://res.cloudinary.com/painkillerkid/image/upload/v1638842867/doodle-7back_soq30c.png')

  doodle9front =loadImage ('https://res.cloudinary.com/painkillerkid/image/upload/v1638843133/Arthur_All_The_Stuff_dragged_4_tejzyl.png')
  doodle9back =loadImage ('https://res.cloudinary.com/painkillerkid/image/upload/v1638843133/dot-dot-2back_vr6v86.png')

  doodle10front =loadImage ('https://res.cloudinary.com/painkillerkid/image/upload/v1638843265/dot-dot-2front_jphlyr.png')
  doodle10back =loadImage ('https://res.cloudinary.com/painkillerkid/image/upload/v1638843265/dot-dot-1back_gsfixc.png')

  doodle11front =loadImage ('https://res.cloudinary.com/painkillerkid/image/upload/v1638843691/boop-21_dragged_y6iwsh.png')
  doodle11back =loadImage ('https://res.cloudinary.com/painkillerkid/image/upload/v1638843691/boop-22_dragged_ucdvas.png')

  doodle12front =loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1638843691/boop-23_dragged_l8j8nx.png')
  doodle12back =loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1638843691/boop-24_dragged_qpkfdv.png')

  doodle13front = loadImage ('https://res.cloudinary.com/painkillerkid/image/upload/v1639261211/Nara-Bootleg-2-Front_jwrh0v.jpg')
  doodle13back = loadImage ('https://res.cloudinary.com/painkillerkid/image/upload/v1639261211/Nara-Bootleg-2-Back_io1goq.jpg')

  doodle14front = loadImage ('https://res.cloudinary.com/painkillerkid/image/upload/v1639261417/Nara_Bootleg_4_Front_irobng.jpg')
  doodle14back = loadImage ('https://res.cloudinary.com/painkillerkid/image/upload/v1639261417/Nara_Bootleg_4_Back_sbmesn.jpg')


  doodle15front = loadImage ('https://res.cloudinary.com/painkillerkid/image/upload/v1639260824/Doodle_Stuff_oqn8dp.jpg')
  doodle15back = loadImage ('https://res.cloudinary.com/painkillerkid/image/upload/v1639260888/Doodle_Stuff_1_aap0be.jpg')

  funnypicture1 = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1638812324/funnypicture-1_uh20va.png')

  funnypicture2 = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1638812325/funnypicture-2_l3pt9y.jpg')

  funnypicture3 = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1638812325/funnypicture-3_ebgzwl.jpg')

  funnypicture4 = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1638812325/funnypicture-4_wdswpn.jpg')

  funnypicture5 = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1638812325/funnypicture-5_m2axss.jpg')

  funnypicture6 = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1638812325/funnypicture-6_iyfqnv.jpg')

  funnypicture7 = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1638812325/funnypicture-7_vrlsb2.jpg')

  funnypicture8 = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1638812326/funnypicture-8_u33b5e.jpg')

  funnypicture9 = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1638812326/funnypicture-9_t3riia.jpg')

  funnypicture10 = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1638812324/funnypicture-10_f8ywjs.jpg')

  funnypicture11 = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1638812325/funnypicture-18_zasgux.jpg')

  funnypicture12 = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1638812324/funnypicture-12_otz1kr.jpg')

  funnypicture13 = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1638812325/funnypicture-13_yhwonk.jpg')
  
  funnypicture14 = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1638812325/funnypicture-14_bworcv.jpg')

  funnypicture15 = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1638812325/funnypicture-20_ipfvoh.jpg')

  gif1 = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1638812322/adorable-dog_lqgvpa.gif')
  
  gif2 = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1638812327/giphy-2_qjnqy7.gif')

  gif3 = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1638812327/giphy-3_umcf1h.gif')

  gif4 = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1638812327/giphy-4_pkzbee.gif')

  gif5 = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1638812328/giphy-5_g4fp6r.gif')

  gif6= loadImage ('https://res.cloudinary.com/painkillerkid/image/upload/v1638812326/giphy-12_iwfufp.gif')
  gif7 = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1638812328/giphy-7_tmuykv.gif')

  gif8 = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1638812328/giphy-8_ulsynh.gif')

  gif9 = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1638812328/giphy-9_ablvem.gif')

  gif10 = loadImage('https://res.cloudinary.com/painkillerkid/image/upload/v1638812326/giphy-10_qq2qjl.gif')

  gif11 = loadImage ('https://res.cloudinary.com/painkillerkid/image/upload/v1638812159/giphy-11_krq8mk.gif')

  gif12 = loadImage ('https://res.cloudinary.com/painkillerkid/image/upload/v1638812160/giphy-18_jbuiva.gif')

  gif13 = loadImage ('https://res.cloudinary.com/painkillerkid/image/upload/v1638812326/giphy-13_u1mddo.gif')

  gif14 = loadImage ('https://res.cloudinary.com/painkillerkid/image/upload/v1638812159/giphy-14_ffkgkb.gif')
  
  gif15 = loadImage ('https://res.cloudinary.com/painkillerkid/image/upload/v1638812159/giphy-15_lcgrem.gif')

  cool1 = loadImage ('https://res.cloudinary.com/painkillerkid/image/upload/v1639249349/sketchbook_glgaj6.jpg')

  cool2 = loadImage ('https://res.cloudinary.com/painkillerkid/image/upload/v1639249349/sketchbook_1_no5ebl.jpg')

  cool3 = loadImage ('https://res.cloudinary.com/painkillerkid/image/upload/v1639250576/sketchbook_3_uxjs0b.jpg')

  cool4 = loadImage ('https://res.cloudinary.com/painkillerkid/image/upload/v1639250576/sketchbook_2_emvz74.jpg')

  cool5 = loadImage ('https://res.cloudinary.com/painkillerkid/image/upload/v1638925397/Arthur_All_The_Stuff_dragged_3_nl6tld.png')

  cool6 = loadImage ('https://res.cloudinary.com/painkillerkid/image/upload/v1638925397/Arthur_All_The_Stuff_dragged_5_lgwqbf.png')

  cool7 = loadImage ('https://res.cloudinary.com/painkillerkid/image/upload/v1638925397/Arthur_All_The_Stuff_dragged_4_awnzs6.png')

  cool8 = loadImage ('https://res.cloudinary.com/painkillerkid/image/upload/v1638925397/Arthur_All_The_Stuff_dragged_6_henbaj.png')

  cool9 = loadImage ('https://res.cloudinary.com/painkillerkid/image/upload/v1638925397/Arthur_All_The_Stuff_dragged_2_passqd.png')

  cool10 = loadImage ('https://res.cloudinary.com/painkillerkid/image/upload/v1638924380/Arthur_All_The_Stuff_dragged_dragged_5_nptcie.png')

  cool11 = loadImage ('https://res.cloudinary.com/painkillerkid/image/upload/v1639249772/notebook_4_obqx4w.jpg')

  cool12 = loadImage ('https://res.cloudinary.com/painkillerkid/image/upload/v1639249772/notebook_4_back_zlor1y.jpg')

  cool13 = loadImage ('https://res.cloudinary.com/painkillerkid/image/upload/v1638924380/Arthur_All_The_Stuff_dragged_dragged_8_qkxbss.png')

  cool14 = loadImage ('https://res.cloudinary.com/painkillerkid/image/upload/v1638924380/Arthur_All_The_Stuff_dragged_dragged_6_ie1uto.png')


  cool15 = loadImage ('https://res.cloudinary.com/painkillerkid/image/upload/v1638924380/Arthur_All_The_Stuff_dragged_dragged_r2hrsl.png')

  cool16 = loadImage ('https://res.cloudinary.com/painkillerkid/image/upload/v1638924380/Arthur_All_The_Stuff_dragged_dragged_4_isln6s.png')

  cool17 = loadImage ('https://res.cloudinary.com/painkillerkid/image/upload/v1638924380/Arthur_All_The_Stuff_dragged_dragged_3_szle9g.png')

  cool18 = loadImage ('https://res.cloudinary.com/painkillerkid/image/upload/v1639249349/notebook_wwsmvk.jpg')

  cool19 = loadImage ('https://res.cloudinary.com/painkillerkid/image/upload/v1639249349/notebook_1_jut4ri.jpg')

  cool20 = loadImage ('https://res.cloudinary.com/painkillerkid/image/upload/v1639249349/notebook_2_khujy1.jpg')

  cool21 = loadImage ('https://res.cloudinary.com/painkillerkid/image/upload/v1639249349/notebook_3_es9qhr.jpg')

  cool22 = loadImage ('https://res.cloudinary.com/painkillerkid/image/upload/v1638924380/Arthur_All_The_Stuff_dragged_dragged_7_tdisya.png')

  cool23 = loadImage ('https://res.cloudinary.com/painkillerkid/image/upload/v1639251090/sketchbook_5_jxw04l.jpg')

  cool24 = loadImage ('https://res.cloudinary.com/painkillerkid/image/upload/v1639251245/sketchbook_6_nryyns.jpg')

  cool25 = loadImage ('https://res.cloudinary.com/painkillerkid/image/upload/v1639255281/colorpencil_mvay9f.jpg')

  cool26 = loadImage ('https://res.cloudinary.com/painkillerkid/image/upload/v1639255281/colorpencil_1_yguumz.jpg')
  
  cool27 = loadImage ('https://res.cloudinary.com/painkillerkid/image/upload/v1639258201/color_thingy_front_fv9c4n.jpg')

  cool28 = loadImage ('https://res.cloudinary.com/painkillerkid/image/upload/v1639258201/color_thingy_back_ktmv52.jpg')

  cool29 = loadImage ('https://res.cloudinary.com/painkillerkid/image/upload/v1639258201/colorpencil_thing_u1qn2v.jpg')

  cool30 = loadImage ('https://res.cloudinary.com/painkillerkid/image/upload/v1639258201/colorpencil_thing_1_lgzqbk.jpg')

  const shirt1 = {
    front: shirt1front,
    back: shirt1back,
  }

  const shirt2 = {
    front: shirt2front,
    back: shirt2back,
  }
  
  const shirt7 = {
    front: shirt7front,
    back: shirt7back,
  }

  const shirt8 = {
    front: shirt8front,
    back: shirt8back,
  }
  
  const shirt5 = {
    front: shirt5front,
    back: shirt5back,
  }

  const shirt6 = {
    front: shirt6front,
    back: shirt6back,
  }

  const shirt3 = {
    front: shirt3front,
    back: shirt3back,

    
  }
  const shirt4 = {
    front: shirt4front,
    back: shirt4back,

    
  }
  
  const shirt9 = {
    front: shirt9front,
    back: shirt9back,

    
  }

  const shirt10 = {
    front: shirt10front,
    back: shirt10back,

    
  }

  const shirt11 = {
    front: shirt11front,
    back: shirt11front,

    
  }

  const shirt12 = {
    front: shirt12front,
    back: shirt12front,

    
  }

  const shirt13 = {
    front: shirt13front,
    back: shirt13back,

    
  }

  const shirt14 = {
    front: shirt14front,
    back: shirt14back,

    
  }

  const drawing1 = {
    front: drawing1front,
    back: drawing1back,

    
  }

  const drawing2 = {
    front: drawing2front,
    back: drawing2back,
  }

  const drawing3 = {
    front: drawing3back,
    back: drawing3front,
  }

  const drawing4 = {
    front: drawing4front,
    back: drawing4back,
  }

  const drawing5 = {
    front: drawing5front,
    back: drawing5back,
  }

  const drawing6 = {
    front: drawing6front,
    back: drawing6back,
  }

  const drawing7 = {
    front: drawing7front,
    back: drawing7back,
  }

  const drawing8 = {
    front: drawing8front,
    back: drawing8back,
  }

  const drawing9 = {
    front: drawing9front,
    back: drawing9back,
  }

  const drawing10 = {
    front: drawing10front,
    back: drawing10back,
  }

  const drawing11 = {
    front: drawing11front,
    back: drawing11back,
  }

  const drawing12 = {
    front: drawing12front,
    back: drawing12back,
  }
  
  const drawing13 = {
    front: drawing13front,
    back: drawing13back,
  }

 const drawing15 = {
    front: drawing15front,
    back: drawing15back,
  }

  const drawing14 = {
    front: drawing14front,
    back: drawing14back,
  }


  const doodle1 = {
    front: doodle1front,
    back: doodle1back,
  }
  const doodle2 = {
    front: doodle2front,
    back: doodle2back,
  }
  const doodle3 = {
    front: doodle3front,
    back: doodle3back,
  }
  const doodle4 = {
    front: doodle4front,
    back: doodle4back,
  }

  const doodle5 = {
    front: doodle5front,
    back: doodle5back,
  }

  const doodle6 = {
    front: doodle6front,
    back: doodle6back,
  }
 
  const doodle7 = {
    front: doodle7front,
    back: doodle7back,
  }

  const doodle8 = {
    front: doodle8front,
    back: doodle8back,
  }

  const doodle9 = {
    front: doodle9front,
    back: doodle9back,
  }

  const doodle10 = {
    front: doodle10front,
    back: doodle10back,
  }

  const doodle11 = {
    front: doodle11front,
    back: doodle11back,
  }

  const doodle12 = {
    front: doodle12front,
    back: doodle12back,
  }

  const doodle13 = {
    front: doodle13front,
    back: doodle13back,
  }

  const doodle14 = {
    front: doodle14front,
    back: doodle14back,
  }

  const doodle15 = {
    front: doodle15front,
    back: doodle15back,
  }


  const funpic1 = {
    front: funnypicture1,
    back: gif1,
  }
  const funpic2 = {
    front: funnypicture2,
    back: gif2,
  }
  const funpic3 = {
    front: funnypicture3,
    back: gif3,
  }
  const funpic4 = {
    front: funnypicture4,
    back: gif4,
  }
  const funpic5 = {
    front: funnypicture5,
    back: gif5,
  }
  const funpic6 = {
    front: funnypicture6,
    back: gif6,
  }
  const funpic7 = {
    front: funnypicture7,
    back: gif7,
  }
  const funpic8 = {
    front: funnypicture8,
    back: gif8,
  }
  const funpic9 = {
    front: funnypicture9,
    back: gif9,
  }
  const funpic10 = {
    front: funnypicture10,
    back: gif10,
  }

  const funpic11 = {
    front: funnypicture11,
    back: gif11,
  }

  const funpic12 = {
    front: funnypicture12,
    back: gif12,
  }

  const funpic13 = {
    front: funnypicture13,
    back: gif13,
  }

  const funpic14 = {
    front: funnypicture14,
    back: gif14,
  }

  const funpic15 = {
    front: funnypicture15,
    back: gif15,
  }

  const coolpic1 = {
    front: cool1,
    back: cool2,
  }

  const coolpic2 = {
    front: cool3,
    back: cool4,
  }

  const coolpic3 = {
    front: cool5,
    back: cool6,
  }

  const coolpic4 = {
    front: cool7,
    back: cool8,
  }

  const coolpic5 = {
    front: cool9,
    back: cool10,
  }

  const coolpic6 = {
    front: cool11,
    back: cool12,
  }

  const coolpic7 = {
    front: cool13,
    back: cool14,
  }

  const coolpic8 = {
    front: cool15,
    back: cool16,
  }

  const coolpic9 = {
    front: cool17,
    back: cool18,
  }

  const coolpic10 = {
    front: cool19,
    back: cool20,
  }

  const coolpic11 = {
    front: cool21,
    back: cool22,
  }

  const coolpic12 = {
    front: cool23,
    back: cool24,
  }

  const coolpic13 = {
    front: cool25,
    back: cool26,
  }

  const coolpic14 = {
    front: cool27,
    back: cool28,
  }

  const coolpic15 = {
    front: cool29,
    back: cool30,
  }



  shirts = [shirt1, shirt2, shirt3, shirt4, shirt5, shirt6, shirt7, shirt8, shirt9, shirt10, shirt11, shirt12, shirt13, shirt14]
   drawings = [drawing1, drawing2, drawing3, drawing4, drawing5, drawing6, drawing7, drawing8, drawing9, drawing10, drawing11, drawing12, drawing13, drawing14, drawing15]
   doodle = [doodle1,doodle2,doodle3,doodle4,doodle5,doodle6, doodle7, doodle8, doodle9, doodle10, doodle11, doodle12, doodle13, doodle14, doodle15]
   funstuff = [funpic1 , funpic2, funpic3, funpic4,funpic5, funpic6, funpic7, funpic8, funpic9, funpic10, funpic11, funpic12, funpic13, funpic14, funpic15]
  newstuff = [coolpic1,coolpic2,coolpic3,coolpic4,coolpic5,coolpic6, coolpic7, coolpic8, coolpic9, coolpic10, coolpic11, coolpic12,coolpic13, coolpic14, coolpic15]
}

function setup() {
  createCanvas(canvasWidth, canvasHeight, WEBGL);  
  shirtControlCircleData = Array.from({length: shirts.length}, (el, i) => {
    const x = canvasWidth/2 - controlCircleSize * 2
    const y = -canvasHeight/2 + controlCircleSize * 1.01 + (i + 1) * (controlCircleSize * 1.9)
    const col = [random(0, 255), random(0, 255), random(0, 255),]
    return {
        x,y, col
    }
})

drawingControlCircleData  = Array.from({length: drawings.length}, (el, i) => {
  const x = canvasWidth/2 - controlCircleSize * 2
  const y = -canvasHeight/2 + controlCircleSize * 1.01 + (i + 1) * (controlCircleSize * 1.8)
  const col = [random(0, 255), random(0, 255), random(0, 255),]
  return {
      x,y, col
  }
})

doodleControlCircleData  = Array.from({length: doodle.length}, (el, i) => {
  const x = canvasWidth/2 - controlCircleSize * 2
  const y = -canvasHeight/2 + controlCircleSize * 1.01 + (i + 1) * (controlCircleSize * 2.3)
  const col = [random(0, 255), random(0, 255), random(0, 255),]
  return {
      x,y, col
  }
})

funstuffControlCircleData  = Array.from({length: funstuff.length}, (el, i) => {
  const x = canvasWidth/2 - controlCircleSize * 2
  const y = -canvasHeight/2 + controlCircleSize * 1.01 + (i + 1) * (controlCircleSize * 1.5)
  const col = [random(0, 255), random(0, 255), random(0, 255),]
  return {
      x,y, col
  }
})

newstuffControlCircleData  = Array.from({length: newstuff.length}, (el, i) => {
  const x = canvasWidth/2 - controlCircleSize * 2
  const y = -canvasHeight/2 + controlCircleSize * 1.01 + (i + 1) * (controlCircleSize * 1.5)
  const col = [random(0, 255), random(0, 255), random(0, 255),]
  return {
      x,y, col
  }
})

toggleButtons = Array.from({ length: numToggles}, (el, i  ) => {
  const x = - ((numToggles - 1) * toggleButtonWidth) + (i * toggleButtonWidth * 1.5) - toggleButtonWidth/2
  const y = -canvasHeight/2 + 50
  const col = [random(255), random(255), random(255)]
  const hoverCol = [random(255), random(255), random(255)]
  return {
    x,
    y,
    col,
    hoverCol,
    width: toggleButtonWidth,
    height: toggleButtonHeight
  } 
})

}

function draw(){
  background(120, 120, 120, 100)
  rectMode(CENTER);
  drawToggleButtons()
  renderCurrentState(overallState)
}

function mousePressed(){
  mouseStart = {x: mouseX, y: mouseY}
  checkCircles(mouseX - canvasWidth/2, mouseY - canvasHeight/2)
  const clicked = (checkToggles(mouseX - canvasWidth/2, mouseY - canvasHeight/2))
  
  if(clicked){
    overallState = clicked
    }
  

}

function mouseDragged(){
    thetaY = map(Math.abs(mouseX - mouseStart.x), 0,  200, 0, TWO_PI)
    thetaX = map(Math.abs(mouseY - mouseStart.y), 0,  200, 0, TWO_PI)
    // console.log(theta)
}


const drawShirtControlCircles = () => {
  
  shirtControlCircleData.forEach((datum, idx) => {
          stroke(0)
          if(idx === counter){
              fill(datum.col)
          }else{
              noFill()
          }
          
          ellipse(datum.x, datum.y, 30)
      })
  
}

const drawDrawingControlCircles = () => {
  
  drawingControlCircleData.forEach((datum, idx) => {
          stroke(0)
          if(idx === counter){
              fill(datum.col)
          }else{
              noFill()
          }
          
          ellipse(datum.x, datum.y, 30)
      })
  
}

const drawDoodleControlCircles = () => {
  
  doodleControlCircleData.forEach((datum, idx) => {
          stroke(0)
          if(idx === counter){
              fill(datum.col)
          }else{
              noFill()
          }
          
          ellipse(datum.x, datum.y, 30)
      })
  
}


const drawfunstuffControlCircles = () => {
  
  funstuffControlCircleData.forEach((datum, idx) => {
          stroke(0)
          if(idx === counter){
              fill(datum.col)
          }else{
              noFill()
          }
          
          ellipse(datum.x, datum.y, 30)
      })
  
}

const drawnewstuffControlCircles = () => {
  
  newstuffControlCircleData.forEach((datum, idx) => {
          stroke(0)
          if(idx === counter){
              fill(datum.col)
          }else{
              noFill()
          }
          
          ellipse(datum.x, datum.y, 30)
      })
  
}

const drawToggleButtons = () => {
  toggleButtons.forEach(button => {
    fill(button.col)
    rect(button.x, button.y, button.width, button.height, 120)
  })
  
}



// const checkHover = () => {
//   if(mouseX > canvasWidth/4 && 
//       mouseX < canvasWidth/4 + canvasWidth/2 &&
//       mouseY > canvasHeight/4 && 
//       mouseY < canvasHeight/4 + canvasHeight/2){
//           return true
//       }else{
//           return false
//       }

// }

const checkCircles = (mX, mY) => {
  console.log(mX, mY)
  if(overallState === 5){
    shirtControlCircleData.forEach((circlePosition, idx) => {
      if(mX > circlePosition.x - controlCircleSize/2 &&
          mX < circlePosition.x + controlCircleSize/2 &&
          mY > circlePosition.y - controlCircleSize/2 &&
          mY < circlePosition.y + controlCircleSize/2){
              counter = idx
          }
  })
  }else if(overallState === 6){
    drawingControlCircleData.forEach((circlePosition, idx) => {
      if(mX > circlePosition.x - controlCircleSize/2 &&
          mX < circlePosition.x + controlCircleSize/2 &&
          mY > circlePosition.y - controlCircleSize/2 &&
          mY < circlePosition.y + controlCircleSize/2){
              counter = idx
          }
  })

}else if(overallState === 7){
  doodleControlCircleData.forEach((circlePosition, idx) => {
    if(mX > circlePosition.x - controlCircleSize/2 &&
        mX < circlePosition.x + controlCircleSize/2 &&
        mY > circlePosition.y - controlCircleSize/2 &&
        mY < circlePosition.y + controlCircleSize/2){
            counter = idx
        }
})

}else if(overallState === 8){
  funstuffControlCircleData.forEach((circlePosition, idx) => {
    if(mX > circlePosition.x - controlCircleSize/2 &&
        mX < circlePosition.x + controlCircleSize/2 &&
        mY > circlePosition.y - controlCircleSize/2 &&
        mY < circlePosition.y + controlCircleSize/2){
            counter = idx
        }
})

}else if(overallState === 9){
  newstuffControlCircleData.forEach((circlePosition, idx) => {
    if(mX > circlePosition.x - controlCircleSize/2 &&
        mX < circlePosition.x + controlCircleSize/2 &&
        mY > circlePosition.y - controlCircleSize/2 &&
        mY < circlePosition.y + controlCircleSize/2){
            counter = idx
        }
})

  }
}

const checkToggles = (mX, mY) => {
  console.log(mX, mY)
  const toggleChecks = toggleButtons.map((toggle, idx) => {
      if(mX > toggle.x  - toggleButtonWidth/2&&
          mX < toggle.x + toggleButtonWidth/2 &&
          mY > toggle.y - + toggleButtonHeight/2 &&
          mY < toggle.y + toggleButtonHeight/2){
              return idx + 1
          }else{
            return false
          }
  })
  const found = toggleChecks.filter((el, i) => el > 0)
  if(found){
    return found[0] 
  }
}


function drawBackgroundBox(size, xOff, yOff){
  push()
    translate(xOff - imgSize/4, yOff,0)
    rotateX(-thetaX)
    rotateY(-thetaY)
    fill(130)
    box(size,size,1)
  pop()
}


function drawShirtSide(img, size, xOff, yOff, side){
  push()
    noStroke()
    translate(xOff, yOff, side)
    translate(xOff,yOff, -side)
    rotateY(thetaY)
    rotateX(thetaX)
    translate(xOff, yOff, side)
    // console.log(img)
    texture(img)
    rect(0,0, size, size)
  pop()
}




function drawGridShirtSide(img, size, xOff, yOff, side){
  push()
    noStroke()
    translate(-size/2 + xOff, -size/2 + yOff, side)
    // translate(size/2,size/2, -side)
    rotateY(thetaY)
    rotateX(thetaX)
    // translate(-size/2, -size/2, side)
    
    texture(img)
    rect(0,0, size, size)
  pop()
}



const renderCurrentState = (overallState) => {
  // console.log(overallState)
  switch(overallState){
    case 1:
      drawGrid()
      return
      case 2:
        drawfunGrid()
        return
        case 3:
          drawdoodleGrid()
          return
          case 4:
            drawnewstuffGrid()
            return
    case 5: 
      drawCloseUp()
      drawShirtControlCircles()
      return
      case 6:
        showDrawings()
        drawDrawingControlCircles()
        return
        case 7:
          showDoodle()
          drawDoodleControlCircles()
          return
          case 8:
            showFunStuff()
            drawfunstuffControlCircles()
            return

            case 9:
              shownewstuff()
              drawnewstuffControlCircles()
              return
    default : 
      return
  }
}

const drawGrid = () => {

    // rotateX(PI)
  let count = 0
  for(let i = 0; i< numCols; i++){
    for(let j = 0; j < numRows; j++){
      // drawBackgroundBox(imgSize, (i * imgSize) - canvasWidth/4, -100)

      drawGridShirtSide(shirts[count].front, gridImageSize, 
                      (i * gridImageSize) - canvasWidth/6, 
                      (j * gridImageSize) - canvasHeight/6 + 100, 2)
      drawGridShirtSide(shirts[count].back, gridImageSize,
                      (i * gridImageSize) - canvasWidth/6,  
                      (j * gridImageSize) - canvasHeight/6 + 100, -2)
      //shirtCount++
      count++
    }

  }
}

const drawfunGrid = () => {

  // rotateX(PI)
let count = 0
for(let i = 0; i< numCols; i++){
  for(let j = 0; j < numRows; j++){
    // drawBackgroundBox(imgSize, (i * imgSize) - canvasWidth/4, -100)

    drawGridShirtSide(drawings[count].front, gridImageSize, 
                    (i * gridImageSize) - canvasWidth/12, 
                    (j * gridImageSize) - canvasHeight/9 + 100, 2)
    drawGridShirtSide(drawings[count].back, gridImageSize,
                    (i * gridImageSize) - canvasWidth/3,  
                    (j * gridImageSize) - canvasHeight/3 + 100, -1)
    //shirtCount++
    count++
  }

}
}
const drawdoodleGrid = () => {

  // rotateX(PI)
let count = 0
for(let i = 0; i< numCols; i++){
  for(let j = 0; j < numRows; j++){
    // drawBackgroundBox(imgSize, (i * imgSize) - canvasWidth/4, -100)

    drawGridShirtSide(doodle[count].front, gridImageSize, 
                    (i * gridImageSize) - canvasWidth/6, 
                    (j * gridImageSize) - canvasHeight/6 + 100, 1)
    drawGridShirtSide(doodle[count].back, gridImageSize,
                    (i * gridImageSize) - canvasWidth/6,  
                    (j * gridImageSize) - canvasHeight/6 + 100, -1)
    //shirtCount++
    count++
  }

}
}

const drawnewstuffGrid = () => {

  // rotateX(PI)
let count = 0
for(let i = 0; i< numCols; i++){
  for(let j = 0; j < numRows; j++){
    // drawBackgroundBox(imgSize, (i * imgSize) - canvasWidth/4, -100)

    drawGridShirtSide(newstuff[count].front, gridImageSize, 
                    (i * gridImageSize) - canvasWidth/6, 
                    (j * gridImageSize) - canvasHeight/6 + 100, 2)
    drawGridShirtSide(newstuff[count].back, gridImageSize,
                    (i * gridImageSize) - canvasWidth/6,  
                    (j * gridImageSize) - canvasHeight/6 + 100, -2)
    //shirtCount++
    count++
  }

}
}

const drawCloseUp = () => {
  console.log(counter, shirts)
  console.log(shirts[counter])
  drawShirtSide(shirts[counter].front, imgSize, 0, 0, 1)
  drawShirtSide(shirts[counter].back, imgSize, 0, 0 , -1)
}

const showDrawings = () => {
  console.log(counter, drawings)
  console.log(drawings[counter])
  drawShirtSide(drawings[counter].front, imgSize, 0, 0, 1)
  drawShirtSide(drawings[counter].back, imgSize, 0, 0 , -1)
}

const showDoodle = () => {
  console.log(counter, doodle)
  console.log(doodle[counter])
  drawShirtSide(doodle[counter].front, imgSize, 0, 0, 1)
  drawShirtSide(doodle[counter].back, imgSize, 0, 0 , -1)
}

const showFunStuff = () => {
  console.log(counter, funstuff)
  console.log(funstuff[counter])
  drawShirtSide(funstuff[counter].front, imgSize, 0, 0, 1)
  drawShirtSide(funstuff[counter].back, imgSize, 0, 0 , -1)
}

const shownewstuff = () => {
  console.log(counter, newstuff)
  console.log(newstuff[counter])
  drawShirtSide(newstuff[counter].front, imgSize, 0, 0, 1)
  drawShirtSide(newstuff[counter].back, imgSize, 0, 0 , -1)
}