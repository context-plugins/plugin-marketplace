import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** An active experience entry in the manifest with variant assignment. */
export type ManifestExperience = {
  /** Unique identifier of the experience. */
  experienceUid?: string;
  /** Short identifier of the experience for use in content querying. */
  experienceShortUid?: string;
  /** Unique identifier of the variant assigned to this user. */
  variantUid?: string;
  /** Short identifier of the variant for use in content querying. */
  variantShortUid?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const manifestExperienceSchema: Schema<ManifestExperience> = s.object<ManifestExperience>(
  {
    experienceUid: s.optional(s.string()),
    experienceShortUid: s.optional(s.string()),
    variantUid: s.optional(s.string()),
    variantShortUid: s.optional(s.string()),
    _keysMap: {
      experienceUid: "experience_uid",
      experienceShortUid: "experience_short_uid",
      variantUid: "variant_uid",
      variantShortUid: "variant_short_uid",
    },
  },
  { additionalProperties: s.json() },
);
