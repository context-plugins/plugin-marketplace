import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type DateMonth1 = number | string;

export const dateMonth1Schema: Schema<DateMonth1> = s.of<DateMonth1>(s.union([s.float64(), s.string()]));
