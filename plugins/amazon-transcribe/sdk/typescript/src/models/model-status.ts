import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of your custom language model. When the status displays as COMPLETED, your model is
 * ready to use.
 */
export const ModelStatus = {
  InProgress: "IN_PROGRESS",
  Failed: "FAILED",
  Completed: "COMPLETED",
} as const;
export type ModelStatus = (typeof ModelStatus)[keyof typeof ModelStatus] | (string & {});

export const modelStatusSchema: EnumSchema<ModelStatus> = s.enumOf<ModelStatus>(ModelStatus);
