import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { gttOrderDetailsSchema, type GttOrderDetails } from "./gtt-order-details.js";
import { orderMetadataSchema, type OrderMetadata } from "./order-metadata.js";
import { statusSchema, type Status } from "./status.js";

export type GetGttOrderResponse = {
  status?: Status;
  /** Response data for order details */
  data?: GttOrderDetails[];
  metadata?: OrderMetadata;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getGttOrderResponseSchema: Schema<GetGttOrderResponse> = s.object<GetGttOrderResponse>(
  {
    status: s.optional(s.lazy(() => statusSchema)),
    data: s.optional(s.array(s.lazy(() => gttOrderDetailsSchema))),
    metadata: s.optional(s.lazy(() => orderMetadataSchema)),
  },
  { additionalProperties: s.json() },
);
