import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { learningObjectiveResultSchema, type LearningObjectiveResult } from "./learning-objective-result.js";

export type LearningObjectiveSet = {
  source: string;
  learningObjectiveResults: LearningObjectiveResult[];
};

export const learningObjectiveSetSchema: Schema<LearningObjectiveSet> = s.object<LearningObjectiveSet>({
  source: s.string(),
  learningObjectiveResults: s.array(s.lazy(() => learningObjectiveResultSchema)),
});
