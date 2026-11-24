import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { reportsResponse1Schema, type ReportsResponse1 } from "../reports-response1.js";
import { reportsResponse11Schema, type ReportsResponse11 } from "../reports-response11.js";

export type ReportsResponse12 = ReportsResponse1 | ReportsResponse11;

export const reportsResponse12Schema: Schema<ReportsResponse12> = s.of<ReportsResponse12>(
  s.union([s.lazy(() => reportsResponse1Schema), s.lazy(() => reportsResponse11Schema)]),
);
