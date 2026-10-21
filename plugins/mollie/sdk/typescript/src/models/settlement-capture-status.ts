import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The capture's status. Settlement captures always have a status of `succeeded`. */
export const SettlementCaptureStatus = {
  Succeeded: "succeeded",
} as const;
export type SettlementCaptureStatus =
  | (typeof SettlementCaptureStatus)[keyof typeof SettlementCaptureStatus]
  | (string & {});

export const settlementCaptureStatusSchema: EnumSchema<SettlementCaptureStatus> =
  s.enumOf<SettlementCaptureStatus>(SettlementCaptureStatus);
