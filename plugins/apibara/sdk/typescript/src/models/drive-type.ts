import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DriveType = {
  Awd: "AWD",
  Fwd: "FWD",
  Rwd: "RWD",
} as const;
export type DriveType = (typeof DriveType)[keyof typeof DriveType] | (string & {});

export const driveTypeSchema: EnumSchema<DriveType> = s.enumOf<DriveType>(DriveType);
