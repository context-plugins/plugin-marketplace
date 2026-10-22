import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountSidSchema, type AccountSid } from "./unions/account-sid.js";
import { authTokenSchema, type AuthToken } from "./unions/auth-token.js";
import { email1Schema, type Email1 } from "./unions/email1.js";
import { providerCredentialsSchema, type ProviderCredentials } from "./unions/provider-credentials.js";
import { telephony1Schema, type Telephony1 } from "./unions/telephony1.js";

/** Channel config information for creates / updates through the organizations API */
export type OrganizationChannelConfig = {
  /** SID of the Twilio account */
  accountSid?: AccountSid;
  /** The Twilio auth token */
  authToken?: AuthToken;
  /**
   * Provider-specific credentials. Initially to be used for AfricasTalking creds. In a future this
   * would be used for Twilio creds too (removing the account_sid and auth_token fields).
   */
  providerCredentials?: ProviderCredentials;
  /** Telephony configurations to be applied to the targets under the channel */
  telephony?: Telephony1;
  /** Email configurations (required for email channels) */
  email?: Email1;
};

export const organizationChannelConfigSchema: Schema<OrganizationChannelConfig> =
  s.object<OrganizationChannelConfig>({
    accountSid: s.optional(s.lazy(() => accountSidSchema)),
    authToken: s.optional(s.lazy(() => authTokenSchema)),
    providerCredentials: s.optional(s.lazy(() => providerCredentialsSchema)),
    telephony: s.optional(s.lazy(() => telephony1Schema)),
    email: s.optional(s.lazy(() => email1Schema)),
    _keysMap: {
      accountSid: "account_sid",
      authToken: "auth_token",
      providerCredentials: "provider_credentials",
    },
  });
