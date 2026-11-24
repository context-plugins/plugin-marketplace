import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { taskDuplicateRequestSchema, type TaskDuplicateRequest } from "./task-duplicate-request.js";

export type TasksDuplicateRequest = {
  data?: TaskDuplicateRequest;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tasksDuplicateRequestSchema: Schema<TasksDuplicateRequest> = s.object<TasksDuplicateRequest>(
  {
    data: s.optional(s.lazy(() => taskDuplicateRequestSchema)),
  },
  { additionalProperties: s.json() },
);
