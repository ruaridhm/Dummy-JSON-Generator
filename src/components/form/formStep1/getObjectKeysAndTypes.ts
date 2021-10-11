export const getObjectKeysAndTypes = (data: string | object) => {
  console.log('data', data);
  let parsedData = data;
  if (typeof data === 'string') {
    parsedData = JSON.parse(data);
  }

  console.log('parsedData', parsedData);
  const ans: any[] = [];

  for (const [key, type] of Object.entries(parsedData)) {
    //check if object is array
    if (typeof type === 'object' && Array.isArray(type)) {
      const arr: { title: string; type: string }[] = [];
      type.forEach((item) => {
        arr.push({ title: item, type: typeof item });
      });

      ans.push({ title: key, type: 'array', value: arr });
      //check if object is object
    } else if (typeof type === 'object') {
      const objKey = key;
      ans.push({
        title: objKey,
        type: 'object',
        value: getObjectKeysAndTypes(type),
      });
      //push to array for any other type
    } else if (typeof type === 'string') {
      ans.push({ title: key, type: typeof type });
    } else if (typeof type === 'number') {
      ans.push({ title: key, type: typeof type });
      // } else if (typeof value === null) {
    } else {
      ans.push({ title: key, type: typeof type });
    }
  }
  return ans;
};
