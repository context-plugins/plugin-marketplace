import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Direction = {
  Loosened: "loosened",
  Tightened: "tightened",
} as const;
export type Direction = (typeof Direction)[keyof typeof Direction] | (string & {});

export const directionSchema: EnumSchema<Direction> = s.enumOf<Direction>(Direction);
