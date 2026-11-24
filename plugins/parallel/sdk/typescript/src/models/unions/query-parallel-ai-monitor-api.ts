import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Updated search query for the monitor. Use this for minor updates to prompts and instructions
 * only. Major changes to the query may lead to unexpected results in change detection, as the
 * monitor compares new results with what was previously seen.
 */
export type QueryParallelAiMonitorApi = string;

export const queryParallelAiMonitorApiSchema: Schema<QueryParallelAiMonitorApi> =
  s.of<QueryParallelAiMonitorApi>(s.union([s.string()]));
