import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ScheduleLambdaFunctionDecisionAttributes = {
  /** A string that identifies the Lambda function execution in the event history. */
  id: string;
  /** The name, or ARN, of the Lambda function to schedule. */
  name: string;
  /**
   * The data attached to the event that the decider can use in subsequent workflow tasks. This data
   * isn't sent to the Lambda task.
   */
  control?: string;
  /** The optional input data to be supplied to the Lambda function. */
  input?: string;
  /**
   * The timeout value, in seconds, after which the Lambda function is considered to be failed once
   * it has started. This can be any integer from 1-900 (1s-15m). If no value is supplied, then a
   * default value of 900s is assumed.
   */
  startToCloseTimeout?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const scheduleLambdaFunctionDecisionAttributesSchema: Schema<ScheduleLambdaFunctionDecisionAttributes> =
  s.object<ScheduleLambdaFunctionDecisionAttributes>(
    {
      id: s.string(),
      name: s.string(),
      control: s.optional(s.string()),
      input: s.optional(s.string()),
      startToCloseTimeout: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
