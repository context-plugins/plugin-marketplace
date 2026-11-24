import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  cloudWatchEventsExecutionDataDetailsSchema,
  type CloudWatchEventsExecutionDataDetails,
} from "./cloud-watch-events-execution-data-details.js";
import { redriveStatusSchema, type RedriveStatus } from "./redrive-status.js";
import { statusSchema, type Status } from "./status.js";

export type DescribeExecutionOutput = {
  /** The Amazon Resource Name (ARN) that identifies the execution. */
  executionArn: string;
  /** The Amazon Resource Name (ARN) of the executed stated machine. */
  stateMachineArn: string;
  /**
   * The name of the execution. A name must not contain: white space brackets { } [ ] wildcard
   * characters ? * special characters " # % \ ^ | ~ ` $ & , ; : / control characters (U+0000-001F,
   * U+007F-009F, U+FFFE-FFFF) surrogates (U+D800-DFFF) invalid characters ( U+10FFFF) To enable
   * logging with CloudWatch Logs, the name should only contain 0-9, A-Z, a-z, - and _.
   */
  name?: string;
  /** The current status of the execution. */
  status: Status;
  /** The date the execution is started. */
  startDate: Date;
  /** If the execution ended, the date the execution stopped. */
  stopDate?: Date;
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
  /** The Amazon Resource Name (ARN) that identifies a Map Run, which dispatched this execution. */
  mapRunArn?: string;
  /** The error string if the state machine execution failed. */
  error?: string;
  /** The cause string if the state machine execution failed. */
  cause?: string;
  /**
   * The Amazon Resource Name (ARN) of the state machine version associated with the execution. The
   * version ARN is a combination of state machine ARN and the version number separated by a colon
   * (:). For example, stateMachineARN:1. If you start an execution from a StartExecution request
   * without specifying a state machine version or alias ARN, Step Functions returns a null value.
   */
  stateMachineVersionArn?: string;
  /**
   * The Amazon Resource Name (ARN) of the state machine alias associated with the execution. The
   * alias ARN is a combination of state machine ARN and the alias name separated by a colon (:).
   * For example, stateMachineARN:PROD. If you start an execution from a StartExecution request with
   * a state machine version ARN, this field will be null.
   */
  stateMachineAliasArn?: string;
  /**
   * The number of times you've redriven an execution. If you have not yet redriven an execution,
   * the redriveCount is 0. This count is only updated if you successfully redrive an execution.
   */
  redriveCount?: number;
  /**
   * The date the execution was last redriven. If you have not yet redriven an execution, the
   * redriveDate is null. The redriveDate is unavailable if you redrive a Map Run that starts child
   * workflow executions of type EXPRESS.
   */
  redriveDate?: Date;
  /**
   * Indicates whether or not an execution can be redriven at a given point in time. For executions
   * of type STANDARD, redriveStatus is NOT_REDRIVABLE if calling the RedriveExecution API action
   * would return the ExecutionNotRedrivable error. For a Distributed Map that includes child
   * workflows of type STANDARD, redriveStatus indicates whether or not the Map Run can redrive
   * child workflow executions. For a Distributed Map that includes child workflows of type EXPRESS,
   * redriveStatus indicates whether or not the Map Run can redrive child workflow executions. You
   * can redrive failed or timed out EXPRESS wo
   */
  redriveStatus?: RedriveStatus;
  /**
   * When redriveStatus is NOT_REDRIVABLE, redriveStatusReason specifies the reason why an execution
   * cannot be redriven. For executions of type STANDARD, or for a Distributed Map that includes
   * child workflows of type STANDARD, redriveStatusReason can include one of the following reasons:
   * State machine is in DELETING status. Execution is RUNNING and cannot be redriven. Execution is
   * SUCCEEDED and cannot be redriven. Execution was started before the launch of RedriveExecution.
   * Execution history event limit exceeded. Execution has exceeded the max execution time.
   * Execution redrivable period exceeded. F
   */
  redriveStatusReason?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const describeExecutionOutputSchema: Schema<DescribeExecutionOutput> =
  s.object<DescribeExecutionOutput>(
    {
      executionArn: s.string(),
      stateMachineArn: s.string(),
      name: s.optional(s.string()),
      status: statusSchema,
      startDate: s.dateTime(),
      stopDate: s.optional(s.dateTime()),
      input: s.optional(s.string()),
      inputDetails: s.optional(s.lazy(() => cloudWatchEventsExecutionDataDetailsSchema)),
      output: s.optional(s.string()),
      outputDetails: s.optional(s.lazy(() => cloudWatchEventsExecutionDataDetailsSchema)),
      traceHeader: s.optional(s.string()),
      mapRunArn: s.optional(s.string()),
      error: s.optional(s.string()),
      cause: s.optional(s.string()),
      stateMachineVersionArn: s.optional(s.string()),
      stateMachineAliasArn: s.optional(s.string()),
      redriveCount: s.optional(s.int()),
      redriveDate: s.optional(s.dateTime()),
      redriveStatus: s.optional(s.lazy(() => redriveStatusSchema)),
      redriveStatusReason: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
