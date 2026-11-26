import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RiskVerification = {
  decision?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const riskVerificationSchema: Schema<RiskVerification> = s.object<RiskVerification>(
  {
    decision: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
