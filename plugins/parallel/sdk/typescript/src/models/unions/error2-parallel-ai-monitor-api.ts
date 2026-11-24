import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Error message if the tool call failed. */
export type Error2ParallelAiMonitorApi = string;

export const error2ParallelAiMonitorApiSchema: Schema<Error2ParallelAiMonitorApi> =
  s.of<Error2ParallelAiMonitorApi>(s.union([s.string()]));
