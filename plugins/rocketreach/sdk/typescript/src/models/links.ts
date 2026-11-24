import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Social media links for the company */
export type Links = {
  facebook?: string;
  twitter?: string;
  linkedin?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const linksSchema: Schema<Links> = s.object<Links>(
  {
    facebook: s.optional(s.string()),
    twitter: s.optional(s.string()),
    linkedin: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
