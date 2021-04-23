
function init() {
	localStorage.clear();

	bitmoji = new Bitmoji();

	
	bitmoji.scale = 1;
	bitmoji.gender = 1;
	bitmoji.style = 5;
	bitmoji.rotation = 0; // 7 sur la map ?

	// tone = decimal color

	bitmoji.skin_tone = 16764057;
	bitmoji.hair_tone = 2566954;
	bitmoji.hair = 1303;
	bitmoji.jaw = 1389;
	bitmoji.brow = 1538;
	bitmoji.eye = 1610;
	bitmoji.pupil = 2152;
	bitmoji.pupil_tone = 8026746;
	bitmoji.nose = 1436;
	bitmoji.mouth = 2337;
	bitmoji.ear = 1424;
	bitmoji.body = 0;
	bitmoji.breast = 0;
	bitmoji.face_proportion = 1;
	bitmoji.eye_spacing = 0;
	bitmoji.eye_size = 0;
	bitmoji.outfit = 1018386;


	preview(bitmoji, 'head');
}

function preview(bitmoji, type) {
	var base_url = 'https://preview.bitmoji.com/avatar-builder-v3/preview/body?';
	var base_url_head = 'https://preview.bitmoji.com/avatar-builder-v3/preview/head?';

	var scale = 'scale='+bitmoji.scale;
	var gender = 'gender='+bitmoji.gender;
	var style = 'style='+bitmoji.style;
	var rotation = 'rotation='+bitmoji.rotation;
	var beard = 'beard='+bitmoji.beard;
	var brow = 'brow='+bitmoji.brow;
	var cheek_details = 'cheek_details='+bitmoji.cheek_details;
	var ear = 'ear='+bitmoji.ear;
	var eye = 'eye='+bitmoji.eye;
	var eyelash = 'eyelash='+bitmoji.eyelash;
	var eye_details = 'eye_details='+bitmoji.eye_details;
	var face_lines = 'face_lines='+bitmoji.face_lines;
	var glasses = 'glasses='+bitmoji.glasses;
	var hair = 'hair='+bitmoji.hair;
	var hat = 'hat='+bitmoji.hat;
	var jaw = 'jaw='+bitmoji.jaw;
	var mouth = 'mouth='+bitmoji.mouth;
	var nose = 'nose='+bitmoji.nose;
	var beard_tone = 'beard_tone='+bitmoji.beard_tone;
	var blush_tone = 'blush_tone='+bitmoji.blush_tone;
	var brow_tone = 'brow_tone='+bitmoji.brow_tone;
	var eyeshadow_tone = 'eyeshadow_tone='+bitmoji.eyeshadow_tone;
	var hair_tone = 'hair_tone='+bitmoji.hair_tone;
	var hair_treatment_tone = 'hair_treatment_tone='+bitmoji.hair_treatment_tone;
	var lipstick_tone = 'lipstick_tone='+bitmoji.lipstick_tone;
	var pupil_tone = 'pupil_tone='+bitmoji.pupil_tone;
	var skin_tone = 'skin_tone='+bitmoji.skin_tone;
	var body = 'body='+bitmoji.body;
	var face_proportion = 'face_proportion='+bitmoji.face_proportion;
	var eye_spacing = 'eye_spacing='+bitmoji.eye_spacing;
	var eye_size = 'eye_size='+bitmoji.eye_size;
	var outfit = 'outfit='+bitmoji.outfit;

	var elements = [scale,gender,style,rotation,beard,brow,cheek_details,ear,eye,eyelash,eye_details,face_lines,glasses,hair,hat,jaw,mouth,nose,beard_tone,blush_tone,brow_tone,eyeshadow_tone,hair_tone,hair_treatment_tone,lipstick_tone,pupil_tone,skin_tone,body,face_proportion,eye_spacing,eye_size,outfit]
	var elementsNotNull = [];

	elements.forEach(e => {
		if (e.split('=')[1] != 'undefined') { elementsNotNull.push(e); }
	})

	var url = base_url+elementsNotNull.join('&');
	var url_head = base_url_head+elementsNotNull.join('&');

	document.getElementById("preview").src = url;
	document.getElementById("preview_head").src = url_head;

	if (type == 'body') return url;
	if (type == 'head') return url_head;
}

function setElement(element, id) {
	eval('bitmoji.'+element+' = '+id);
	preview(bitmoji);
}

class Bitmoji {
	constructor(
		scale,gender,style,rotation,beard,brow,cheek_details,ear,eye,eyelash,eye_details,face_lines,glasses,hair,hat,jaw,mouth,nose,
		beard_tone,blush_tone,brow_tone,eyeshadow_tone,hair_tone,hair_treatment_tone,lipstick_tone,pupil_tone,skin_tone,body,
		face_proportion,eye_spacing,eye_size,outfit) {

		this.scale = scale;
		this.gender = gender;
		this.style = style;
		this.rotation = rotation;
		this.beard = beard;
		this.brow = brow;
		this.cheek_details = cheek_details;
		this.ear = ear;
		this.eye = eye;
		this.eyelash = eyelash;
		this.eye_details = eye_details;
		this.face_lines = face_lines;
		this.glasses = glasses;
		this.hair = hair;
		this.hat = hat;
		this.jaw = jaw;
		this.mouth = mouth;
		this.nose = nose;
		this.beard_tone = beard_tone;
		this.blush_tone = blush_tone;
		this.brow_tone = brow_tone;
		this.eyeshadow_tone = eyeshadow_tone;
		this.hair_tone = hair_tone;
		this.hair_treatment_tone = hair_treatment_tone;
		this.lipstick_tone = lipstick_tone;
		this.pupil_tone = pupil_tone;
		this.skin_tone = skin_tone;
		this.body = body;
		this.face_proportion = face_proportion;
		this.eye_spacing = eye_spacing;
		this.eye_size = eye_size;
		this.outfit = outfit;
	}
}