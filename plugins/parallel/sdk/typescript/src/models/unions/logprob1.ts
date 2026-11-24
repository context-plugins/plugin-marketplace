import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Logprob1 = number;

export const logprob1Schema: Schema<Logprob1> = s.of<Logprob1>(s.union([s.float64()]));
