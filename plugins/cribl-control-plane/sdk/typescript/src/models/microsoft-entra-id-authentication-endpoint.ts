import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Endpoint used to acquire authentication tokens from Azure */
export const MicrosoftEntraIdAuthenticationEndpoint = {
  HttpsLoginMicrosoftonlineCom: "https://login.microsoftonline.com",
  HttpsLoginMicrosoftonlineUs: "https://login.microsoftonline.us",
  HttpsLoginPartnerMicrosoftonlineCn: "https://login.partner.microsoftonline.cn",
} as const;
export type MicrosoftEntraIdAuthenticationEndpoint =
  | (typeof MicrosoftEntraIdAuthenticationEndpoint)[keyof typeof MicrosoftEntraIdAuthenticationEndpoint]
  | (string & {});

export const microsoftEntraIdAuthenticationEndpointSchema: EnumSchema<MicrosoftEntraIdAuthenticationEndpoint> =
  s.enumOf<MicrosoftEntraIdAuthenticationEndpoint>(MicrosoftEntraIdAuthenticationEndpoint);
