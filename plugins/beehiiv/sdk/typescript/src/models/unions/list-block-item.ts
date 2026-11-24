import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { listBlockItemDataSchema, type ListBlockItemData } from "../list-block-item-data.js";

/** A list item as either plain text or formatted text data. */
export type ListBlockItem = string | ListBlockItemData;

export const listBlockItemSchema: Schema<ListBlockItem> = s.of<ListBlockItem>(
  s.union([s.string(), s.lazy(() => listBlockItemDataSchema)]),
);
