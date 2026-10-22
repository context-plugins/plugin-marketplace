import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { format12Schema, type Format12 } from "./format12.js";

export type NumerifyFormatFix = {
  /** Numeric format to apply after type conversion. */
  format?: Format12;
  /** Number of digits after the decimal point, between 0 and 20. If left blank, defaults to 2. */
  digits?: number;
};

export const numerifyFormatFixSchema: Schema<NumerifyFormatFix> = s.object<NumerifyFormatFix>({
  format: s.optional(s.lazy(() => format12Schema)),
  digits: s.optional(s.float64()),
});
