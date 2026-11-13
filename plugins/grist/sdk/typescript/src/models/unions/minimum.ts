import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Minimum = string | number;

export const minimumSchema: Schema<Minimum> = s.of<Minimum>(s.union([s.string(), s.float64()]));
