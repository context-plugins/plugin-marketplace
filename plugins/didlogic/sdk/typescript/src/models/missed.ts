import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Missed = {
  _0: "0",
  _1: "1",
} as const;
export type Missed = (typeof Missed)[keyof typeof Missed] | (string & {});

export const missedSchema: EnumSchema<Missed> = s.enumOf<Missed>(Missed);
