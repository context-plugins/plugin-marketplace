import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  type2ParallelAiTasksApiSchema,
  type Type2ParallelAiTasksApi,
} from "./type2-parallel-ai-tasks-api.js";
import { detailSchema, type Detail } from "./unions/detail.js";

/** Human-readable message for a task. */
export type WarningParallelAiTasksApi = {
  /**
   * Type of warning. Note that adding new warning types is considered a backward-compatible change.
   */
  type: Type2ParallelAiTasksApi;
  /** Human-readable message. */
  message: string;
  /** Optional detail supporting the warning. */
  detail?: Detail;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const warningParallelAiTasksApiSchema: Schema<WarningParallelAiTasksApi> =
  s.object<WarningParallelAiTasksApi>(
    {
      type: type2ParallelAiTasksApiSchema,
      message: s.string(),
      detail: s.optional(s.lazy(() => detailSchema)),
    },
    { additionalProperties: s.json() },
  );
