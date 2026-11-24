import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type DateDay = number | string;

export const dateDaySchema: Schema<DateDay> = s.of<DateDay>(s.union([s.float64(), s.string()]));
