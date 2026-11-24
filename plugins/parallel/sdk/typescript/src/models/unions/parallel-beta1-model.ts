import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { parallelBetaSchema } from "../parallel-beta.js";

/** Model for the parallel-beta header. */
export type ParallelBeta1Model = string;

export const parallelBeta1ModelSchema: Schema<ParallelBeta1Model> = s.of<ParallelBeta1Model>(
  s.union([s.lazy(() => parallelBetaSchema), s.string()]),
);
