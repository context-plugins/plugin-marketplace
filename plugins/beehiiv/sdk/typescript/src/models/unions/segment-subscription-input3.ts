import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  segmentSubscriptionInputSchema,
  type SegmentSubscriptionInput,
} from "../segment-subscription-input.js";
import {
  segmentSubscriptionInput1Schema,
  type SegmentSubscriptionInput1,
} from "../segment-subscription-input1.js";
import {
  segmentSubscriptionInput2Schema,
  type SegmentSubscriptionInput2,
} from "../segment-subscription-input2.js";

/**
 * Input for segment creation. Use `subscriptions` or `emails` to create a manual segment from
 * explicit lists, or `custom_fields` to create a dynamic segment filtered by custom field values.
 */
export type SegmentSubscriptionInput3 =
  | SegmentSubscriptionInput
  | SegmentSubscriptionInput1
  | SegmentSubscriptionInput2;

export const segmentSubscriptionInput3Schema: Schema<SegmentSubscriptionInput3> =
  s.of<SegmentSubscriptionInput3>(
    s.union([
      s.lazy(() => segmentSubscriptionInputSchema),
      s.lazy(() => segmentSubscriptionInput1Schema),
      s.lazy(() => segmentSubscriptionInput2Schema),
    ]),
  );
