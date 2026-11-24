import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type InvokedIntentSample = {
  /** The name of an intent that was invoked. */
  intentName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const invokedIntentSampleSchema: Schema<InvokedIntentSample> = s.object<InvokedIntentSample>(
  {
    intentName: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
