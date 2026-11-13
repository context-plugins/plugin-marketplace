import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Maximum1 = string | number;

export const maximum1Schema: Schema<Maximum1> = s.of<Maximum1>(s.union([s.string(), s.int()]));
