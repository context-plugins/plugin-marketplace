import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { gttOrderData2Schema, type GttOrderData2 } from "./gtt-order-data2.js";
import { orderMetadataSchema, type OrderMetadata } from "./order-metadata.js";
import { statusSchema, type Status } from "./status.js";

export type GttTriggerOrderResponse = {
  status?: Status;
  /** Response data for GTT order request */
  data?: GttOrderData2;
  metadata?: OrderMetadata;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const gttTriggerOrderResponseSchema: Schema<GttTriggerOrderResponse> =
  s.object<GttTriggerOrderResponse>(
    {
      status: s.optional(s.lazy(() => statusSchema)),
      data: s.optional(s.lazy(() => gttOrderData2Schema)),
      metadata: s.optional(s.lazy(() => orderMetadataSchema)),
    },
    { additionalProperties: s.json() },
  );
