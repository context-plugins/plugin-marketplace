import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Interval = number;

export const intervalSchema: Schema<Interval> = s.of<Interval>(s.union([s.float64()]));
