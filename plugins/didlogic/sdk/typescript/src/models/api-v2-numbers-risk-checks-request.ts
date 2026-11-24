import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV2NumbersRiskChecksRequest = {
  /** Array of phone numbers to check for risk */
  numbers?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV2NumbersRiskChecksRequestSchema: Schema<ApiV2NumbersRiskChecksRequest> =
  s.object<ApiV2NumbersRiskChecksRequest>(
    {
      numbers: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
