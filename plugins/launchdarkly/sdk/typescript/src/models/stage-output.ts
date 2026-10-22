import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { actionOutputSchema, type ActionOutput } from "./action-output.js";
import { conditionOutputSchema, type ConditionOutput } from "./condition-output.js";
import { executionOutputSchema, type ExecutionOutput } from "./execution-output.js";

export type StageOutput = {
  /** The ID of this stage */
  id: string;
  /** The stage name */
  name?: string;
  /** An array of conditions for the stage */
  conditions: ConditionOutput[];
  action: ActionOutput;
  execution: ExecutionOutput;
};

export const stageOutputSchema: Schema<StageOutput> = s.object<StageOutput>({
  id: s.string(),
  name: s.optional(s.string()),
  conditions: s.array(s.lazy(() => conditionOutputSchema)),
  action: actionOutputSchema,
  execution: executionOutputSchema,
  _keysMap: {
    id: "_id",
    execution: "_execution",
  },
});
