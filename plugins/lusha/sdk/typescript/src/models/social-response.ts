import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SocialResponse = {
  linkedin?: string;
  crunchbase?: string;
  twitter?: string;
  facebook?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const socialResponseSchema: Schema<SocialResponse> = s.object<SocialResponse>(
  {
    linkedin: s.optional(s.string()),
    crunchbase: s.optional(s.string()),
    twitter: s.optional(s.string()),
    facebook: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
