import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { responseViewSchema, type ResponseView } from "./response-view.js";

/** Request message for forcing a task to run now using RunTask. */
export type RunTaskRequest = {
  /**
   * The response_view specifies which subset of the Task will be returned. By default response_view
   * is BASIC; not all information is retrieved by default because some data, such as payloads,
   * might be desirable to return only when needed because of its large size or because of the
   * sensitivity of data that it contains. Authorization for FULL requires
   * `cloudtasks.tasks.fullView` [Google IAM](https://cloud.google.com/iam/) permission on the Task
   * resource.
   */
  responseView?: ResponseView;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const runTaskRequestSchema: Schema<RunTaskRequest> = s.object<RunTaskRequest>(
  {
    responseView: s.optional(s.lazy(() => responseViewSchema)),
  },
  { additionalProperties: s.json() },
);
