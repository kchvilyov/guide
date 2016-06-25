function getNumInRowMax(length)
{
	return getNumInRowMax3(length, 8, 3);
}
function getNumInRowMax2(length, numInRowMax)
{
	if (isNaN(numInRowMax) || numInRowMax < 1) var numInRowMax = 8;
	if (length < 1) return 0;
	if (length <= numInRowMax) return length;
	var numInRowBest = numInRowMax;
	var maxRest = 0;
	for(var numInRow = numInRowMax; numInRow > 2; numInRow--) {
		var rest = length%numInRow;
//alert("numInRow:"+numInRow+ " numInRowBest:"+numInRowBest+ " rest:"+rest+ " maxRest:"+maxRest);
		if (rest == 0) return numInRow;
		if(rest > maxRest) {
			numInRowBest = numInRow;
			maxRest = rest;
		}
	}
	return numInRowBest;
}
function getNumInRowMax3(length, numInRowMax, numInRowMin)
{
	if (isNaN(numInRowMin) || numInRowMin < 3) numInRowMin = 3;
	if (isNaN(numInRowMax) || numInRowMax < numInRowMin) numInRowMax = 8;
	if (length < 1) return 0;
	if (length <= numInRowMax) return length;
	var numInRowBest = numInRowMax;
	var maxRest = 0;
	for(var numInRow = numInRowMax; numInRow > numInRowMin; numInRow--) {
		var rest = length%numInRow;
//alert("numInRow:"+numInRow+ " numInRowBest:"+numInRowBest+ " rest:"+rest+ " maxRest:"+maxRest);
		if (rest == 0) return numInRow;
		if(rest > maxRest) {
			numInRowBest = numInRow;
			maxRest = rest;
		}
	}
	return numInRowBest;
}