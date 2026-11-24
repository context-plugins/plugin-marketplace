import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type InitiatePayoutRequest = {
  /** Withdrawal mode. NEFT or IMPS */
  mode: string;
  /** Withdrawal amount in INR */
  amount: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const initiatePayoutRequestProperties: s.Shape<InitiatePayoutRequest> = {
  mode: s.string(),
  amount: s.float64(),
};

export const initiatePayoutRequestInternalSchema: Schema<InitiatePayoutRequest> =
  s.object<InitiatePayoutRequest>(initiatePayoutRequestProperties, { additionalProperties: s.json() });

export const initiatePayoutRequestSchema: Schema<InitiatePayoutRequest> = s.lazySchema(() =>
  s.object<InitiatePayoutRequest>(
    {
      ...initiatePayoutRequestProperties,
      mode: s.string().check(s.minLength(1), s.pattern("^(NEFT|IMPS)$")),
      amount: s.float64().check(s.gte(100)),
    },
    { additionalProperties: s.json() },
  ),
);
