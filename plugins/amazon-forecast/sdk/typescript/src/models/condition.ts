import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The condition to apply. To include the objects that match the statement, specify IS. To exclude
 * matching objects, specify IS_NOT.
 */
export const Condition = {
  Is: "IS",
  IsNot: "IS_NOT",
} as const;
export type Condition = (typeof Condition)[keyof typeof Condition] | (string & {});

export const conditionSchema: EnumSchema<Condition> = s.enumOf<Condition>(Condition);
