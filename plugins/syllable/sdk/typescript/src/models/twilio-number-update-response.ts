import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Response model for updating a Twilio number and associating it with a channel. */
export type TwilioNumberUpdateResponse = {
  /** The updated Twilio phone number */
  phoneNumber: string;
};

export const twilioNumberUpdateResponseSchema: Schema<TwilioNumberUpdateResponse> =
  s.object<TwilioNumberUpdateResponse>({
    phoneNumber: s.string(),
    _keysMap: {
      phoneNumber: "phone_number",
    },
  });
