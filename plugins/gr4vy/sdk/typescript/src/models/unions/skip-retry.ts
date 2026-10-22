import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** When set to true, prevents retries on failed transactions. */
export type SkipRetry = boolean;

export const skipRetrySchema: Schema<SkipRetry> = s.of<SkipRetry>(s.union([s.boolean()]));
