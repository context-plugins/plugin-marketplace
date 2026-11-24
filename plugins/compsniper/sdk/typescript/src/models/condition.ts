import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Condition filter */
export const Condition = {
  Any: "any",
  New: "new",
  GentlyUsed: "gently_used",
  Used: "used",
  Worn: "worn",
} as const;
export type Condition = (typeof Condition)[keyof typeof Condition] | (string & {});

export const conditionSchema: EnumSchema<Condition> = s.enumOf<Condition>(Condition);
