import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { lineSchema, type Line } from "./line.js";

export type ApiV1BillingBillableUsageQuoteResponse = {
  billable: boolean;
  lines: Line[];
  totalMicros: number;
  totalCents: number;
  /** @default "usd" */
  currency?: "usd";
  availableMicros: number;
  availableCents: number;
  wouldExceedBalance: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1BillingBillableUsageQuoteResponseSchema: Schema<ApiV1BillingBillableUsageQuoteResponse> =
  s.object<ApiV1BillingBillableUsageQuoteResponse>(
    {
      billable: s.boolean(),
      lines: s.array(s.lazy(() => lineSchema)),
      totalMicros: s.int(),
      totalCents: s.int(),
      currency: s.defaulted(s.literal("usd"), "usd"),
      availableMicros: s.int(),
      availableCents: s.int(),
      wouldExceedBalance: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
