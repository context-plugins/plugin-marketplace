import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TestSetSlotDiscrepancyItem = {
  /** The name of the intent associated with the slot in the discrepancy report. */
  intentName: string;
  /** The name of the slot in the discrepancy report. */
  slotName: string;
  /** The error message for a discrepancy for an intent between the test set and the bot. */
  errorMessage: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const testSetSlotDiscrepancyItemSchema: Schema<TestSetSlotDiscrepancyItem> =
  s.object<TestSetSlotDiscrepancyItem>(
    {
      intentName: s.string(),
      slotName: s.string(),
      errorMessage: s.string(),
    },
    { additionalProperties: s.json() },
  );
