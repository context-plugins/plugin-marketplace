import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SocialLinks1 = {
  linkedin?: string;
  /**
   * Company Facebook page URL. Included automatically when available - no `reveal` entry needed.
   * Omitted from the response when not available (never returned empty). Free field - no credits
   * charged. Available on all plans.
   */
  facebook?: string | null;
  /**
   * Company X (formerly Twitter) profile URL. Included automatically when available - no `reveal`
   * entry needed. Omitted from the response when not available (never returned empty). Free field -
   * no credits charged. Available on all plans.
   */
  x?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const socialLinks1Schema: Schema<SocialLinks1> = s.object<SocialLinks1>(
  {
    linkedin: s.optional(s.string()),
    facebook: s.optionalNullable(s.string()),
    x: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
