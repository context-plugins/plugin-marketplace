import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** If provided, Razorpay sends the mandate auth link directly to the customer. */
export type NotifyInfo = {
  /** Customer phone number to send SMS. */
  notifyPhone?: string;
  /** Customer email address to send the link. */
  notifyEmail?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const notifyInfoSchema: Schema<NotifyInfo> = s.object<NotifyInfo>(
  {
    notifyPhone: s.optional(s.string()),
    notifyEmail: s.optional(s.string()),
    _keysMap: {
      notifyPhone: "notify_phone",
      notifyEmail: "notify_email",
    },
  },
  { additionalProperties: s.json() },
);
