import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";

export type ExecutionListItem = {
  /** The Amazon Resource Name (ARN) that identifies the execution. */
  executionArn: string;
  /** The Amazon Resource Name (ARN) of the state machine that ran the execution. */
  stateMachineArn: string;
  /**
   * The name of the execution. A name must not contain: white space brackets { } [ ] wildcard
   * characters ? * special characters " # % \ ^ | ~ ` $ & , ; : / control characters (U+0000-001F,
   * U+007F-009F, U+FFFE-FFFF) surrogates (U+D800-DFFF) invalid characters ( U+10FFFF) To enable
   * logging with CloudWatch Logs, the name should only contain 0-9, A-Z, a-z, - and _.
   */
  name: string;
  /** The current status of the execution. */
  status: Status;
  /** The date the execution started. */
  startDate: Date;
  /** If the execution already ended, the date the execution stopped. */
  stopDate?: Date;
  /**
   * The Amazon Resource Name (ARN) of a Map Run. This field is returned only if mapRunArn was
   * specified in the ListExecutions API action. If stateMachineArn was specified in ListExecutions,
   * the mapRunArn isn't returned.
   */
  mapRunArn?: string;
  /**
   * The total number of items processed in a child workflow execution. This field is returned only
   * if mapRunArn was specified in the ListExecutions API action. If stateMachineArn was specified
   * in ListExecutions, the itemCount field isn't returned.
   */
  itemCount?: number;
  /**
   * The Amazon Resource Name (ARN) of the state machine version associated with the execution. If
   * the state machine execution was started with an unqualified ARN, it returns null. If the
   * execution was started using a stateMachineAliasArn, both the stateMachineAliasArn and
   * stateMachineVersionArn parameters contain the respective values.
   */
  stateMachineVersionArn?: string;
  /**
   * The Amazon Resource Name (ARN) of the state machine alias used to start an execution. If the
   * state machine execution was started with an unqualified ARN or a version ARN, it returns null.
   */
  stateMachineAliasArn?: string;
  /**
   * The number of times you've redriven an execution. If you have not yet redriven an execution,
   * the redriveCount is 0. This count is only updated when you successfully redrive an execution.
   */
  redriveCount?: number;
  /** The date the execution was last redriven. */
  redriveDate?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const executionListItemSchema: Schema<ExecutionListItem> = s.object<ExecutionListItem>(
  {
    executionArn: s.string(),
    stateMachineArn: s.string(),
    name: s.string(),
    status: statusSchema,
    startDate: s.dateTime(),
    stopDate: s.optional(s.dateTime()),
    mapRunArn: s.optional(s.string()),
    itemCount: s.optional(s.int()),
    stateMachineVersionArn: s.optional(s.string()),
    stateMachineAliasArn: s.optional(s.string()),
    redriveCount: s.optional(s.int()),
    redriveDate: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
