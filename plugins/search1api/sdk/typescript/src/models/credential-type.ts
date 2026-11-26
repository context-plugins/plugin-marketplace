import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CredentialType = {
  ApiKey: "api_key",
  Oauth: "oauth",
} as const;
export type CredentialType = (typeof CredentialType)[keyof typeof CredentialType] | (string & {});

export const credentialTypeSchema: EnumSchema<CredentialType> = s.enumOf<CredentialType>(CredentialType);
