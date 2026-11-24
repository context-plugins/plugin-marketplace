import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { manifestExperienceSchema, type ManifestExperience } from "./manifest-experience.js";

/**
 * The personalization manifest containing active experiences and their variant assignments for the
 * current user.
 */
export type Manifest = {
  /** List of active experience objects with assigned variants. */
  experiences?: ManifestExperience[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const manifestSchema: Schema<Manifest> = s.object<Manifest>(
  {
    experiences: s.optional(s.array(s.lazy(() => manifestExperienceSchema))),
  },
  { additionalProperties: s.json() },
);
