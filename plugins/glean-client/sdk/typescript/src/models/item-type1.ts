import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ItemType1 = {
  Document: "DOCUMENT",
  Text: "TEXT",
  Url: "URL",
} as const;
export type ItemType1 = (typeof ItemType1)[keyof typeof ItemType1] | (string & {});

export const itemType1Schema: EnumSchema<ItemType1> = s.enumOf<ItemType1>(ItemType1);
