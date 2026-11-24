import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Response data for cancel or exit order request */
export type CancelOrExitMultiOrderData2 = {
  /** Reference order IDs */
  orderIds?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cancelOrExitMultiOrderData2Schema: Schema<CancelOrExitMultiOrderData2> =
  s.object<CancelOrExitMultiOrderData2>(
    {
      orderIds: s.optional(s.array(s.string())),
      _keysMap: {
        orderIds: "order_ids",
      },
    },
    { additionalProperties: s.json() },
  );
