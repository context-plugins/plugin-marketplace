import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Outcome status of the execution. */
export const StatusContentstackAutomateManagementExecutionLogsApi = {
  Success: "success",
  Failure: "failure",
  Partial: "partial",
} as const;
export type StatusContentstackAutomateManagementExecutionLogsApi =
  | (typeof StatusContentstackAutomateManagementExecutionLogsApi)[keyof typeof StatusContentstackAutomateManagementExecutionLogsApi]
  | (string & {});

export const statusContentstackAutomateManagementExecutionLogsApiSchema: EnumSchema<StatusContentstackAutomateManagementExecutionLogsApi> =
  s.enumOf<StatusContentstackAutomateManagementExecutionLogsApi>(
    StatusContentstackAutomateManagementExecutionLogsApi,
  );
