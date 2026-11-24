import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const OddsFormat = {
  Decimal: "decimal",
  American: "american",
} as const;
export type OddsFormat = (typeof OddsFormat)[keyof typeof OddsFormat] | (string & {});

export const oddsFormatSchema: EnumSchema<OddsFormat> = s.enumOf<OddsFormat>(OddsFormat);
