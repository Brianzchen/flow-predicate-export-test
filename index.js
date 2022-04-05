// @flow
import { isString } from './util';

const a = (b: string | number) => {
  if (isString(b)) {
    b.toLowerCase();
  } else {
    b.toFixed(2);
  }
};
