import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Document Scan status. */
export const ScanStatus = {
  NotScanned: "NOT_SCANNED",
  Clean: "CLEAN",
  Infected: "INFECTED",
  InQueue: "IN_QUEUE",
  Rejected: "REJECTED",
  Undefined: "UNDEFINED",
} as const;
export type ScanStatus = (typeof ScanStatus)[keyof typeof ScanStatus] | (string & {});

export const scanStatusSchema: EnumSchema<ScanStatus> = s.enumOf<ScanStatus>(ScanStatus);
