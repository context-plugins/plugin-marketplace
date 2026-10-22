import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The communication service for a channel. */
export const ChannelServices = {
  Sip: "sip",
  Twilio: "twilio",
  Email: "email",
  Webchat: "webchat",
  Africastalking: "africastalking",
  Whatsapp: "whatsapp",
} as const;
export type ChannelServices = (typeof ChannelServices)[keyof typeof ChannelServices] | (string & {});

export const channelServicesSchema: EnumSchema<ChannelServices> = s.enumOf<ChannelServices>(ChannelServices);
