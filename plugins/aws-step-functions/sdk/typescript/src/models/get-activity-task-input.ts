import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GetActivityTaskInput = {
  /**
   * The Amazon Resource Name (ARN) of the activity to retrieve tasks from (assigned when you create
   * the task using CreateActivity.)
   */
  activityArn: string;
  /**
   * You can provide an arbitrary name in order to identify the worker that the task is assigned to.
   * This name is used when it is logged in the execution history.
   */
  workerName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getActivityTaskInputSchema: Schema<GetActivityTaskInput> = s.object<GetActivityTaskInput>(
  {
    activityArn: s.string(),
    workerName: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
