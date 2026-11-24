import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Output received from the tool call, if successful. */
export type ContentParallelAiMonitorApi = string;

export const contentParallelAiMonitorApiSchema: Schema<ContentParallelAiMonitorApi> =
  s.of<ContentParallelAiMonitorApi>(s.union([s.string()]));
