import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { credentialsSchema, type Credentials } from "./unions/credentials.js";
import { emailSchema, type Email } from "./unions/email.js";
import { telephonySchema, type Telephony } from "./unions/telephony.js";

export type ChannelConfigView = {
  /**
   * Telephony configurations to be applied to targets belonging to the channel. Only applies to
   * voice supported channels.
   */
  telephony?: Telephony;
  /** Email configurations for email channels. Only applies to email channels. */
  email?: Email;
  /**
   * Exposed credentials for the channel - currently just account_sid_last_four for Twilio channels
   */
  credentials?: Credentials;
};

export const channelConfigViewSchema: Schema<ChannelConfigView> = s.object<ChannelConfigView>({
  telephony: s.optional(s.lazy(() => telephonySchema)),
  email: s.optional(s.lazy(() => emailSchema)),
  credentials: s.optional(s.lazy(() => credentialsSchema)),
});
