import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Number = {
  _1001: 1001,
  _1002: 1002,
  _1101: 1101,
  _1201: 1201,
  _1301: 1301,
  _2001: 2001,
  _2002: 2002,
  _2101: 2101,
  _3001: 3001,
  _3002: 3002,
  _3003: 3003,
  _3004: 3004,
  _3005: 3005,
  _3006: 3006,
  _3007: 3007,
  _4001: 4001,
  _4002: 4002,
  _4003: 4003,
  _4004: 4004,
  _4005: 4005,
  _4101: 4101,
  _4102: 4102,
  _4103: 4103,
  _4104: 4104,
  _4105: 4105,
  _4106: 4106,
  _5001: 5001,
  _5002: 5002,
  _5003: 5003,
  _5004: 5004,
  _5005: 5005,
  _5101: 5101,
  _9001: 9001,
  _9002: 9002,
} as const;
export type Number = (typeof Number)[keyof typeof Number] | (number & {});

export const numberSchema: EnumSchema<Number> = s.enumOf<Number>(Number);
