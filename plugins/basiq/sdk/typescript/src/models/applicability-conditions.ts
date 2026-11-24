import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApplicabilityConditions = {
  /** Display text providing more information on the condition. */
  additionalInfo?: string;
  /** Link to a web page with more information on this condition. */
  additionalInfoUri?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const applicabilityConditionsSchema: Schema<ApplicabilityConditions> =
  s.object<ApplicabilityConditions>(
    {
      additionalInfo: s.optional(s.string()),
      additionalInfoUri: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
