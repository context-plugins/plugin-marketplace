import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Request model for purchasing a Twilio number and associating it with a channel. */
export type TwilioNumberAddRequest = {
  /** Friendly name for the Twilio number */
  friendlyName: string;
  /** Area code for the Twilio number */
  areaCode: string;
};

export const twilioNumberAddRequestSchema: Schema<TwilioNumberAddRequest> = s.object<TwilioNumberAddRequest>({
  friendlyName: s.string(),
  areaCode: s.string(),
  _keysMap: {
    friendlyName: "friendly_name",
    areaCode: "area_code",
  },
});
