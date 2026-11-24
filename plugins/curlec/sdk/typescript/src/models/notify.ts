import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Notify = {
  /** true: Razorpay sends SMS notification. false: merchant handles. */
  sms?: boolean;
  /** true: Razorpay sends email notification. false: merchant handles. */
  email?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const notifySchema: Schema<Notify> = s.object<Notify>(
  {
    sms: s.optional(s.boolean()),
    email: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
