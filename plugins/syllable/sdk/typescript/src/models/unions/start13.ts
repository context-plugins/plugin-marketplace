import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Start13 = number;

export const start13Schema: Schema<Start13> = s.of<Start13>(s.union([s.float64()]));
