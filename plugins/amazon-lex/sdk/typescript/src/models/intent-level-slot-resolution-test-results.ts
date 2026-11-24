import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  intentLevelSlotResolutionTestResultItemSchema,
  type IntentLevelSlotResolutionTestResultItem,
} from "./intent-level-slot-resolution-test-result-item.js";

export type IntentLevelSlotResolutionTestResults = {
  /** Indicates the items for the slot level resolution for the intents. */
  items: IntentLevelSlotResolutionTestResultItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const intentLevelSlotResolutionTestResultsSchema: Schema<IntentLevelSlotResolutionTestResults> =
  s.object<IntentLevelSlotResolutionTestResults>(
    {
      items: s.array(s.lazy(() => intentLevelSlotResolutionTestResultItemSchema)),
    },
    { additionalProperties: s.json() },
  );
