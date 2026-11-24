import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SegmentSubscriptionInput1 = {
  /** Discriminator value: emails @default "emails" */
  type?: "emails";
  emails: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const segmentSubscriptionInput1Schema: Schema<SegmentSubscriptionInput1> =
  s.object<SegmentSubscriptionInput1>(
    {
      type: s.defaulted(s.literal("emails"), "emails"),
      emails: s.array(s.string()),
    },
    { additionalProperties: s.json() },
  );
