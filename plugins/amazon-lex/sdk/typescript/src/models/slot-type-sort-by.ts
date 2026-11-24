import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { attribute3Schema, type Attribute3 } from "./attribute3.js";
import { order13Schema, type Order13 } from "./order13.js";

export type SlotTypeSortBy = {
  /** The attribute to use to sort the list of slot types. */
  attribute: Attribute3;
  /** The order to sort the list. You can say ascending or descending. */
  order: Order13;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const slotTypeSortBySchema: Schema<SlotTypeSortBy> = s.object<SlotTypeSortBy>(
  {
    attribute: attribute3Schema,
    order: order13Schema,
  },
  { additionalProperties: s.json() },
);
