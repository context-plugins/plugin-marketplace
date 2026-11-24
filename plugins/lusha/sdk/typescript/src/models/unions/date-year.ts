import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type DateYear = number | string;

export const dateYearSchema: Schema<DateYear> = s.of<DateYear>(s.union([s.int(), s.string()]));
