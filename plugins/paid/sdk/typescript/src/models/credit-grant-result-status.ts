import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Credit grants are active immediately when created. */
export const CreditGrantResultStatus = {
  Active: "active",
} as const;
export type CreditGrantResultStatus =
  | (typeof CreditGrantResultStatus)[keyof typeof CreditGrantResultStatus]
  | (string & {});

export const creditGrantResultStatusSchema: EnumSchema<CreditGrantResultStatus> =
  s.enumOf<CreditGrantResultStatus>(CreditGrantResultStatus);
