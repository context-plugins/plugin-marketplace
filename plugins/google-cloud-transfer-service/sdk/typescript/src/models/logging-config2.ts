import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { logActionStateSchema, type LogActionState } from "./log-action-state.js";
import { logActionSchema, type LogAction } from "./log-action.js";

/** Logging configuration. */
export type LoggingConfig2 = {
  /** Specifies the actions to be logged. If empty, no logs are generated. */
  logActions?: LogAction[];
  /** States in which `log_actions` are logged. If empty, no logs are generated. */
  logActionStates?: LogActionState[];
  /**
   * For PosixFilesystem transfers, enables [file system transfer
   * logs](https://cloud.google.com/storage-transfer/docs/on-prem-transfer-log-format) instead of,
   * or in addition to, Cloud Logging. This option ignores [LoggableAction] and
   * [LoggableActionState]. If these are set, Cloud Logging will also be enabled for this transfer.
   */
  enableOnpremGcsTransferLogs?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const loggingConfig2Schema: Schema<LoggingConfig2> = s.object<LoggingConfig2>(
  {
    logActions: s.optional(s.array(s.lazy(() => logActionSchema))),
    logActionStates: s.optional(s.array(s.lazy(() => logActionStateSchema))),
    enableOnpremGcsTransferLogs: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
