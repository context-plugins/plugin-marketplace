import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Lte = number;

export const lteSchema: Schema<Lte> = s.of<Lte>(s.union([s.int(), s.float64()]));
