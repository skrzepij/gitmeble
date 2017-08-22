let test = ( x?: any ) : void => {
  let sentence: string = `Welcome in the TypeScript World.
    This is one variable multiline string. ${ x }`;

  console.warn(sentence);
}


export { test }