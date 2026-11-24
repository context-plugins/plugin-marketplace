import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cause13Schema, type Cause13 } from "./cause13.js";

export type ScheduleLambdaFunctionFailedEventAttributes = {
  /** The ID provided in the ScheduleLambdaFunction decision that failed. */
  id: string;
  /** The name of the Lambda function. */
  name: string;
  /**
   * The cause of the failure. To help diagnose issues, use this information to trace back the chain
   * of events leading up to this event. If cause is set to OPERATION_NOT_PERMITTED, the decision
   * failed because it lacked sufficient permissions. For details and example IAM policies, see
   * Using IAM to Manage Access to Amazon SWF Workflows in the Amazon SWF Developer Guide.
   */
  cause: Cause13;
  /**
   * The ID of the LambdaFunctionCompleted event corresponding to the decision that resulted in
   * scheduling this Lambda task. To help diagnose issues, use this information to trace back the
   * chain of events leading up to this event.
   */
  decisionTaskCompletedEventId: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const scheduleLambdaFunctionFailedEventAttributesSchema: Schema<ScheduleLambdaFunctionFailedEventAttributes> =
  s.object<ScheduleLambdaFunctionFailedEventAttributes>(
    {
      id: s.string(),
      name: s.string(),
      cause: cause13Schema,
      decisionTaskCompletedEventId: s.int(),
    },
    { additionalProperties: s.json() },
  );
