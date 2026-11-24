import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The board time (`X-Processed-At`). */
export type ProcessedAt1 = string | number;

export const processedAt1Schema: Schema<ProcessedAt1> = s.of<ProcessedAt1>(s.union([s.string(), s.int()]));
