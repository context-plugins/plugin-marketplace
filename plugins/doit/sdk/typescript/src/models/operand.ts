import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether the threshold applies to each value (default) or the series total. Same field as the DoiT
 * Console metric filter `operand` (`OperandSingleValue` / `OperandSeriesTotal`). On input, omitted
 * defaults to `single_value`. GET responses echo the effective value (`single_value` or
 * `series_total`).
 */
export const Operand = {
  SingleValue: "single_value",
  SeriesTotal: "series_total",
} as const;
export type Operand = (typeof Operand)[keyof typeof Operand] | (string & {});

export const operandSchema: EnumSchema<Operand> = s.enumOf<Operand>(Operand);
