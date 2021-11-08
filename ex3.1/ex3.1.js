/*
1. You can't selectively load only the pieces you need with require but with import,
you can selectively load only the pieces you need, which can save memory.

Loading is synchronous(step by step) for require on the other hand import can be asynchronous
(without waiting for previous import) so it can perform a little better than require.
*/
export const name = () => {
    return "nasim";
  };
  
export const address = () => {
return "maghar , Israel";
};

export const hobbies = () => {
return "every thing has to do with sport";
};