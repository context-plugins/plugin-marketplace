import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Tier = {
  WebsiteDeclared: "website_declared",
} as const;
export type Tier = (typeof Tier)[keyof typeof Tier] | (string & {});

export const tierSchema: EnumSchema<Tier> = s.enumOf<Tier>(Tier);
