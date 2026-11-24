import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1BillingCreditsBalanceResponse = {
  organizationId: string;
  /** @default "usd" */
  currency?: "usd";
  balanceMicros: number;
  heldMicros: number;
  availableMicros: number;
  balanceCents: number;
  availableCents: number;
  lowBalanceThresholdMicros: number | null;
  lowBalance: boolean;
  updatedAt: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1BillingCreditsBalanceResponseSchema: Schema<ApiV1BillingCreditsBalanceResponse> =
  s.object<ApiV1BillingCreditsBalanceResponse>(
    {
      organizationId: s.string(),
      currency: s.defaulted(s.literal("usd"), "usd"),
      balanceMicros: s.int(),
      heldMicros: s.int(),
      availableMicros: s.int(),
      balanceCents: s.int(),
      availableCents: s.int(),
      lowBalanceThresholdMicros: s.nullable(s.int()),
      lowBalance: s.boolean(),
      updatedAt: s.nullable(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
