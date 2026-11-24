import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const LogActionState = {
  LoggableActionStateUnspecified: "LOGGABLE_ACTION_STATE_UNSPECIFIED",
  Succeeded: "SUCCEEDED",
  Failed: "FAILED",
  Skipped: "SKIPPED",
} as const;
export type LogActionState = (typeof LogActionState)[keyof typeof LogActionState] | (string & {});

export const logActionStateSchema: EnumSchema<LogActionState> = s.enumOf<LogActionState>(LogActionState);
