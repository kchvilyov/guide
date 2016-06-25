var deliveryInSimferopolCost;
var oneWayPrice;
var backWayPrice;
var hardWayPrice;

function oneWayCost(length)
{
	if (isNaN(length) || length <= 0) return deliveryInSimferopolCost;
	var cost = length*oneWayPrice + deliveryInSimferopolCost;
	return cost;
}

function bouthWaysCost(length)
{
	var cost = oneWayCost(length);
	if (isNaN(length) || length <= 0) return oneWayCost;
	cost += length*backWayPrice;
	return cost;
}

function textLengthCots(length, delimiter)
{
	if (null == delimiter) delimiter = '</td><td>';
	var rez = length + delimiter + valutaTextBigSum(oneWayCost(length)) + delimiter + valutaTextBigSum(bouthWaysCost(length)) + delimiter + valutaTextBigSum(bouthWaysCost(length) + guidePerDay);
	return rez;
}

oneWayPrice = 5;
backWayPrice = 2.5;
deliveryInSimferopolCost = 19;
hardWayPrice = 190;
