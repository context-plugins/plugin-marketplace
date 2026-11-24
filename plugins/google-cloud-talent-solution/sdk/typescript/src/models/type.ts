import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Compensation type. Default is CompensationType.COMPENSATION_TYPE_UNSPECIFIED. */
export const Type = {
  CompensationTypeUnspecified: "COMPENSATION_TYPE_UNSPECIFIED",
  Base: "BASE",
  Bonus: "BONUS",
  SigningBonus: "SIGNING_BONUS",
  Equity: "EQUITY",
  ProfitSharing: "PROFIT_SHARING",
  Commissions: "COMMISSIONS",
  Tips: "TIPS",
  OtherCompensationType: "OTHER_COMPENSATION_TYPE",
} as const;
export type Type = (typeof Type)[keyof typeof Type] | (string & {});

export const typeSchema: EnumSchema<Type> = s.enumOf<Type>(Type);
