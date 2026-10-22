import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Authentication method to use */
export const Method = {
  SamlSso: "samlSso",
  Otp: "otp",
  Password: "password",
  Google: "google",
  Microsoft: "microsoft",
  AzureAd: "azureAd",
  Oauth: "oauth",
} as const;
export type Method = (typeof Method)[keyof typeof Method] | (string & {});

export const methodSchema: EnumSchema<Method> = s.enumOf<Method>(Method);
