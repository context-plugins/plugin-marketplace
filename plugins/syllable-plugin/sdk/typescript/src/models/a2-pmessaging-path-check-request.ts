import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Body to check US A2P / Messaging Service setup for one number on the Twilio channel. */
export type A2PMessagingPathCheckRequest = {
  /** E.164 phone number exactly as Twilio stores it for this incoming number. */
  phone: string;
};

export const a2PMessagingPathCheckRequestSchema: Schema<A2PMessagingPathCheckRequest> =
  s.object<A2PMessagingPathCheckRequest>({
    phone: s.string(),
  });
