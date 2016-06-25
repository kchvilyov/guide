var undefined = 'уточните';
var rub = 'руб';
var grn = 'грн';

//старые курсы покупки валют и цены в гривнах(меньшее, курс покупки)
var hryvniaPerEuro = 10.4; //10.06;
hryvniaPerUsd = 8.12; //8.06;
hryvniaPerRub = 0.25; //0.26;
var guidePerDay = 390;
var guidePerDayAdd = 19;
var foodPerDay = 69;

function hryvniaFromEuro(euroSum)
{
	if (isNaN(euroSum) || euroSum == 0) return 0;
	var rez = euroSum * hryvniaPerEuro;
	return rez;
}

function euroFromHryvnia(hryvniaSum)
{
	if (isNaN(hryvniaSum) || hryvniaSum == 0) return 0;
	var rez = hryvniaSum / hryvniaPerEuro;
	return rez;
}

function usdFromHryvnia(hryvniaSum)
{
	if (isNaN(hryvniaSum) || hryvniaSum == 0) return 0;
	var rez = hryvniaSum / hryvniaPerUsd;
	return rez;
}

function euroTextFromHryvnia(hryvniaSum)
{
	if (isNaN(hryvniaSum) || hryvniaSum == 0) return undefined;
	var rez = '&euro;' + euroFromHryvnia(hryvniaSum).toPrecision(2);
	return rez;
}

function usdTextFromHryvnia(hryvniaSum)
{
	if (isNaN(hryvniaSum) || hryvniaSum == 0) return undefined;
	var rez = '$' + usdFromHryvnia(hryvniaSum).toPrecision(2);
	return rez;
}

function euroTextFromHryvniaBigSum(hryvniaSum)
{
	if (isNaN(hryvniaSum) || hryvniaSum == 0) return undefined;
	var rez = '&euro;' + accounting.formatNumber(euroFromHryvnia(hryvniaSum), 0, "", ".");
	return rez;
}

function usdTextFromHryvniaBigSum(hryvniaSum)
{
	if (isNaN(hryvniaSum) || hryvniaSum == 0) return undefined;
	var rez = '$' + accounting.formatNumber(usdFromHryvnia(hryvniaSum), 0, "", ".");
	return rez;
}

function rubFromHryvnia(hryvniaSum)
{
	if (isNaN(hryvniaSum) || hryvniaSum == 0) return 0;
	var rez = hryvniaSum / hryvniaPerRub;
	return rez;
}

function rubTextFromHryvnia(hryvniaSum)
{
	if (isNaN(hryvniaSum) || hryvniaSum == 0) return undefined;
	//var rez = accounting.formatNumber(rubFromHryvnia(hryvniaSum), 0, "'", ",") + rub;
	var rez = accounting.formatNumber(rubFromHryvnia(hryvniaSum), 0, "", ",") + rub;
	return rez;
}

function valutaText(hryvniaSum)
{
	if (isNaN(hryvniaSum) || hryvniaSum == 0) return undefined;
	var rez = hryvniaSum + grn + '(' + rubTextFromHryvnia(hryvniaSum) + '/' + euroTextFromHryvnia(hryvniaSum) + '/' + usdTextFromHryvnia(hryvniaSum) + ')';
	return rez;
}

function valutaTextBigSum(hryvniaSum)
{
	if (isNaN(hryvniaSum) || hryvniaSum == 0) return undefined;
	var rez = hryvniaSum + grn + '(' + rubTextFromHryvnia(hryvniaSum) + '/' + euroTextFromHryvniaBigSum(hryvniaSum) + '/' + usdTextFromHryvniaBigSum(hryvniaSum) + ')';
	return rez;
}
