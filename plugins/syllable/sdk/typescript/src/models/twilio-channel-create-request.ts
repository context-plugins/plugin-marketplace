import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  twilioChannelConfigCreate1Schema,
  type TwilioChannelConfigCreate1,
} from "./twilio-channel-config-create1.js";

/** Request model for creating a Twilio channel. */
export type TwilioChannelCreateRequest = {
  /** The channel name */
  name: string;
  /** The configuration of the channel */
  config: TwilioChannelConfigCreate1;
};

export const twilioChannelCreateRequestSchema: Schema<TwilioChannelCreateRequest> =
  s.object<TwilioChannelCreateRequest>({
    name: s.string(),
    config: twilioChannelConfigCreate1Schema,
  });
