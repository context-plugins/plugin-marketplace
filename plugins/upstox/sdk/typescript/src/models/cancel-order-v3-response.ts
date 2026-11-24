import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cancelOrderDataSchema, type CancelOrderData } from "./cancel-order-data.js";
import { orderMetadataSchema, type OrderMetadata } from "./order-metadata.js";
import { statusSchema, type Status } from "./status.js";

export type CancelOrderV3Response = {
  status?: Status;
  data?: CancelOrderData;
  metadata?: OrderMetadata;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cancelOrderV3ResponseSchema: Schema<CancelOrderV3Response> = s.object<CancelOrderV3Response>(
  {
    status: s.optional(s.lazy(() => statusSchema)),
    data: s.optional(s.lazy(() => cancelOrderDataSchema)),
    metadata: s.optional(s.lazy(() => orderMetadataSchema)),
  },
  { additionalProperties: s.json() },
);
