import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GetActivityTaskOutput = {
  /**
   * A token that identifies the scheduled task. This token must be copied and included in
   * subsequent calls to SendTaskHeartbeat, SendTaskSuccess or SendTaskFailure in order to report
   * the progress or completion of the task.
   */
  taskToken?: string;
  /**
   * The string that contains the JSON input data for the task. Length constraints apply to the
   * payload size, and are expressed as bytes in UTF-8 encoding.
   */
  input?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getActivityTaskOutputSchema: Schema<GetActivityTaskOutput> = s.object<GetActivityTaskOutput>(
  {
    taskToken: s.optional(s.string()),
    input: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
