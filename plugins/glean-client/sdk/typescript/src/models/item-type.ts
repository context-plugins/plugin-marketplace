import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ItemType = {
  Document: "DOCUMENT",
  Text: "TEXT",
  Url: "URL",
  Collection: "COLLECTION",
} as const;
export type ItemType = (typeof ItemType)[keyof typeof ItemType] | (string & {});

export const itemTypeSchema: EnumSchema<ItemType> = s.enumOf<ItemType>(ItemType);
