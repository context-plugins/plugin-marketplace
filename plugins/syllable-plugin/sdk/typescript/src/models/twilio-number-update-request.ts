import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Request model for updating a Twilio number and associating it with a channel. */
export type TwilioNumberUpdateRequest = {
  /** Friendly name for the Twilio number */
  friendlyName: string;
  /** Twilio number SID */
  phoneSid: string;
};

export const twilioNumberUpdateRequestSchema: Schema<TwilioNumberUpdateRequest> =
  s.object<TwilioNumberUpdateRequest>({
    friendlyName: s.string(),
    phoneSid: s.string(),
    _keysMap: {
      friendlyName: "friendly_name",
      phoneSid: "phone_sid",
    },
  });
