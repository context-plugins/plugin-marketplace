import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { actionInputSchema, type ActionInput } from "./action-input.js";
import { conditionInputSchema, type ConditionInput } from "./condition-input.js";

export type StageInput = {
  /** The stage name */
  name?: string;
  /** Whether to execute the conditions in sequence for the given stage */
  executeConditionsInSequence?: boolean;
  /** An array of conditions for the stage */
  conditions?: ConditionInput[];
  action?: ActionInput;
};

export const stageInputSchema: Schema<StageInput> = s.object<StageInput>({
  name: s.optional(s.string()),
  executeConditionsInSequence: s.optional(s.boolean()),
  conditions: s.optional(s.array(s.lazy(() => conditionInputSchema))),
  action: s.optional(s.lazy(() => actionInputSchema)),
});
