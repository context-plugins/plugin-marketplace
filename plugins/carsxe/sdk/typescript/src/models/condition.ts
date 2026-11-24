import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Condition = {
  Excellent: "excellent",
  Clean: "clean",
  Average: "average",
  Rough: "rough",
} as const;
export type Condition = (typeof Condition)[keyof typeof Condition] | (string & {});

export const conditionSchema: EnumSchema<Condition> = s.enumOf<Condition>(Condition);
