import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * `stopped`: the importer refused the bundle or stopped partway, and its report says why; `failed`:
 * the import did not run to an outcome
 */
export const Status1 = {
  Queued: "queued",
  Starting: "starting",
  Running: "running",
  Cancelling: "cancelling",
  Completed: "completed",
  Stopped: "stopped",
  Failed: "failed",
  Cancelled: "cancelled",
} as const;
export type Status1 = (typeof Status1)[keyof typeof Status1] | (string & {});

export const status1Schema: EnumSchema<Status1> = s.enumOf<Status1>(Status1);
