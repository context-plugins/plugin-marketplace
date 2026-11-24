import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * If true, the first execution returns a sample of recent historical events matching the query
 * (preview only — not exhaustive). If false or omitted, only events from the monitor's creation
 * date onward are returned. Subsequent executions are always incremental.
 */
export type IncludeBackfill = boolean;

export const includeBackfillSchema: Schema<IncludeBackfill> = s.of<IncludeBackfill>(s.union([s.boolean()]));
