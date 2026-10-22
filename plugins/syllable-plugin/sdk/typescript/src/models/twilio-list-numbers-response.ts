import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { twilioPhoneNumberSchema, type TwilioPhoneNumber } from "./twilio-phone-number.js";

/** Response model for a list of Twilio phone numbers */
export type TwilioListNumbersResponse = {
  /** List of phone numbers. */
  phoneNumbers: TwilioPhoneNumber[];
};

export const twilioListNumbersResponseSchema: Schema<TwilioListNumbersResponse> =
  s.object<TwilioListNumbersResponse>({
    phoneNumbers: s.array(s.lazy(() => twilioPhoneNumberSchema)),
    _keysMap: {
      phoneNumbers: "phone_numbers",
    },
  });
