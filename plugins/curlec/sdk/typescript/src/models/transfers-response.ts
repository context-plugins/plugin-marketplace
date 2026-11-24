import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  transferRazorpayTransfersApiInternalSchema,
  transferRazorpayTransfersApiSchema,
  type TransferRazorpayTransfersApi,
} from "./transfer-razorpay-transfers-api.js";

export type TransfersResponse = {
  entity?: string;
  count?: number;
  items?: TransferRazorpayTransfersApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const transfersResponseProperties: s.Shape<TransfersResponse> = {
  entity: s.optional(s.string()),
  count: s.optional(s.int()),
  items: s.optional(s.array(s.lazy(() => transferRazorpayTransfersApiInternalSchema))),
};

export const transfersResponseInternalSchema: Schema<TransfersResponse> = s.object<TransfersResponse>(
  transfersResponseProperties,
  { additionalProperties: s.json() },
);

export const transfersResponseSchema: Schema<TransfersResponse> = s.lazySchema(() =>
  s.object<TransfersResponse>(
    {
      ...transfersResponseProperties,
      items: s.optional(s.array(s.lazy(() => transferRazorpayTransfersApiSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
