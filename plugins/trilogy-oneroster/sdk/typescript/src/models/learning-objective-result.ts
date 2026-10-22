import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LearningObjectiveResult = {
  learningObjectiveId: string;
  score?: number;
  textScore?: string;
};

export const learningObjectiveResultSchema: Schema<LearningObjectiveResult> =
  s.object<LearningObjectiveResult>({
    learningObjectiveId: s.string(),
    score: s.optional(s.float64()),
    textScore: s.optional(s.string()),
  });
