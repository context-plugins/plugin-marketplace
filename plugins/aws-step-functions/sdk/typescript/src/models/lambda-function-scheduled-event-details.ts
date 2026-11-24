import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  historyEventExecutionDataDetailsSchema,
  type HistoryEventExecutionDataDetails,
} from "./history-event-execution-data-details.js";
import { taskCredentialsSchema, type TaskCredentials } from "./task-credentials.js";

export type LambdaFunctionScheduledEventDetails = {
  /** The Amazon Resource Name (ARN) of the scheduled Lambda function. */
  resource: string;
  /**
   * The JSON data input to the Lambda function. Length constraints apply to the payload size, and
   * are expressed as bytes in UTF-8 encoding.
   */
  input?: string;
  inputDetails?: HistoryEventExecutionDataDetails;
  /** The maximum allowed duration of the Lambda function. */
  timeoutInSeconds?: number;
  taskCredentials?: TaskCredentials;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const lambdaFunctionScheduledEventDetailsSchema: Schema<LambdaFunctionScheduledEventDetails> =
  s.object<LambdaFunctionScheduledEventDetails>(
    {
      resource: s.string(),
      input: s.optional(s.string()),
      inputDetails: s.optional(s.lazy(() => historyEventExecutionDataDetailsSchema)),
      timeoutInSeconds: s.optional(s.int()),
      taskCredentials: s.optional(s.lazy(() => taskCredentialsSchema)),
    },
    { additionalProperties: s.json() },
  );
