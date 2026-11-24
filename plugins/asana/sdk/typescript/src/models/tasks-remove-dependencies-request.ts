import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  modifyDependenciesRequestSchema,
  type ModifyDependenciesRequest,
} from "./modify-dependencies-request.js";

export type TasksRemoveDependenciesRequest = {
  data?: ModifyDependenciesRequest;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tasksRemoveDependenciesRequestSchema: Schema<TasksRemoveDependenciesRequest> =
  s.object<TasksRemoveDependenciesRequest>(
    {
      data: s.optional(s.lazy(() => modifyDependenciesRequestSchema)),
    },
    { additionalProperties: s.json() },
  );
