import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { methodSchema, type Method } from "./method.js";
import { credentialsSchema, type Credentials } from "./unions/credentials.js";

/**
 * Request to authenticate using specified method. **Credential format varies by method:**
 * - `password`: `{ password: "string" }`
 * - `otp`: `{ otp: "123456" }` (6-digit code)
 * - `google`: `"google-id-token-string"`
 * - `microsoft`: `{ accessToken: "...", idToken: "..." }`
 * - `azureAd`: `{ accessToken: "...", idToken: "..." }`
 * - `oauth`: `{ accessToken: "...", idToken: "..." }`
 * - `samlSso`: not accepted by `/userAccount/authenticate`, which answers `400`. SAML sign-in runs
 *   as a browser redirect: send the browser to `/saml/signIn` instead
 */
export type AuthenticateRequest = {
  /** Authentication method to use */
  method: Method;
  /** Credentials based on the authentication method */
  credentials: Credentials;
  /** Optional email for verification (used with some OAuth methods) */
  email?: string;
  /** Cloudflare Turnstile CAPTCHA token (optional, if CAPTCHA is enabled) */
  cfTurnstileResponse?: string;
};

export const authenticateRequestSchema: Schema<AuthenticateRequest> = s.object<AuthenticateRequest>({
  method: methodSchema,
  credentials: credentialsSchema,
  email: s.optional(s.string()),
  cfTurnstileResponse: s.optional(s.string()),
  _keysMap: {
    cfTurnstileResponse: "cf-turnstile-response",
  },
});
