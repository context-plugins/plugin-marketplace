import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Year = string | number;

export const yearSchema: Schema<Year> = s.of<Year>(s.union([s.string(), s.float64()]));
