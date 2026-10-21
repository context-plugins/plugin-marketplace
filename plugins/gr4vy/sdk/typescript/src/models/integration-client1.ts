import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The integration clients */
export const IntegrationClient1 = {
  Redirect: "redirect",
  Web: "web",
  Android: "android",
  Ios: "ios",
} as const;
export type IntegrationClient1 = (typeof IntegrationClient1)[keyof typeof IntegrationClient1] | (string & {});

export const integrationClient1Schema: EnumSchema<IntegrationClient1> =
  s.enumOf<IntegrationClient1>(IntegrationClient1);
