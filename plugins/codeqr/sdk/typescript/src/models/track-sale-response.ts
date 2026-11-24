import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TrackSaleResponse = {
  eventName: string;
  customerId: string;
  amount: number;
  paymentProcessor: string;
  invoiceId: string | null;
  currency: string;
  metadata: Record<string, unknown> | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const trackSaleResponseSchema: Schema<TrackSaleResponse> = s.object<TrackSaleResponse>(
  {
    eventName: s.string(),
    customerId: s.string(),
    amount: s.float64(),
    paymentProcessor: s.string(),
    invoiceId: s.nullable(s.string()),
    currency: s.string(),
    metadata: s.nullable(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);
