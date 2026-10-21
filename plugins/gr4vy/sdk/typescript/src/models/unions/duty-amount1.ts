import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Total charges for import/export duties. */
export type DutyAmount1 = number;

export const dutyAmount1Schema: Schema<DutyAmount1> = s.of<DutyAmount1>(s.union([s.int()]));
