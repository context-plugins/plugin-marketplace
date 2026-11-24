import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The status of the specified custom language model. */
export const ModelStatus2 = {
  InProgress: "IN_PROGRESS",
  Failed: "FAILED",
  Completed: "COMPLETED",
} as const;
export type ModelStatus2 = (typeof ModelStatus2)[keyof typeof ModelStatus2] | (string & {});

export const modelStatus2Schema: EnumSchema<ModelStatus2> = s.enumOf<ModelStatus2>(ModelStatus2);
