import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Lifecycle state of a scan. Poll until status is 'completed' or 'failed'. */
export const StatusAgentReadyScansApi = {
  Running: "running",
  Completed: "completed",
  Failed: "failed",
} as const;
export type StatusAgentReadyScansApi =
  | (typeof StatusAgentReadyScansApi)[keyof typeof StatusAgentReadyScansApi]
  | (string & {});

export const statusAgentReadyScansApiSchema: EnumSchema<StatusAgentReadyScansApi> =
  s.enumOf<StatusAgentReadyScansApi>(StatusAgentReadyScansApi);
