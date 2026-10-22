import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountSidSchema, type AccountSid } from "./unions/account-sid.js";
import { authTokenSchema, type AuthToken } from "./unions/auth-token.js";

/** Twilio channel config information. If a field is passed as None, it will not be updated. */
export type TwilioChannelConfigUpdate = {
  /** SID of the Twilio account */
  accountSid?: AccountSid;
  /** The Twilio auth token */
  authToken?: AuthToken;
};

export const twilioChannelConfigUpdateSchema: Schema<TwilioChannelConfigUpdate> =
  s.object<TwilioChannelConfigUpdate>({
    accountSid: s.optional(s.lazy(() => accountSidSchema)),
    authToken: s.optional(s.lazy(() => authTokenSchema)),
    _keysMap: {
      accountSid: "account_sid",
      authToken: "auth_token",
    },
  });
