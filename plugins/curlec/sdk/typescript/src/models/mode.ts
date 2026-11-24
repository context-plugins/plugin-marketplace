import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Transfer mode used by the payer. */
export const Mode = {
  Neft: "NEFT",
  Rtgs: "RTGS",
  Imps: "IMPS",
  Upi: "UPI",
} as const;
export type Mode = (typeof Mode)[keyof typeof Mode] | (string & {});

export const modeSchema: EnumSchema<Mode> = s.enumOf<Mode>(Mode);
