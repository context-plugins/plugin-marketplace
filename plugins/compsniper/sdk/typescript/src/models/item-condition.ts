import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ItemCondition = {
  Any: "any",
  New: "new",
  Used: "used",
} as const;
export type ItemCondition = (typeof ItemCondition)[keyof typeof ItemCondition] | (string & {});

export const itemConditionSchema: EnumSchema<ItemCondition> = s.enumOf<ItemCondition>(ItemCondition);
