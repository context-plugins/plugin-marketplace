import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { taskSchema, type Task } from "./task.js";

/** Response message for listing tasks using ListTasks. */
export type ListTasksResponse = {
  /** The list of tasks. */
  tasks?: Task[];
  /**
   * A token to retrieve next page of results. To return the next page of results, call ListTasks
   * with this value as the page_token. If the next_page_token is empty, there are no more results.
   */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listTasksResponseSchema: Schema<ListTasksResponse> = s.object<ListTasksResponse>(
  {
    tasks: s.optional(s.array(s.lazy(() => taskSchema))),
    nextPageToken: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
