var undefined = 'уточните';
var rub = 'руб';
var grn = 'грн';

//курсы покупки валют и цены в рублях(меньшее, курс покупки)
var rubPerEuro = 71;	// 75; 46.0;
var rubPerUsd = 62;		// 65; 34.0;
var rubPerHryvnia = 2.4;	// 2.2; 2.8;
var rubGuidePerDay = 4000;	// 2000;;
var rubGuidePerDayAdd = rubGuidePerDay / 20;
var rubFoodPerDay = 400;	// 300;;

function rubFromEuro(euroSum)
{
	if (isNaN(euroSum) || euroSum == 0) return 0;
	var rez = euroSum * rubPerEuro;
	return rez;
}

function euroFromRub(rubSum)
{
	if (isNaN(rubSum) || rubSum == 0) return 0;
	var rez = rubSum / rubPerEuro;
	return rez;
}

function usdFromRub(rubSum)
{
	if (isNaN(rubSum) || rubSum == 0) return 0;
	var rez = rubSum / rubPerUsd;
	return rez;
}

function euroTextFromRub(rubSum)
{
	if (isNaN(rubSum) || rubSum == 0) return undefined;
	var rez = '&euro;' + euroFromRub(rubSum).toPrecision(2);
	return rez;
}

function usdTextFromRub(rubSum)
{
	if (isNaN(rubSum) || rubSum == 0) return undefined;
	var rez = '$' + usdFromRub(rubSum).toPrecision(2);
	return rez;
}

function euroTextFromRubBigSum(rubSum)
{
	if (isNaN(rubSum) || rubSum == 0) return undefined;
	var rez = '&euro;' + accounting.formatNumber(euroFromRub(rubSum), 0, "", ".");
	return rez;
}

function usdTextFromRubBigSum(rubSum)
{
	if (isNaN(rubSum) || rubSum == 0) return undefined;
	var rez = '$' + accounting.formatNumber(usdFromRub(rubSum), 0, "", ".");
	return rez;
}

function hryvniaFromRub(rubSum)
{
	if (isNaN(rubSum) || rubSum == 0) return 0;
	var rez = rubSum / rubPerHryvnia;
	return rez;
}

function hryvniaTextFromRub(rubSum)
{
	if (isNaN(rubSum) || rubSum == 0) return undefined;
	var rez = accounting.formatNumber(hryvniaFromRub(rubSum), 0, "", ",") + grn;
	return rez;
}

function valutaText(rubSum)
{
	if (isNaN(rubSum) || rubSum == 0) return undefined;
	var rez = rubSum + rub + '(' + hryvniaTextFromRub(rubSum) + '/' + euroTextFromRub(rubSum) + '/' + usdTextFromRub(rubSum) + ')';
	return rez;
}

function valutaTextBigSum(rubSum)
{
	if (isNaN(rubSum) || rubSum == 0) return undefined;
	var rez = rubSum + rub + '(' + hryvniaTextFromRub(rubSum) + '/' + euroTextFromRubBigSum(rubSum) + '/' + usdTextFromRubBigSum(rubSum) + ')';
	return rez;
}
