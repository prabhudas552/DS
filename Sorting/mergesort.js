function MergeSort(arr){
	var arr = [];
	var merge = function(l,m,r)
	{
		int n1,n2;
		n1 = m-l+1;
		n2 = r-m;
		var left = new Array(n1);
		var right = new Array(n2);
		for(var i=0;i<n1;i++)
		{
			left[i] = arr[l+i];
		}
		for(var i=0;i<n2;i++)
		{
			right[i] = arr[m+1+i];
		}
		var l,r,k;
		l=0;
		r=0;
		k=l;
		while(l<n1 && r<n2)
		{
			if(left[l] < right[r])
			{
				arr[k] = left[l];
				l++;
			}else if(left[l] > right[r]){
				arr[k] = right[r];
				r++;
			}else{
				arr[k] = left[l];
				l++;
				r++;
			}
			k++;
		}
		while(l<n1)
		{
			arr[k++] = left[l++];
		}
		while(r<n2)
		{
			arr[k++] = right[r++];
		}
	}
	var sortUtil = function(l,r)
	{
		if(l<r)
		{
			var mid = l + (r-l)/2;
			sortUtil(l,m);
			sortUtil(m+1,r);
			merge(l,m,r);
		}
	}

	this.sort = function(a)
	{
		arr = a;
		sortUtil(0,arr.length);
		return arr;
	}
}