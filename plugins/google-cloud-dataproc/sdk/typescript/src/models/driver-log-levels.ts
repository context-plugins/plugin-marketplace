import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DriverLogLevels = {
  LevelUnspecified: "LEVEL_UNSPECIFIED",
  All: "ALL",
  Trace: "TRACE",
  Debug: "DEBUG",
  Info: "INFO",
  Warn: "WARN",
  Error: "ERROR",
  Fatal: "FATAL",
  Off: "OFF",
} as const;
export type DriverLogLevels = (typeof DriverLogLevels)[keyof typeof DriverLogLevels] | (string & {});

export const driverLogLevelsSchema: EnumSchema<DriverLogLevels> = s.enumOf<DriverLogLevels>(DriverLogLevels);
