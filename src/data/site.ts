export const business = {
	name: 'リサイクルセンター',
	nameEn: 'Recycle Center',
	title: 'リサイクルセンター｜北区豊島の不用品回収・引越し・中古販売',
	description:
		'東京都北区豊島のリサイクルセンター。家具・家電の不用品回収、引越し、片付け、中古品の店頭販売をしています。王子神谷駅から徒歩14分、王子駅から徒歩22分。毎日8:00–22:00、定休日なし。事前連絡で夜間も対応します。',
	slogan: 'まだ、使える。',
	phone: '08079691804',
	phoneDisplay: '080-7969-1804',
	phoneE164: '+81-80-7969-1804',
	email: 'recyclecenterjapan@gmail.com',
	postalCode: '114-0003',
	region: '東京都',
	locality: '北区',
	streetAddress: '豊島6丁目7-9 クラン豊島A 1階',
	addressLine: '東京都北区豊島6丁目7-9',
	building: 'クラン豊島A 1階',
	areaServed: '東京都北区',
	hours: '08:00',
	hoursClose: '22:00',
	hoursDisplay: '8:00–22:00',
	stations: [
		{ name: '王子神谷駅', walk: '徒歩14分' },
		{ name: '王子駅', walk: '徒歩22分' },
	],
	sns: {
		line: 'https://line.me/R/ti/p/@recyclecenterjapan',
		lineId: 'recyclecenterjapan',
		instagram: 'https://www.instagram.com/recyclecenterjapan/',
		instagramId: 'recyclecenterjapan',
		facebook: 'https://www.facebook.com/recyclecenter',
		facebookId: 'recyclecenter',
	},
} as const;

export const services = [
	{
		id: 'collect',
		num: '01',
		title: '不用品回収',
		text: '家具、家電、日用品を回収します。一台から、お部屋まるごとまで。家具の出張買取もご相談ください。',
	},
	{
		id: 'move',
		num: '02',
		title: '引越し',
		text: '荷物の運び出しと搬入に対応します。大きな家具や家電の移動も、お電話でどうぞ。',
	},
	{
		id: 'tidy',
		num: '03',
		title: '片付け',
		text: 'お部屋の片付けと、不用品の仕分け。引越しの前後など、まとまった整理もお受けします。',
	},
	{
		id: 'shop',
		num: '04',
		title: '中古品販売',
		text: '冷蔵庫、洗濯機、電子レンジ、炊飯器、家具など。店頭で状態をご確認いただけます。在庫はその日によって変わります。',
	},
] as const;

export const faqs = [
	{
		question: '営業時間を教えてください。',
		answer: '毎日 8:00から22:00です。平日・土日祝ともに同じ時間で、定休日はありません。',
	},
	{
		question: '夜間の対応はできますか。',
		answer: '事前にご連絡いただければ、営業時間外の夜間も対応できます。',
	},
	{
		question: '何を回収できますか。',
		answer: '家具、家電、日用品を回収します。一台のご相談から、お部屋まるごとの片付けまで。家具の出張買取もご相談ください。',
	},
	{
		question: '引越しや片付けもお願いできますか。',
		answer: '荷物の運び出しと搬入、お部屋の片付けと不用品の仕分けに対応します。内容はお電話、LINE、メールでご相談ください。',
	},
	{
		question: '中古品はどこで見られますか。',
		answer:
			'東京都北区豊島6丁目7-9 クラン豊島A 1階の店舗でご覧いただけます。冷蔵庫、洗濯機、電子レンジ、炊飯器、家具などを置いています。在庫は日によって変わります。',
	},
	{
		question: '最寄り駅はどこですか。',
		answer: '王子神谷駅から徒歩14分、王子駅から徒歩22分です。',
	},
] as const;

export const mapQuery = `〒${business.postalCode} ${business.region}${business.locality}${business.streetAddress}`;
