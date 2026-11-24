import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Grants1 = number;

export const grants1Schema: Schema<Grants1> = s.of<Grants1>(s.union([s.int()]));
