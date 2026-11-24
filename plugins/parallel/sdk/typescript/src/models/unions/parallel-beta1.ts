import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ParallelBeta1 = string;

export const parallelBeta1Schema: Schema<ParallelBeta1> = s.of<ParallelBeta1>(s.union([s.string()]));
