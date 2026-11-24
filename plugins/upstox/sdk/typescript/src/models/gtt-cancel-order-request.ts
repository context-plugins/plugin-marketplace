import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GttCancelOrderRequest = {
  /** Unique identifier of the GTT order to be cancelled */
  gttOrderId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const gttCancelOrderRequestProperties: s.Shape<GttCancelOrderRequest> = {
  gttOrderId: s.string(),
  _keysMap: {
    gttOrderId: "gtt_order_id",
  },
};

export const gttCancelOrderRequestInternalSchema: Schema<GttCancelOrderRequest> =
  s.object<GttCancelOrderRequest>(gttCancelOrderRequestProperties, { additionalProperties: s.json() });

export const gttCancelOrderRequestSchema: Schema<GttCancelOrderRequest> = s.lazySchema(() =>
  s.object<GttCancelOrderRequest>(
    {
      ...gttCancelOrderRequestProperties,
      gttOrderId: s.string().check(s.pattern("^GTT-.+$")),
    },
    { additionalProperties: s.json() },
  ),
);
