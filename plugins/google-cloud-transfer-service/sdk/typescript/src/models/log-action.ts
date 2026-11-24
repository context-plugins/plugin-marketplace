import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const LogAction = {
  LoggableActionUnspecified: "LOGGABLE_ACTION_UNSPECIFIED",
  Find: "FIND",
  Delete: "DELETE",
  Copy: "COPY",
} as const;
export type LogAction = (typeof LogAction)[keyof typeof LogAction] | (string & {});

export const logActionSchema: EnumSchema<LogAction> = s.enumOf<LogAction>(LogAction);
