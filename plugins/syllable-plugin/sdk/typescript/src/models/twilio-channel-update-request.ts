import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { config5Schema, type Config5 } from "./unions/config5.js";
import { name2Schema, type Name2 } from "./unions/name2.js";

/** Request model for updating a Twilio channel. */
export type TwilioChannelUpdateRequest = {
  /** The internal ID of the channel */
  id: number;
  /** The name of the channel */
  name?: Name2;
  /** The configuration of the channel */
  config?: Config5;
};

export const twilioChannelUpdateRequestSchema: Schema<TwilioChannelUpdateRequest> =
  s.object<TwilioChannelUpdateRequest>({
    id: s.int(),
    name: s.optional(s.lazy(() => name2Schema)),
    config: s.optional(s.lazy(() => config5Schema)),
  });
