import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Outcome of a single check. */
export const Status = {
  Pass: "pass",
  Fail: "fail",
  Warn: "warn",
  Error: "error",
} as const;
export type Status = (typeof Status)[keyof typeof Status] | (string & {});

export const statusSchema: EnumSchema<Status> = s.enumOf<Status>(Status);
