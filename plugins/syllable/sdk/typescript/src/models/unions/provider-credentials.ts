import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Provider-specific credentials. Initially to be used for AfricasTalking creds. In a future this
 * would be used for Twilio creds too (removing the account_sid and auth_token fields).
 */
export type ProviderCredentials = Record<string, string>;

export const providerCredentialsSchema: Schema<ProviderCredentials> = s.of<ProviderCredentials>(
  s.union([s.record(s.string(), s.string())]),
);
