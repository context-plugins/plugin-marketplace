import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { attribute4Schema, type Attribute4 } from "./attribute4.js";
import { order7Schema, type Order7 } from "./order7.js";

export type SlotSortBy = {
  /** The attribute to use to sort the list. */
  attribute: Attribute4;
  /** The order to sort the list. You can choose ascending or descending. */
  order: Order7;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const slotSortBySchema: Schema<SlotSortBy> = s.object<SlotSortBy>(
  {
    attribute: attribute4Schema,
    order: order7Schema,
  },
  { additionalProperties: s.json() },
);
