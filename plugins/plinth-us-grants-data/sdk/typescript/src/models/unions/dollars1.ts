import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Dollars1 = number;

export const dollars1Schema: Schema<Dollars1> = s.of<Dollars1>(s.union([s.int()]));
