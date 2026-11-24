import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A person referenced in a LinkedIn activity intent post (author or mention). */
export type LinkedinActivityIntentPerson = {
  /** Lusha contact ID, or null if the person couldn't be resolved to a Lusha record. */
  id?: string | null;
  fullName?: string;
  linkedinUrl?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const linkedinActivityIntentPersonSchema: Schema<LinkedinActivityIntentPerson> =
  s.object<LinkedinActivityIntentPerson>(
    {
      id: s.optionalNullable(s.string()),
      fullName: s.optional(s.string()),
      linkedinUrl: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
