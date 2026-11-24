import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ProcessingOptions = {
  /** Set as `true` to send an email to the customer */
  sendEmail?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const processingOptionsSchema: Schema<ProcessingOptions> = s.object<ProcessingOptions>(
  {
    sendEmail: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
