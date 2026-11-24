import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { attributeSchema, type Attribute } from "./attribute.js";
import { orderSchema, type Order } from "./order.js";

export type AggregatedUtterancesSortBy = {
  /** The utterance attribute to sort by. */
  attribute: Attribute;
  /** Specifies whether to sort the aggregated utterances in ascending or descending order. */
  order: Order;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const aggregatedUtterancesSortBySchema: Schema<AggregatedUtterancesSortBy> =
  s.object<AggregatedUtterancesSortBy>(
    {
      attribute: attributeSchema,
      order: orderSchema,
    },
    { additionalProperties: s.json() },
  );
