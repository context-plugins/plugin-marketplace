import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Default value for message facility. Will be overwritten by value of __facility if set. Defaults
 * to user.
 */
export const Facility = {
  _0: 0,
  _1: 1,
  _2: 2,
  _3: 3,
  _4: 4,
  _5: 5,
  _6: 6,
  _7: 7,
  _8: 8,
  _9: 9,
  _10: 10,
  _11: 11,
  _12: 12,
  _13: 13,
  _14: 14,
  _15: 15,
  _16: 16,
  _17: 17,
  _18: 18,
  _19: 19,
  _20: 20,
  _21: 21,
} as const;
export type Facility = (typeof Facility)[keyof typeof Facility] | (number & {});

export const facilitySchema: EnumSchema<Facility> = s.enumOf<Facility>(Facility);
