import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ApplyStatus = {
  InProgress: "InProgress",
  Completed: "Completed",
  Error: "Error",
} as const;
export type ApplyStatus = (typeof ApplyStatus)[keyof typeof ApplyStatus] | (string & {});

export const applyStatusSchema: EnumSchema<ApplyStatus> = s.enumOf<ApplyStatus>(ApplyStatus);
