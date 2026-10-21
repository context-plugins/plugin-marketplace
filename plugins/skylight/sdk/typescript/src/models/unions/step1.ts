import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Optional step size for scroll movements. If not provided, movement will be continuous. */
export type Step1 = number;

export const step1Schema: Schema<Step1> = s.of<Step1>(s.union([s.int()]));
