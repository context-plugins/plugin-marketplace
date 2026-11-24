import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Current state of a single cell's data. `no_data` means the run succeeded but found nothing —
 * distinct from `failed`, which means the run itself errored.
 */
export const CellStatus = {
  NotRun: "not_run",
  Processing: "processing",
  Success: "success",
  NoData: "no_data",
  Failed: "failed",
} as const;
export type CellStatus = (typeof CellStatus)[keyof typeof CellStatus] | (string & {});

export const cellStatusSchema: EnumSchema<CellStatus> = s.enumOf<CellStatus>(CellStatus);
