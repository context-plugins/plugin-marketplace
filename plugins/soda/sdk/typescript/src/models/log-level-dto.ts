import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const LogLevelDto = {
  Debug: "debug",
  Info: "info",
  Warning: "warning",
  Error: "error",
} as const;
export type LogLevelDto = (typeof LogLevelDto)[keyof typeof LogLevelDto] | (string & {});

export const logLevelDtoSchema: EnumSchema<LogLevelDto> = s.enumOf<LogLevelDto>(LogLevelDto);
