import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Notification handlers. Set true for Razorpay to send, false to handle yourself. */
export type Notify1 = {
  sms?: boolean;
  email?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const notify1Schema: Schema<Notify1> = s.object<Notify1>(
  {
    sms: s.optional(s.boolean()),
    email: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
