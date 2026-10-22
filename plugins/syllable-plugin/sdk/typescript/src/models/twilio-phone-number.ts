import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TwilioPhoneNumber = {
  /** The unique identifier for the phone number. */
  sid: string;
  /** The phone number. */
  phoneNumber: string;
  /** A user-friendly name for the number. */
  friendlyName: string;
  /** Associated trunk SID, if any. */
  trunkSid: string;
};

export const twilioPhoneNumberSchema: Schema<TwilioPhoneNumber> = s.object<TwilioPhoneNumber>({
  sid: s.string(),
  phoneNumber: s.string(),
  friendlyName: s.string(),
  trunkSid: s.string(),
  _keysMap: {
    phoneNumber: "phone_number",
    friendlyName: "friendly_name",
    trunkSid: "trunk_sid",
  },
});
