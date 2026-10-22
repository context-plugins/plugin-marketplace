import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Response model for purchasing a Twilio number and associating it with a channel. */
export type TwilioNumberAddResponse = {
  /** The purchased Twilio phone number */
  phoneNumber: string;
};

export const twilioNumberAddResponseSchema: Schema<TwilioNumberAddResponse> =
  s.object<TwilioNumberAddResponse>({
    phoneNumber: s.string(),
    _keysMap: {
      phoneNumber: "phone_number",
    },
  });
