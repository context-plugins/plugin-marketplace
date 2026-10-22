import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type End = number;

export const endSchema: Schema<End> = s.of<End>(s.union([s.float64()]));
