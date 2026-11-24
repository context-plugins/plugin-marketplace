import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ItemType3 = {
  Methodology: "methodology",
  Checks: "checks",
  Specs: "specs",
  LlmsTxt: "llms-txt",
  Check: "check",
  Page: "page",
} as const;
export type ItemType3 = (typeof ItemType3)[keyof typeof ItemType3] | (string & {});

export const itemType3Schema: EnumSchema<ItemType3> = s.enumOf<ItemType3>(ItemType3);
