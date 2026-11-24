import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type StartDateYear = number | string | null;

export const startDateYearSchema: Schema<StartDateYear> = s.of<StartDateYear>(
  s.nullable(s.union([s.float64(), s.string()])),
);
