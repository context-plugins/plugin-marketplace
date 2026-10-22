import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The service that facilitates communication on the channel */
export const ChannelServices2 = {
  Sip: "sip",
  Twilio: "twilio",
  Email: "email",
  Webchat: "webchat",
  Africastalking: "africastalking",
  Whatsapp: "whatsapp",
} as const;
export type ChannelServices2 = (typeof ChannelServices2)[keyof typeof ChannelServices2] | (string & {});

export const channelServices2Schema: EnumSchema<ChannelServices2> =
  s.enumOf<ChannelServices2>(ChannelServices2);
