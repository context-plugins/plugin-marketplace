import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Minimum1 = string | number;

export const minimum1Schema: Schema<Minimum1> = s.of<Minimum1>(s.union([s.string(), s.int()]));
