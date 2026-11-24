import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Final status of the execution. */
export const StatusBoomiPlatformRestExecutionApi = {
  Complete: "COMPLETE",
  Error: "ERROR",
  Inprocess: "INPROCESS",
  Aborted: "ABORTED",
  Discarded: "DISCARDED",
} as const;
export type StatusBoomiPlatformRestExecutionApi =
  | (typeof StatusBoomiPlatformRestExecutionApi)[keyof typeof StatusBoomiPlatformRestExecutionApi]
  | (string & {});

export const statusBoomiPlatformRestExecutionApiSchema: EnumSchema<StatusBoomiPlatformRestExecutionApi> =
  s.enumOf<StatusBoomiPlatformRestExecutionApi>(StatusBoomiPlatformRestExecutionApi);
