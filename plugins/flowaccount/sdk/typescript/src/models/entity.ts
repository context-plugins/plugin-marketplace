import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** 1 = PND3 3 = PND53 5 = PND1K 7 = PND1KSpecial 9 = PND2 11 = PND2K 13 = PND3K 15 = PND1 */
export const Entity = {
  _1: 1,
  _3: 3,
  _5: 5,
  _7: 7,
  _9: 9,
  _11: 11,
  _13: 13,
  _15: 15,
} as const;
export type Entity = (typeof Entity)[keyof typeof Entity] | (number & {});

export const entitySchema: EnumSchema<Entity> = s.enumOf<Entity>(Entity);
