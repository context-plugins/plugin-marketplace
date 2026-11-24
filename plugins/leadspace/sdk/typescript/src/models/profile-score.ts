import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { scoreSchema, type Score } from "./score.js";

export type ProfileScore = {
  profileName?: string;
  score?: Score;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const profileScoreSchema: Schema<ProfileScore> = s.object<ProfileScore>(
  {
    profileName: s.optional(s.string()),
    score: s.optional(s.lazy(() => scoreSchema)),
    _keysMap: {
      profileName: "profile_name",
    },
  },
  { additionalProperties: s.json() },
);
