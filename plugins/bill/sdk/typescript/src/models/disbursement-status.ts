import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The enum type for disbursement status. */
export const DisbursementStatus = {
  Schedule: "SCHEDULE",
  Done: "DONE",
  Failed: "FAILED",
  Void: "VOID",
  Hold: "HOLD",
  Fxhold: "FXHOLD",
  Escheated: "ESCHEATED",
  Undefined: "UNDEFINED",
} as const;
export type DisbursementStatus = (typeof DisbursementStatus)[keyof typeof DisbursementStatus] | (string & {});

export const disbursementStatusSchema: EnumSchema<DisbursementStatus> =
  s.enumOf<DisbursementStatus>(DisbursementStatus);
