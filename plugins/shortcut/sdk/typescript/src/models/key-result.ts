import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { keyResultValueSchema, type KeyResultValue } from "./key-result-value.js";
import { type3Schema, type Type3 } from "./type3.js";

export type KeyResult = {
  /** The ID of the Key Result. */
  id: string;
  /** The name of the Key Result. */
  name: string;
  /** The Objective to which this Key Result belongs. */
  objectiveId: number;
  /** The type of the Key Result (numeric, percent, or boolean). */
  type: Type3;
  /** The starting value of the Key Result. */
  initialObservedValue: KeyResultValue;
  /** The starting value of the Key Result. */
  currentObservedValue: KeyResultValue;
  /** The starting value of the Key Result. */
  currentTargetValue: KeyResultValue;
  /** The integer percentage of progress toward completion of the Key Result. */
  progress: number;
};

export const keyResultSchema: Schema<KeyResult> = s.object<KeyResult>({
  id: s.string(),
  name: s.string(),
  objectiveId: s.int(),
  type: type3Schema,
  initialObservedValue: keyResultValueSchema,
  currentObservedValue: keyResultValueSchema,
  currentTargetValue: keyResultValueSchema,
  progress: s.int(),
  _keysMap: {
    objectiveId: "objective_id",
    initialObservedValue: "initial_observed_value",
    currentObservedValue: "current_observed_value",
    currentTargetValue: "current_target_value",
  },
});
