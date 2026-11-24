import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type DateYear1 = number | string;

export const dateYear1Schema: Schema<DateYear1> = s.of<DateYear1>(s.union([s.float64(), s.string()]));
