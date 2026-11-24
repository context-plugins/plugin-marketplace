import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  slotResolutionTestResultItemSchema,
  type SlotResolutionTestResultItem,
} from "./slot-resolution-test-result-item.js";

export type IntentLevelSlotResolutionTestResultItem = {
  /** The name of the intent that was recognized. */
  intentName: string;
  /** Indicates whether the conversation involves multiple turns or not. */
  multiTurnConversation: boolean;
  /** The results for the slot resolution in the test execution result. */
  slotResolutionResults: SlotResolutionTestResultItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const intentLevelSlotResolutionTestResultItemSchema: Schema<IntentLevelSlotResolutionTestResultItem> =
  s.object<IntentLevelSlotResolutionTestResultItem>(
    {
      intentName: s.string(),
      multiTurnConversation: s.boolean(),
      slotResolutionResults: s.array(s.lazy(() => slotResolutionTestResultItemSchema)),
    },
    { additionalProperties: s.json() },
  );
