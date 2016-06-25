var deliveryInSimferopolCost = 50;
var oneWayPrice = 20;
var backWayPrice = 10;
var hardWayPrice = 1000;	// 600;

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
	var rez = length + delimiter + valutaTextBigSum(oneWayCost(length)) + delimiter + valutaTextBigSum(bouthWaysCost(length)) + delimiter + valutaTextBigSum(bouthWaysCost(length) + rubGuidePerDay);
	return rez;
}
