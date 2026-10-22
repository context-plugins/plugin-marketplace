import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { holidaySchema, type Holiday } from "../holiday.js";

/**
 * Named holidays for the rule. Matches if the current date is any of them, resolved in the assigned
 * agent timezone, so no per-year rule is needed. Accepts the same names the \@hours rule engine
 * accepts and stores them canonically.
 */
export type Holidays = Holiday[];

export const holidaysSchema: Schema<Holidays> = s.of<Holidays>(
  s.union([s.array(s.lazy(() => holidaySchema))]),
);
