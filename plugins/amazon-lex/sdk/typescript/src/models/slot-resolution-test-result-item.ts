import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  slotResolutionTestResultItemCountsSchema,
  type SlotResolutionTestResultItemCounts,
} from "./slot-resolution-test-result-item-counts.js";

export type SlotResolutionTestResultItem = {
  /** The name of the slot. */
  slotName: string;
  resultCounts: SlotResolutionTestResultItemCounts;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const slotResolutionTestResultItemSchema: Schema<SlotResolutionTestResultItem> =
  s.object<SlotResolutionTestResultItem>(
    {
      slotName: s.string(),
      resultCounts: slotResolutionTestResultItemCountsSchema,
    },
    { additionalProperties: s.json() },
  );
