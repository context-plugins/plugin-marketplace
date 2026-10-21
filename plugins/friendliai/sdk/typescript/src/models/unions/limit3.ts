import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Limit3 = number;

export const limit3Schema: Schema<Limit3> = s.of<Limit3>(s.union([s.int()]));
