import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CancelOrExitMultiOrderData = {
  /** Reference order IDs */
  orderIds?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cancelOrExitMultiOrderDataSchema: Schema<CancelOrExitMultiOrderData> =
  s.object<CancelOrExitMultiOrderData>(
    {
      orderIds: s.optional(s.array(s.string())),
      _keysMap: {
        orderIds: "order_ids",
      },
    },
    { additionalProperties: s.json() },
  );
