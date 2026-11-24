import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A company referenced in a LinkedIn activity intent post. */
export type LinkedinActivityIntentCompanyMention = {
  /** Lusha company ID, or null if the company couldn't be resolved to a Lusha record. */
  id?: string | null;
  name?: string;
  linkedinUrl?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const linkedinActivityIntentCompanyMentionSchema: Schema<LinkedinActivityIntentCompanyMention> =
  s.object<LinkedinActivityIntentCompanyMention>(
    {
      id: s.optionalNullable(s.string()),
      name: s.optional(s.string()),
      linkedinUrl: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
