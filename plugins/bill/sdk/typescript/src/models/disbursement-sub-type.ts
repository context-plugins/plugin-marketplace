import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** PayBy. */
export const DisbursementSubType = {
  None: "NONE",
  Wire: "WIRE",
  Iach: "IACH",
  Local: "LOCAL",
  Multiple: "MULTIPLE",
  Ach: "ACH",
  Undefined: "UNDEFINED",
} as const;
export type DisbursementSubType =
  | (typeof DisbursementSubType)[keyof typeof DisbursementSubType]
  | (string & {});

export const disbursementSubTypeSchema: EnumSchema<DisbursementSubType> =
  s.enumOf<DisbursementSubType>(DisbursementSubType);
