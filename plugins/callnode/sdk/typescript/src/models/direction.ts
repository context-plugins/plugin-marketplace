import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Direction = {
  Inbound: "inbound",
  Outbound: "outbound",
} as const;
export type Direction = (typeof Direction)[keyof typeof Direction] | (string & {});

export const directionSchema: EnumSchema<Direction> = s.enumOf<Direction>(Direction);
