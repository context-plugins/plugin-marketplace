import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ActionOnFailedPrimaryWorkers = {
  FailureActionUnspecified: "FAILURE_ACTION_UNSPECIFIED",
  NoAction: "NO_ACTION",
  Delete: "DELETE",
} as const;
export type ActionOnFailedPrimaryWorkers =
  | (typeof ActionOnFailedPrimaryWorkers)[keyof typeof ActionOnFailedPrimaryWorkers]
  | (string & {});

export const actionOnFailedPrimaryWorkersSchema: EnumSchema<ActionOnFailedPrimaryWorkers> =
  s.enumOf<ActionOnFailedPrimaryWorkers>(ActionOnFailedPrimaryWorkers);
