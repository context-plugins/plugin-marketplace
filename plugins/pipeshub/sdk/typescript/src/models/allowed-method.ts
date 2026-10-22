import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AllowedMethod = {
  SamlSso: "samlSso",
  Otp: "otp",
  Password: "password",
  Google: "google",
  Microsoft: "microsoft",
  AzureAd: "azureAd",
  Oauth: "oauth",
} as const;
export type AllowedMethod = (typeof AllowedMethod)[keyof typeof AllowedMethod] | (string & {});

export const allowedMethodSchema: EnumSchema<AllowedMethod> = s.enumOf<AllowedMethod>(AllowedMethod);
