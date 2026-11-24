import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Columns2 = string | number | string[];

export const columns2Schema: Schema<Columns2> = s.of<Columns2>(
  s.union([s.string(), s.float64(), s.array(s.string())]),
);
