import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ConditionSetShowExpandItems = {
  Stats: "stats",
} as const;
export type ConditionSetShowExpandItems =
  | (typeof ConditionSetShowExpandItems)[keyof typeof ConditionSetShowExpandItems]
  | (string & {});

export const conditionSetShowExpandItemsSchema: EnumSchema<ConditionSetShowExpandItems> =
  s.enumOf<ConditionSetShowExpandItems>(ConditionSetShowExpandItems);
