import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { format1Schema, type Format1 } from "./format1.js";

export type NumerifyFormatNone = {
  /** Numeric format to apply after type conversion. */
  format?: Format1;
};

export const numerifyFormatNoneSchema: Schema<NumerifyFormatNone> = s.object<NumerifyFormatNone>({
  format: s.optional(s.lazy(() => format1Schema)),
});
