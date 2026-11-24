import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { profileScoreSchema, type ProfileScore } from "./profile-score.js";

export type Analytics = {
  jobFunctions?: string[];
  technologies?: string[];
  scores?: ProfileScore[];
  maxPositiveScoreProfiles?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const analyticsSchema: Schema<Analytics> = s.object<Analytics>(
  {
    jobFunctions: s.optional(s.array(s.string())),
    technologies: s.optional(s.array(s.string())),
    scores: s.optional(s.array(s.lazy(() => profileScoreSchema))),
    maxPositiveScoreProfiles: s.optional(s.array(s.string())),
    _keysMap: {
      jobFunctions: "job_functions",
      maxPositiveScoreProfiles: "max_positive_score_profiles",
    },
  },
  { additionalProperties: s.json() },
);
