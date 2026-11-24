import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Op = {
  Eq: "eq",
  Answered: "answered",
  NotAnswered: "not_answered",
} as const;
export type Op = (typeof Op)[keyof typeof Op] | (string & {});

export const opSchema: EnumSchema<Op> = s.enumOf<Op>(Op);
