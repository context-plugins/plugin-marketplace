import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type IpoCancelData = {
  /** Application id that was cancelled */
  orderId?: string;
  /** Free-text message returned by the IPO service for the cancellation request */
  status?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const ipoCancelDataSchema: Schema<IpoCancelData> = s.object<IpoCancelData>(
  {
    orderId: s.optional(s.string()),
    status: s.optional(s.string()),
    _keysMap: {
      orderId: "order_id",
    },
  },
  { additionalProperties: s.json() },
);
