import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { itemSchema, type Item } from "./item.js";

export type ItemList = {
  items: Item[];
  limit: number;
  offset: number;
  total: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const itemListSchema: Schema<ItemList> = s.object<ItemList>(
  {
    items: s.array(s.lazy(() => itemSchema)),
    limit: s.int(),
    offset: s.int(),
    total: s.int(),
  },
  { additionalProperties: s.json() },
);
