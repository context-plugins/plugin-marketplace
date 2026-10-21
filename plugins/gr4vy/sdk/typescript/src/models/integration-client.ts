import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const IntegrationClient = {
  Redirect: "redirect",
  Web: "web",
  Android: "android",
  Ios: "ios",
} as const;
export type IntegrationClient = (typeof IntegrationClient)[keyof typeof IntegrationClient] | (string & {});

export const integrationClientSchema: EnumSchema<IntegrationClient> =
  s.enumOf<IntegrationClient>(IntegrationClient);
