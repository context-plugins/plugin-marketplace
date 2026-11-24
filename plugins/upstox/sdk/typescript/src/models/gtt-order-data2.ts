import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Response data for GTT order request */
export type GttOrderData2 = {
  /** Order ID for the placed GTT order */
  gttOrderIds?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const gttOrderData2Schema: Schema<GttOrderData2> = s.object<GttOrderData2>(
  {
    gttOrderIds: s.optional(s.array(s.string())),
    _keysMap: {
      gttOrderIds: "gtt_order_ids",
    },
  },
  { additionalProperties: s.json() },
);
