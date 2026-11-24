import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Provider1 = {
  Notion: "notion",
  Slack: "slack",
  Hubspot: "hubspot",
  Discord: "discord",
} as const;
export type Provider1 = (typeof Provider1)[keyof typeof Provider1] | (string & {});

export const provider1Schema: EnumSchema<Provider1> = s.enumOf<Provider1>(Provider1);
