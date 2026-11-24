import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  warningParallelAiMonitorApiSchema,
  type WarningParallelAiMonitorApi,
} from "../warning-parallel-ai-monitor-api.js";

/** Execution caveats for this page of events, e.g. compute limits. */
export type WarningsParallelAiMonitorApi = WarningParallelAiMonitorApi[];

export const warningsParallelAiMonitorApiSchema: Schema<WarningsParallelAiMonitorApi> =
  s.of<WarningsParallelAiMonitorApi>(s.union([s.array(s.lazy(() => warningParallelAiMonitorApiSchema))]));
