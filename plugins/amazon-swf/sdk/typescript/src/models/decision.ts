import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  cancelTimerDecisionAttributesSchema,
  type CancelTimerDecisionAttributes,
} from "./cancel-timer-decision-attributes.js";
import {
  cancelWorkflowExecutionDecisionAttributesSchema,
  type CancelWorkflowExecutionDecisionAttributes,
} from "./cancel-workflow-execution-decision-attributes.js";
import {
  completeWorkflowExecutionDecisionAttributesSchema,
  type CompleteWorkflowExecutionDecisionAttributes,
} from "./complete-workflow-execution-decision-attributes.js";
import {
  continueAsNewWorkflowExecutionDecisionAttributesSchema,
  type ContinueAsNewWorkflowExecutionDecisionAttributes,
} from "./continue-as-new-workflow-execution-decision-attributes.js";
import { decisionTypeSchema, type DecisionType } from "./decision-type.js";
import {
  failWorkflowExecutionDecisionAttributesSchema,
  type FailWorkflowExecutionDecisionAttributes,
} from "./fail-workflow-execution-decision-attributes.js";
import {
  recordMarkerDecisionAttributesSchema,
  type RecordMarkerDecisionAttributes,
} from "./record-marker-decision-attributes.js";
import {
  requestCancelActivityTaskDecisionAttributesSchema,
  type RequestCancelActivityTaskDecisionAttributes,
} from "./request-cancel-activity-task-decision-attributes.js";
import {
  requestCancelExternalWorkflowExecutionDecisionAttributesSchema,
  type RequestCancelExternalWorkflowExecutionDecisionAttributes,
} from "./request-cancel-external-workflow-execution-decision-attributes.js";
import {
  scheduleActivityTaskDecisionAttributesSchema,
  type ScheduleActivityTaskDecisionAttributes,
} from "./schedule-activity-task-decision-attributes.js";
import {
  scheduleLambdaFunctionDecisionAttributesSchema,
  type ScheduleLambdaFunctionDecisionAttributes,
} from "./schedule-lambda-function-decision-attributes.js";
import {
  signalExternalWorkflowExecutionDecisionAttributesSchema,
  type SignalExternalWorkflowExecutionDecisionAttributes,
} from "./signal-external-workflow-execution-decision-attributes.js";
import {
  startChildWorkflowExecutionDecisionAttributesSchema,
  type StartChildWorkflowExecutionDecisionAttributes,
} from "./start-child-workflow-execution-decision-attributes.js";
import {
  startTimerDecisionAttributesSchema,
  type StartTimerDecisionAttributes,
} from "./start-timer-decision-attributes.js";

export type Decision = {
  /** Specifies the type of the decision. */
  decisionType: DecisionType;
  scheduleActivityTaskDecisionAttributes?: ScheduleActivityTaskDecisionAttributes;
  requestCancelActivityTaskDecisionAttributes?: RequestCancelActivityTaskDecisionAttributes;
  completeWorkflowExecutionDecisionAttributes?: CompleteWorkflowExecutionDecisionAttributes;
  failWorkflowExecutionDecisionAttributes?: FailWorkflowExecutionDecisionAttributes;
  cancelWorkflowExecutionDecisionAttributes?: CancelWorkflowExecutionDecisionAttributes;
  continueAsNewWorkflowExecutionDecisionAttributes?: ContinueAsNewWorkflowExecutionDecisionAttributes;
  recordMarkerDecisionAttributes?: RecordMarkerDecisionAttributes;
  startTimerDecisionAttributes?: StartTimerDecisionAttributes;
  cancelTimerDecisionAttributes?: CancelTimerDecisionAttributes;
  signalExternalWorkflowExecutionDecisionAttributes?: SignalExternalWorkflowExecutionDecisionAttributes;
  requestCancelExternalWorkflowExecutionDecisionAttributes?: RequestCancelExternalWorkflowExecutionDecisionAttributes;
  startChildWorkflowExecutionDecisionAttributes?: StartChildWorkflowExecutionDecisionAttributes;
  scheduleLambdaFunctionDecisionAttributes?: ScheduleLambdaFunctionDecisionAttributes;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const decisionSchema: Schema<Decision> = s.object<Decision>(
  {
    decisionType: decisionTypeSchema,
    scheduleActivityTaskDecisionAttributes: s.optional(
      s.lazy(() => scheduleActivityTaskDecisionAttributesSchema),
    ),
    requestCancelActivityTaskDecisionAttributes: s.optional(
      s.lazy(() => requestCancelActivityTaskDecisionAttributesSchema),
    ),
    completeWorkflowExecutionDecisionAttributes: s.optional(
      s.lazy(() => completeWorkflowExecutionDecisionAttributesSchema),
    ),
    failWorkflowExecutionDecisionAttributes: s.optional(
      s.lazy(() => failWorkflowExecutionDecisionAttributesSchema),
    ),
    cancelWorkflowExecutionDecisionAttributes: s.optional(
      s.lazy(() => cancelWorkflowExecutionDecisionAttributesSchema),
    ),
    continueAsNewWorkflowExecutionDecisionAttributes: s.optional(
      s.lazy(() => continueAsNewWorkflowExecutionDecisionAttributesSchema),
    ),
    recordMarkerDecisionAttributes: s.optional(s.lazy(() => recordMarkerDecisionAttributesSchema)),
    startTimerDecisionAttributes: s.optional(s.lazy(() => startTimerDecisionAttributesSchema)),
    cancelTimerDecisionAttributes: s.optional(s.lazy(() => cancelTimerDecisionAttributesSchema)),
    signalExternalWorkflowExecutionDecisionAttributes: s.optional(
      s.lazy(() => signalExternalWorkflowExecutionDecisionAttributesSchema),
    ),
    requestCancelExternalWorkflowExecutionDecisionAttributes: s.optional(
      s.lazy(() => requestCancelExternalWorkflowExecutionDecisionAttributesSchema),
    ),
    startChildWorkflowExecutionDecisionAttributes: s.optional(
      s.lazy(() => startChildWorkflowExecutionDecisionAttributesSchema),
    ),
    scheduleLambdaFunctionDecisionAttributes: s.optional(
      s.lazy(() => scheduleLambdaFunctionDecisionAttributesSchema),
    ),
  },
  { additionalProperties: s.json() },
);
