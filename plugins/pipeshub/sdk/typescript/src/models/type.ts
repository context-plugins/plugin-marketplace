import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Type of authentication method:
 * - `password`: Email/password authentication
 * - `otp`: One-time password via email (6-digit, expires in 10 minutes)
 * - `google`: Google OAuth 2.0
 * - `microsoft`: Microsoft OAuth 2.0
 * - `azureAd`: Azure Active Directory
 * - `samlSso`: SAML 2.0 Single Sign-On
 * - `oauth`: Generic OAuth 2.0 provider
 */
export const Type = {
  SamlSso: "samlSso",
  Otp: "otp",
  Password: "password",
  Google: "google",
  Microsoft: "microsoft",
  AzureAd: "azureAd",
  Oauth: "oauth",
} as const;
export type Type = (typeof Type)[keyof typeof Type] | (string & {});

export const typeSchema: EnumSchema<Type> = s.enumOf<Type>(Type);
