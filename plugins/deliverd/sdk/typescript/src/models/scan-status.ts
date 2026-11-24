import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ScanStatus = {
  Pending: "pending",
  Passed: "passed",
  PassedWithWarnings: "passed_with_warnings",
  Blocked: "blocked",
} as const;
export type ScanStatus = (typeof ScanStatus)[keyof typeof ScanStatus] | (string & {});

export const scanStatusSchema: EnumSchema<ScanStatus> = s.enumOf<ScanStatus>(ScanStatus);
