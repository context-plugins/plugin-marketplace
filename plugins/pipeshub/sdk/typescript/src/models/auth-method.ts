import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { typeSchema, type Type } from "./type.js";

/** Authentication method configuration */
export type AuthMethod = {
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
  type: Type;
};

export const authMethodSchema: Schema<AuthMethod> = s.object<AuthMethod>({
  type: typeSchema,
});
