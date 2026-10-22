import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LearningObjectiveSet1 = {
  source: string;
  learningObjectiveIds: string[];
};

export const learningObjectiveSet1Schema: Schema<LearningObjectiveSet1> = s.object<LearningObjectiveSet1>({
  source: s.string(),
  learningObjectiveIds: s.array(s.string()),
});
