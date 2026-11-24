import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ChargeType = {
  OneTime: "oneTime",
  Recurring: "recurring",
  Usage: "usage",
  SeatBased: "seatBased",
} as const;
export type ChargeType = (typeof ChargeType)[keyof typeof ChargeType] | (string & {});

export const chargeTypeSchema: EnumSchema<ChargeType> = s.enumOf<ChargeType>(ChargeType);
