import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type MultiOrderV3Data = {
  orderIds?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const multiOrderV3DataSchema: Schema<MultiOrderV3Data> = s.object<MultiOrderV3Data>(
  {
    orderIds: s.optional(s.array(s.string())),
    _keysMap: {
      orderIds: "order_ids",
    },
  },
  { additionalProperties: s.json() },
);
