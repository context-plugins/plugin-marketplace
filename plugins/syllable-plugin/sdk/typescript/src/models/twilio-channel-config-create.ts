import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Twilio channel config information. */
export type TwilioChannelConfigCreate = {
  /** SID of the Twilio account */
  accountSid: string;
  /** The Twilio auth token */
  authToken: string;
};

export const twilioChannelConfigCreateSchema: Schema<TwilioChannelConfigCreate> =
  s.object<TwilioChannelConfigCreate>({
    accountSid: s.string(),
    authToken: s.string(),
    _keysMap: {
      accountSid: "account_sid",
      authToken: "auth_token",
    },
  });
