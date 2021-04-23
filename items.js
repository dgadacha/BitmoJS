function items() {
       const beard = json.traits.male.cm.categories[0].options;
       const brows = json.traits.male.cm.categories[1].options;
       const cheek_details = json.traits.male.cm.categories[2].options;
       const ear = json.traits.male.cm.categories[3].options;
       const eye = json.traits.male.cm.categories[4].options;
       const eyelash = json.traits.male.cm.categories[5].options;
       const eye_details = json.traits.male.cm.categories[6].options;
       const face_lines = json.traits.male.cm.categories[7].options;
       const glasses = json.traits.male.cm.categories[8].options;
       const hair = json.traits.male.cm.categories[9].options;
       const hat = json.traits.male.cm.categories[10].options;
       const jaw = json.traits.male.cm.categories[11].options;
       const mouth = json.traits.male.cm.categories[12].options;
       const nose = json.traits.male.cm.categories[13].options;
       const beard_tone = json.traits.male.cm.categories[14].options;
       const blush_tone = json.traits.male.cm.categories[15].options;
       const brow_tone = json.traits.male.cm.categories[16].options;
       const eyeshadow_tone = json.traits.male.cm.categories[17].options;
       const hair_tone = json.traits.male.cm.categories[18].options;
       const hair_treatment_tone = json.traits.male.cm.categories[19].options;
       const lipstick_tone = json.traits.male.cm.categories[20].options;
       const pupil_tone = json.traits.male.cm.categories[21].options;
       const skin_tone = json.traits.male.cm.categories[22].options;
       const body = json.traits.male.cm.categories[23].options;
       const face_proportion = json.traits.male.cm.categories[24].options;
       const eye_spacing = json.traits.male.cm.categories[25].options;
       const eye_size = json.traits.male.cm.categories[26].options;

       const outfits = json.outfits.male.brands;
       brands = [];
       brands_outfits = [];
       allOutfits = [];

       outfits.forEach(outfit => {
              brands.push(outfit);
       })

       brands.forEach(brand => {
              brands_outfits.push(brand.outfits);
       })

       for(var i=0; i<brands_outfits.length; i++) {
              brands_outfits[i].forEach(b => {
                     allOutfits.push(b.id);
              })
       }

       elements = [
              'beard',
              'brows',
              'cheek_details',
              'ear',
              'eye',
              'eyelash',
              'eye_details',
              'face_lines',
              'glasses',
              'hair',
              'hat',
              'jaw',
              'mouth',
              'nose',
              'beard_tone',
              'blush_tone',
              'brow_tone',
              'eyeshadow_tone',
              'hair_tone',
              'hair_treatment_tone',
              'lipstick_tone',
              'pupil_tone',
              'skin_tone',
              'body',
              'face_proportion',
              'eye_spacing',
              'eye_size'
       ];

       elements.forEach(i => {
              apply(i, eval(i))
       });

       allOutfits.forEach(o => {
              applyOutfit(o);
       })

}

function apply(name,item) {
       head_bitmoji = {}
       head_bitmoji = Object.assign(head_bitmoji, bitmoji);

       if(name == 'brows') name = 'brow';

       $( ".items").append('<h2 id="category_'+name+'" onclick="categorie(\''+name+'\')">- '+name+'</h2><div id="'+name+'"></div>');

       item.forEach(e => {
              str = 'head_bitmoji.'+name+'='+e.value;
              eval(str);
              if (name != 'body') {
                     src = preview(head_bitmoji, 'head');
              } else {
                     src = preview(head_bitmoji, 'body');
              }
              $( "#"+name).append('<img id="selection" onclick="setElement(\''+name+'\','+e.value+')" src="'+src+'">');
       })
}

function applyOutfit(item) {
       outfit_bitmoji = {}
       outfit_bitmoji = Object.assign(outfit_bitmoji, bitmoji);

       str = 'outfit_bitmoji.outfit='+item;
       eval(str);
       src = preview(outfit_bitmoji, 'body');

       $( "#outfit").append('<img id="selection" onclick="setElement(\'outfit\','+item+')" src="'+src+'">');
}