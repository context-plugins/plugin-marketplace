import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Payload for Risk Verification. */
export type RiskVerificationPayloadV1 = {
  decision?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const riskVerificationPayloadV1Schema: Schema<RiskVerificationPayloadV1> =
  s.object<RiskVerificationPayloadV1>(
    {
      decision: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
