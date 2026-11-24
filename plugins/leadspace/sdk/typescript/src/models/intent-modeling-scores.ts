import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type IntentModelingScores = {
  projectName?: string;
  /** By default 0-1 No Intent, 1-75 Low, 75-95 Medium, 95-100 High */
  projectScore?: string;
  surgingTopics?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const intentModelingScoresSchema: Schema<IntentModelingScores> = s.object<IntentModelingScores>(
  {
    projectName: s.optional(s.string()),
    projectScore: s.optional(s.string()),
    surgingTopics: s.optional(s.array(s.string())),
    _keysMap: {
      projectName: "project_name",
      projectScore: "project_score",
      surgingTopics: "surging_topics",
    },
  },
  { additionalProperties: s.json() },
);
