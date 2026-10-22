import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Optional step size for drag movements. If not provided, movement will be continuous. */
export type Step = number;

export const stepSchema: Schema<Step> = s.of<Step>(s.union([s.int()]));
