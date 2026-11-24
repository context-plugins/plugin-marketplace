import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Gte = number;

export const gteSchema: Schema<Gte> = s.of<Gte>(s.union([s.int(), s.float64()]));
