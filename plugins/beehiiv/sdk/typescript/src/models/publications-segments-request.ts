import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  segmentSubscriptionInput3Schema,
  type SegmentSubscriptionInput3,
} from "./unions/segment-subscription-input3.js";

export type PublicationsSegmentsRequest = {
  /** A unique name for the segment that does not already exist in the publication. */
  name: string;
  /**
   * Input for segment creation. Use `subscriptions` or `emails` to create a manual segment from
   * explicit lists, or `custom_fields` to create a dynamic segment filtered by custom field values.
   */
  input: SegmentSubscriptionInput3;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicationsSegmentsRequestSchema: Schema<PublicationsSegmentsRequest> =
  s.object<PublicationsSegmentsRequest>(
    {
      name: s.string(),
      input: segmentSubscriptionInput3Schema,
    },
    { additionalProperties: s.json() },
  );
