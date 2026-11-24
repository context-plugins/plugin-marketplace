import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { modifyDependentsRequestSchema, type ModifyDependentsRequest } from "./modify-dependents-request.js";

export type TasksRemoveDependentsRequest = {
  /** A set of dependent tasks. */
  data?: ModifyDependentsRequest;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tasksRemoveDependentsRequestSchema: Schema<TasksRemoveDependentsRequest> =
  s.object<TasksRemoveDependentsRequest>(
    {
      data: s.optional(s.lazy(() => modifyDependentsRequestSchema)),
    },
    { additionalProperties: s.json() },
  );
