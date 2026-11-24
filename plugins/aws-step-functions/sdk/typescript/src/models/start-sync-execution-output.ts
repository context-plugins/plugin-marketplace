import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { billingDetailsSchema, type BillingDetails } from "./billing-details.js";
import {
  cloudWatchEventsExecutionDataDetailsSchema,
  type CloudWatchEventsExecutionDataDetails,
} from "./cloud-watch-events-execution-data-details.js";
import { status4Schema, type Status4 } from "./status4.js";

export type StartSyncExecutionOutput = {
  /** The Amazon Resource Name (ARN) that identifies the execution. */
  executionArn: string;
  /** The Amazon Resource Name (ARN) that identifies the state machine. */
  stateMachineArn?: string;
  /** The name of the execution. */
  name?: string;
  /** The date the execution is started. */
  startDate: Date;
  /** If the execution has already ended, the date the execution stopped. */
  stopDate: Date;
  /** The current status of the execution. */
  status: Status4;
  /** The error code of the failure. */
  error?: string;
  /** A more detailed explanation of the cause of the failure. */
  cause?: string;
  /**
   * The string that contains the JSON input data of the execution. Length constraints apply to the
   * payload size, and are expressed as bytes in UTF-8 encoding.
   */
  input?: string;
  inputDetails?: CloudWatchEventsExecutionDataDetails;
  /**
   * The JSON output data of the execution. Length constraints apply to the payload size, and are
   * expressed as bytes in UTF-8 encoding. This field is set only if the execution succeeds. If the
   * execution fails, this field is null.
   */
  output?: string;
  outputDetails?: CloudWatchEventsExecutionDataDetails;
  /**
   * The X-Ray trace header that was passed to the execution. For X-Ray traces, all Amazon Web
   * Services services use the X-Amzn-Trace-Id header from the HTTP request. Using the header is the
   * preferred mechanism to identify a trace. StartExecution and StartSyncExecution API operations
   * can also use traceHeader from the body of the request payload. If both sources are provided,
   * Step Functions will use the header value (preferred) over the value in the request body.
   */
  traceHeader?: string;
  billingDetails?: BillingDetails;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startSyncExecutionOutputSchema: Schema<StartSyncExecutionOutput> =
  s.object<StartSyncExecutionOutput>(
    {
      executionArn: s.string(),
      stateMachineArn: s.optional(s.string()),
      name: s.optional(s.string()),
      startDate: s.dateTime(),
      stopDate: s.dateTime(),
      status: status4Schema,
      error: s.optional(s.string()),
      cause: s.optional(s.string()),
      input: s.optional(s.string()),
      inputDetails: s.optional(s.lazy(() => cloudWatchEventsExecutionDataDetailsSchema)),
      output: s.optional(s.string()),
      outputDetails: s.optional(s.lazy(() => cloudWatchEventsExecutionDataDetailsSchema)),
      traceHeader: s.optional(s.string()),
      billingDetails: s.optional(s.lazy(() => billingDetailsSchema)),
    },
    { additionalProperties: s.json() },
  );
