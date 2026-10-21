import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { reportSchema, type Report } from "../report.js";

export type Report1 = Report;

export const report1Schema: Schema<Report1> = s.of<Report1>(s.union([s.lazy(() => reportSchema)]));
