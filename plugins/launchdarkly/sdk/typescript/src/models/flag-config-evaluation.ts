import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FlagConfigEvaluation = {
  contextKinds?: string[];
};

export const flagConfigEvaluationSchema: Schema<FlagConfigEvaluation> = s.object<FlagConfigEvaluation>({
  contextKinds: s.optional(s.array(s.string())),
});
