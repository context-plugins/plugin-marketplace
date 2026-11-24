import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { attribute2Schema, type Attribute2 } from "./attribute2.js";
import { order7Schema, type Order7 } from "./order7.js";

export type IntentSortBy = {
  /** The attribute to use to sort the list of intents. */
  attribute: Attribute2;
  /** The order to sort the list. You can choose ascending or descending. */
  order: Order7;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const intentSortBySchema: Schema<IntentSortBy> = s.object<IntentSortBy>(
  {
    attribute: attribute2Schema,
    order: order7Schema,
  },
  { additionalProperties: s.json() },
);
