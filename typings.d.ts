/// <reference types="typed-graphql" />

declare module 'lodash.isobject' {
  import {isObject} from 'lodash';
  export = isObject;
}

declare module 'lodash.isstring' {
  import {isString} from 'lodash';
  export = isString;
}
