import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cause14Schema, type Cause14 } from "./cause14.js";

export type StartLambdaFunctionFailedEventAttributes = {
  /**
   * The ID of the ActivityTaskScheduled event that was recorded when this activity task was
   * scheduled. To help diagnose issues, use this information to trace back the chain of events
   * leading up to this event.
   */
  scheduledEventId?: number;
  /**
   * The cause of the failure. To help diagnose issues, use this information to trace back the chain
   * of events leading up to this event. If cause is set to OPERATION_NOT_PERMITTED, the decision
   * failed because the IAM role attached to the execution lacked sufficient permissions. For
   * details and example IAM policies, see Lambda Tasks in the Amazon SWF Developer Guide.
   */
  cause?: Cause14;
  /** A description that can help diagnose the cause of the fault. */
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startLambdaFunctionFailedEventAttributesSchema: Schema<StartLambdaFunctionFailedEventAttributes> =
  s.object<StartLambdaFunctionFailedEventAttributes>(
    {
      scheduledEventId: s.optional(s.int()),
      cause: s.optional(s.lazy(() => cause14Schema)),
      message: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
