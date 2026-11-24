import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Optional filter mapping to an Agent Ready corpus type. 'any' (default) searches everything. */
export const ItemType = {
  Methodology: "methodology",
  Checks: "checks",
  Specs: "specs",
  LlmsTxt: "llms-txt",
  Check: "check",
  Page: "page",
  Any: "any",
} as const;
export type ItemType = (typeof ItemType)[keyof typeof ItemType] | (string & {});

export const itemTypeSchema: EnumSchema<ItemType> = s.enumOf<ItemType>(ItemType);
