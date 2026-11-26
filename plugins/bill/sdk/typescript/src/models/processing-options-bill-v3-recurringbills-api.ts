import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ProcessingOptionsBillV3RecurringbillsApi = {
  /** Set as `true` to enable auto-payment for each bill */
  autoPayment?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const processingOptionsBillV3RecurringbillsApiSchema: Schema<ProcessingOptionsBillV3RecurringbillsApi> =
  s.object<ProcessingOptionsBillV3RecurringbillsApi>(
    {
      autoPayment: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
