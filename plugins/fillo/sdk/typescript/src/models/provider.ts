import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Provider = {
  GoogleSheets: "google_sheets",
  Notion: "notion",
  Slack: "slack",
  Hubspot: "hubspot",
} as const;
export type Provider = (typeof Provider)[keyof typeof Provider] | (string & {});

export const providerSchema: EnumSchema<Provider> = s.enumOf<Provider>(Provider);
