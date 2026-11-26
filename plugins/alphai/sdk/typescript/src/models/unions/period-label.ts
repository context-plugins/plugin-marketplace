import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type PeriodLabel = string;

export const periodLabelSchema: Schema<PeriodLabel> = s.of<PeriodLabel>(s.union([s.string()]));
