import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  modifyDependenciesRequestSchema,
  type ModifyDependenciesRequest,
} from "./modify-dependencies-request.js";

export type TasksAddDependenciesRequest = {
  data?: ModifyDependenciesRequest;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tasksAddDependenciesRequestSchema: Schema<TasksAddDependenciesRequest> =
  s.object<TasksAddDependenciesRequest>(
    {
      data: s.optional(s.lazy(() => modifyDependenciesRequestSchema)),
    },
    { additionalProperties: s.json() },
  );
