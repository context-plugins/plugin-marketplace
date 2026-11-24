import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the specified custom language model. When the status displays as COMPLETED the
 * model is ready for use.
 */
export const ModelStatus1 = {
  InProgress: "IN_PROGRESS",
  Failed: "FAILED",
  Completed: "COMPLETED",
} as const;
export type ModelStatus1 = (typeof ModelStatus1)[keyof typeof ModelStatus1] | (string & {});

export const modelStatus1Schema: EnumSchema<ModelStatus1> = s.enumOf<ModelStatus1>(ModelStatus1);
