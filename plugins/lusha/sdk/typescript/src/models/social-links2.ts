import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SocialLinks2 = {
  linkedin?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const socialLinks2Schema: Schema<SocialLinks2> = s.object<SocialLinks2>(
  {
    linkedin: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
