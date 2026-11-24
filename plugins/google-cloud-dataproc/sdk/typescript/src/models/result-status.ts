import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Output only. The migration result status for the database. This is only set if the migration is
 * not a dry run.
 */
export const ResultStatus = {
  StateUnspecified: "STATE_UNSPECIFIED",
  Succeeded: "SUCCEEDED",
  Failed: "FAILED",
  Skipped: "SKIPPED",
} as const;
export type ResultStatus = (typeof ResultStatus)[keyof typeof ResultStatus] | (string & {});

export const resultStatusSchema: EnumSchema<ResultStatus> = s.enumOf<ResultStatus>(ResultStatus);
