import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** 10 = Pending 30 = Approve 50 = Suspend 70 = Terminated 90 = Delete */
export const PackageStatus = {
  _10: 10,
  _30: 30,
  _50: 50,
  _70: 70,
  _90: 90,
} as const;
export type PackageStatus = (typeof PackageStatus)[keyof typeof PackageStatus] | (number & {});

export const packageStatusSchema: EnumSchema<PackageStatus> = s.enumOf<PackageStatus>(PackageStatus);
