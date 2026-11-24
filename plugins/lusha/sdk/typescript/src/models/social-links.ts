import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SocialLinks = {
  linkedin?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const socialLinksSchema: Schema<SocialLinks> = s.object<SocialLinks>(
  {
    linkedin: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
