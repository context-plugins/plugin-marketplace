import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Metadata1 = string | number | boolean;

export const metadata1Schema: Schema<Metadata1> = s.of<Metadata1>(
  s.union([s.string(), s.int(), s.float64(), s.boolean()]),
);
