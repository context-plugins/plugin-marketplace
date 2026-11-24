import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  type1ParallelAiMonitorApiSchema,
  type Type1ParallelAiMonitorApi,
} from "./type1-parallel-ai-monitor-api.js";
import { detailSchema, type Detail } from "./unions/detail.js";

/** Human-readable message for a task. */
export type WarningParallelAiMonitorApi = {
  /**
   * Type of warning. Note that adding new warning types is considered a backward-compatible change.
   */
  type: Type1ParallelAiMonitorApi;
  /** Human-readable message. */
  message: string;
  /** Optional detail supporting the warning. */
  detail?: Detail;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const warningParallelAiMonitorApiSchema: Schema<WarningParallelAiMonitorApi> =
  s.object<WarningParallelAiMonitorApi>(
    {
      type: type1ParallelAiMonitorApiSchema,
      message: s.string(),
      detail: s.optional(s.lazy(() => detailSchema)),
    },
    { additionalProperties: s.json() },
  );
