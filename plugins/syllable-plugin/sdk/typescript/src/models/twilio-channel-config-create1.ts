import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The configuration of the channel */
export type TwilioChannelConfigCreate1 = {
  /** SID of the Twilio account */
  accountSid: string;
  /** The Twilio auth token */
  authToken: string;
};

export const twilioChannelConfigCreate1Schema: Schema<TwilioChannelConfigCreate1> =
  s.object<TwilioChannelConfigCreate1>({
    accountSid: s.string(),
    authToken: s.string(),
    _keysMap: {
      accountSid: "account_sid",
      authToken: "auth_token",
    },
  });
