import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type LambdaFunctionScheduledEventAttributes = {
  /** The unique ID of the Lambda task. */
  id: string;
  /** The name of the Lambda function. */
  name: string;
  /**
   * Data attached to the event that the decider can use in subsequent workflow tasks. This data
   * isn't sent to the Lambda task.
   */
  control?: string;
  /** The input provided to the Lambda task. */
  input?: string;
  /** The maximum amount of time a worker can take to process the Lambda task. */
  startToCloseTimeout?: string;
  /**
   * The ID of the LambdaFunctionCompleted event corresponding to the decision that resulted in
   * scheduling this activity task. To help diagnose issues, use this information to trace back the
   * chain of events leading up to this event.
   */
  decisionTaskCompletedEventId: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const lambdaFunctionScheduledEventAttributesSchema: Schema<LambdaFunctionScheduledEventAttributes> =
  s.object<LambdaFunctionScheduledEventAttributes>(
    {
      id: s.string(),
      name: s.string(),
      control: s.optional(s.string()),
      input: s.optional(s.string()),
      startToCloseTimeout: s.optional(s.string()),
      decisionTaskCompletedEventId: s.int(),
    },
    { additionalProperties: s.json() },
  );
