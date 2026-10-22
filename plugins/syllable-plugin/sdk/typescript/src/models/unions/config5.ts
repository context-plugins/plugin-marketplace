import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  twilioChannelConfigUpdateSchema,
  type TwilioChannelConfigUpdate,
} from "../twilio-channel-config-update.js";

/** The configuration of the channel */
export type Config5 = TwilioChannelConfigUpdate;

export const config5Schema: Schema<Config5> = s.of<Config5>(
  s.union([s.lazy(() => twilioChannelConfigUpdateSchema)]),
);
