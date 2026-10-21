import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type MaxBatchSize = number;

export const maxBatchSizeSchema: Schema<MaxBatchSize> = s.of<MaxBatchSize>(s.union([s.int()]));
