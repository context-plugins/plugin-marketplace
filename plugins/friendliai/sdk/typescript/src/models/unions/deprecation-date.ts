import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Scheduled deprecation date in ISO 8601 UTC (YYYY-MM-DDTHH:00:00Z). The model is inactive once
 * this date has passed.
 */
export type DeprecationDate = string;

export const deprecationDateSchema: Schema<DeprecationDate> = s.of<DeprecationDate>(s.union([s.string()]));
