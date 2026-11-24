import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type StartDateMonth = number | string | null;

export const startDateMonthSchema: Schema<StartDateMonth> = s.of<StartDateMonth>(
  s.nullable(s.union([s.float64(), s.string()])),
);
