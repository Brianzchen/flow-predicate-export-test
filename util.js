// @flow
export const isString = (value: string | number): boolean %checks => {
  return typeof value === 'string';
}
