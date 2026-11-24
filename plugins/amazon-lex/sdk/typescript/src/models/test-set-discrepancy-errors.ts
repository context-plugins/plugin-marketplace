import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  testSetIntentDiscrepancyItemSchema,
  type TestSetIntentDiscrepancyItem,
} from "./test-set-intent-discrepancy-item.js";
import {
  testSetSlotDiscrepancyItemSchema,
  type TestSetSlotDiscrepancyItem,
} from "./test-set-slot-discrepancy-item.js";

export type TestSetDiscrepancyErrors = {
  /**
   * Contains information about discrepancies found for intents between the test set and the bot.
   */
  intentDiscrepancies: TestSetIntentDiscrepancyItem[];
  /** Contains information about discrepancies found for slots between the test set and the bot. */
  slotDiscrepancies: TestSetSlotDiscrepancyItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const testSetDiscrepancyErrorsSchema: Schema<TestSetDiscrepancyErrors> =
  s.object<TestSetDiscrepancyErrors>(
    {
      intentDiscrepancies: s.array(s.lazy(() => testSetIntentDiscrepancyItemSchema)),
      slotDiscrepancies: s.array(s.lazy(() => testSetSlotDiscrepancyItemSchema)),
    },
    { additionalProperties: s.json() },
  );
