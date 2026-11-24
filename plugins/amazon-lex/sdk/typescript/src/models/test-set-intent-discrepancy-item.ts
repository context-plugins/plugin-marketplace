import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TestSetIntentDiscrepancyItem = {
  /** The name of the intent in the discrepancy report. */
  intentName: string;
  /** The error message for a discrepancy for an intent between the test set and the bot. */
  errorMessage: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const testSetIntentDiscrepancyItemSchema: Schema<TestSetIntentDiscrepancyItem> =
  s.object<TestSetIntentDiscrepancyItem>(
    {
      intentName: s.string(),
      errorMessage: s.string(),
    },
    { additionalProperties: s.json() },
  );
