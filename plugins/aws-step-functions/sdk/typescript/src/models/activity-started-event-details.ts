import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ActivityStartedEventDetails = {
  /**
   * The name of the worker that the task is assigned to. These names are provided by the workers
   * when calling GetActivityTask.
   */
  workerName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const activityStartedEventDetailsSchema: Schema<ActivityStartedEventDetails> =
  s.object<ActivityStartedEventDetails>(
    {
      workerName: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
