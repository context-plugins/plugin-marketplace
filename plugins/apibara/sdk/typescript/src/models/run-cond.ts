import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RunCond = {
  RunDriveVerified: "Run & Drive Verified",
  RunsAndDrives: "RUNS AND DRIVES",
  EngineStartProgram: "ENGINE START PROGRAM",
  StationaryNoInformation: "STATIONARY / NO INFORMATION",
  Stationary: "STATIONARY",
  NoInformation: "NO INFORMATION",
} as const;
export type RunCond = (typeof RunCond)[keyof typeof RunCond] | (string & {});

export const runCondSchema: EnumSchema<RunCond> = s.enumOf<RunCond>(RunCond);
