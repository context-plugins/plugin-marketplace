import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { transfer1InternalSchema, transfer1Schema, type Transfer1 } from "./transfer1.js";

export type PaymentsTransfersRequest = {
  transfers: Transfer1[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paymentsTransfersRequestProperties: s.Shape<PaymentsTransfersRequest> = {
  transfers: s.array(s.lazy(() => transfer1InternalSchema)),
};

export const paymentsTransfersRequestInternalSchema: Schema<PaymentsTransfersRequest> =
  s.object<PaymentsTransfersRequest>(paymentsTransfersRequestProperties, { additionalProperties: s.json() });

export const paymentsTransfersRequestSchema: Schema<PaymentsTransfersRequest> = s.lazySchema(() =>
  s.object<PaymentsTransfersRequest>(
    {
      ...paymentsTransfersRequestProperties,
      transfers: s.array(s.lazy(() => transfer1Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
