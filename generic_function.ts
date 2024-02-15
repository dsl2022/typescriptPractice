// function map(items, mapFunction){
//     const result = [];
//     for(let item of items){
//         result.push(mapFunction(item))
//     }
//     return result;
// }

interface Person { name: string; age: number;  }
const persons: Person[] = [{ name: 'John', age: 35 }];

function map<TElement, TResult>(
  items: TElement[],
  mappingFunction: (item: TElement) => TResult
): TResult[] {
  /* ... */
  const results:TResult[] = []
  for(let item of items)results.push(mappingFunction(item))
  return []
}

const names = map(persons, person => person.name);


function reduce<TElement,TResult>(
    array:TElement[],
    reducer:(result:TResult, el:TElement)=>TResult,
    initialResult:TResult
):TResult{
    let result = initialResult;
    for(const element of array){
        result = reducer(result, element)
    }
    return result
}

const total = reduce<number, number>([1,2,3,4,5],(sum, el)=>sum+el,0);

function zip<T1,T2>(
    array1:T1[],
    array2:T2[]
):[T1,T2][]{
    const result:[T1,T2][]=[]
    const length:number = Math.min(array1.length,array2.length);
    for(let i=0;i<length;i++){
        result.push([array1[i],array2[i]])
    }
    return result
}

const num = [1,2,3];
const strs = ["one","two","three"];
const zipped = zip(num,strs);