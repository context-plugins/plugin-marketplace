import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  activityTaskCancelRequestedEventAttributesSchema,
  type ActivityTaskCancelRequestedEventAttributes,
} from "./activity-task-cancel-requested-event-attributes.js";
import {
  activityTaskCanceledEventAttributesSchema,
  type ActivityTaskCanceledEventAttributes,
} from "./activity-task-canceled-event-attributes.js";
import {
  activityTaskCompletedEventAttributesSchema,
  type ActivityTaskCompletedEventAttributes,
} from "./activity-task-completed-event-attributes.js";
import {
  activityTaskFailedEventAttributesSchema,
  type ActivityTaskFailedEventAttributes,
} from "./activity-task-failed-event-attributes.js";
import {
  activityTaskScheduledEventAttributesSchema,
  type ActivityTaskScheduledEventAttributes,
} from "./activity-task-scheduled-event-attributes.js";
import {
  activityTaskStartedEventAttributesSchema,
  type ActivityTaskStartedEventAttributes,
} from "./activity-task-started-event-attributes.js";
import {
  activityTaskTimedOutEventAttributesSchema,
  type ActivityTaskTimedOutEventAttributes,
} from "./activity-task-timed-out-event-attributes.js";
import {
  cancelTimerFailedEventAttributesSchema,
  type CancelTimerFailedEventAttributes,
} from "./cancel-timer-failed-event-attributes.js";
import {
  cancelWorkflowExecutionFailedEventAttributesSchema,
  type CancelWorkflowExecutionFailedEventAttributes,
} from "./cancel-workflow-execution-failed-event-attributes.js";
import {
  childWorkflowExecutionCanceledEventAttributesSchema,
  type ChildWorkflowExecutionCanceledEventAttributes,
} from "./child-workflow-execution-canceled-event-attributes.js";
import {
  childWorkflowExecutionCompletedEventAttributesSchema,
  type ChildWorkflowExecutionCompletedEventAttributes,
} from "./child-workflow-execution-completed-event-attributes.js";
import {
  childWorkflowExecutionFailedEventAttributesSchema,
  type ChildWorkflowExecutionFailedEventAttributes,
} from "./child-workflow-execution-failed-event-attributes.js";
import {
  childWorkflowExecutionStartedEventAttributesSchema,
  type ChildWorkflowExecutionStartedEventAttributes,
} from "./child-workflow-execution-started-event-attributes.js";
import {
  childWorkflowExecutionTerminatedEventAttributesSchema,
  type ChildWorkflowExecutionTerminatedEventAttributes,
} from "./child-workflow-execution-terminated-event-attributes.js";
import {
  childWorkflowExecutionTimedOutEventAttributesSchema,
  type ChildWorkflowExecutionTimedOutEventAttributes,
} from "./child-workflow-execution-timed-out-event-attributes.js";
import {
  completeWorkflowExecutionFailedEventAttributesSchema,
  type CompleteWorkflowExecutionFailedEventAttributes,
} from "./complete-workflow-execution-failed-event-attributes.js";
import {
  continueAsNewWorkflowExecutionFailedEventAttributesSchema,
  type ContinueAsNewWorkflowExecutionFailedEventAttributes,
} from "./continue-as-new-workflow-execution-failed-event-attributes.js";
import {
  decisionTaskCompletedEventAttributesSchema,
  type DecisionTaskCompletedEventAttributes,
} from "./decision-task-completed-event-attributes.js";
import {
  decisionTaskScheduledEventAttributesSchema,
  type DecisionTaskScheduledEventAttributes,
} from "./decision-task-scheduled-event-attributes.js";
import {
  decisionTaskStartedEventAttributesSchema,
  type DecisionTaskStartedEventAttributes,
} from "./decision-task-started-event-attributes.js";
import {
  decisionTaskTimedOutEventAttributesSchema,
  type DecisionTaskTimedOutEventAttributes,
} from "./decision-task-timed-out-event-attributes.js";
import { eventTypeSchema, type EventType } from "./event-type.js";
import {
  externalWorkflowExecutionCancelRequestedEventAttributesSchema,
  type ExternalWorkflowExecutionCancelRequestedEventAttributes,
} from "./external-workflow-execution-cancel-requested-event-attributes.js";
import {
  externalWorkflowExecutionSignaledEventAttributesSchema,
  type ExternalWorkflowExecutionSignaledEventAttributes,
} from "./external-workflow-execution-signaled-event-attributes.js";
import {
  failWorkflowExecutionFailedEventAttributesSchema,
  type FailWorkflowExecutionFailedEventAttributes,
} from "./fail-workflow-execution-failed-event-attributes.js";
import {
  lambdaFunctionCompletedEventAttributesSchema,
  type LambdaFunctionCompletedEventAttributes,
} from "./lambda-function-completed-event-attributes.js";
import {
  lambdaFunctionFailedEventAttributesSchema,
  type LambdaFunctionFailedEventAttributes,
} from "./lambda-function-failed-event-attributes.js";
import {
  lambdaFunctionScheduledEventAttributesSchema,
  type LambdaFunctionScheduledEventAttributes,
} from "./lambda-function-scheduled-event-attributes.js";
import {
  lambdaFunctionStartedEventAttributesSchema,
  type LambdaFunctionStartedEventAttributes,
} from "./lambda-function-started-event-attributes.js";
import {
  lambdaFunctionTimedOutEventAttributesSchema,
  type LambdaFunctionTimedOutEventAttributes,
} from "./lambda-function-timed-out-event-attributes.js";
import {
  markerRecordedEventAttributesSchema,
  type MarkerRecordedEventAttributes,
} from "./marker-recorded-event-attributes.js";
import {
  recordMarkerFailedEventAttributesSchema,
  type RecordMarkerFailedEventAttributes,
} from "./record-marker-failed-event-attributes.js";
import {
  requestCancelActivityTaskFailedEventAttributesSchema,
  type RequestCancelActivityTaskFailedEventAttributes,
} from "./request-cancel-activity-task-failed-event-attributes.js";
import {
  requestCancelExternalWorkflowExecutionFailedEventAttributesSchema,
  type RequestCancelExternalWorkflowExecutionFailedEventAttributes,
} from "./request-cancel-external-workflow-execution-failed-event-attributes.js";
import {
  requestCancelExternalWorkflowExecutionInitiatedEventAttributesSchema,
  type RequestCancelExternalWorkflowExecutionInitiatedEventAttributes,
} from "./request-cancel-external-workflow-execution-initiated-event-attributes.js";
import {
  scheduleActivityTaskFailedEventAttributesSchema,
  type ScheduleActivityTaskFailedEventAttributes,
} from "./schedule-activity-task-failed-event-attributes.js";
import {
  scheduleLambdaFunctionFailedEventAttributesSchema,
  type ScheduleLambdaFunctionFailedEventAttributes,
} from "./schedule-lambda-function-failed-event-attributes.js";
import {
  signalExternalWorkflowExecutionFailedEventAttributesSchema,
  type SignalExternalWorkflowExecutionFailedEventAttributes,
} from "./signal-external-workflow-execution-failed-event-attributes.js";
import {
  signalExternalWorkflowExecutionInitiatedEventAttributesSchema,
  type SignalExternalWorkflowExecutionInitiatedEventAttributes,
} from "./signal-external-workflow-execution-initiated-event-attributes.js";
import {
  startChildWorkflowExecutionFailedEventAttributesSchema,
  type StartChildWorkflowExecutionFailedEventAttributes,
} from "./start-child-workflow-execution-failed-event-attributes.js";
import {
  startChildWorkflowExecutionInitiatedEventAttributesSchema,
  type StartChildWorkflowExecutionInitiatedEventAttributes,
} from "./start-child-workflow-execution-initiated-event-attributes.js";
import {
  startLambdaFunctionFailedEventAttributesSchema,
  type StartLambdaFunctionFailedEventAttributes,
} from "./start-lambda-function-failed-event-attributes.js";
import {
  startTimerFailedEventAttributesSchema,
  type StartTimerFailedEventAttributes,
} from "./start-timer-failed-event-attributes.js";
import {
  timerCanceledEventAttributesSchema,
  type TimerCanceledEventAttributes,
} from "./timer-canceled-event-attributes.js";
import {
  timerFiredEventAttributesSchema,
  type TimerFiredEventAttributes,
} from "./timer-fired-event-attributes.js";
import {
  timerStartedEventAttributesSchema,
  type TimerStartedEventAttributes,
} from "./timer-started-event-attributes.js";
import {
  workflowExecutionCancelRequestedEventAttributesSchema,
  type WorkflowExecutionCancelRequestedEventAttributes,
} from "./workflow-execution-cancel-requested-event-attributes.js";
import {
  workflowExecutionCanceledEventAttributesSchema,
  type WorkflowExecutionCanceledEventAttributes,
} from "./workflow-execution-canceled-event-attributes.js";
import {
  workflowExecutionCompletedEventAttributesSchema,
  type WorkflowExecutionCompletedEventAttributes,
} from "./workflow-execution-completed-event-attributes.js";
import {
  workflowExecutionContinuedAsNewEventAttributesSchema,
  type WorkflowExecutionContinuedAsNewEventAttributes,
} from "./workflow-execution-continued-as-new-event-attributes.js";
import {
  workflowExecutionFailedEventAttributesSchema,
  type WorkflowExecutionFailedEventAttributes,
} from "./workflow-execution-failed-event-attributes.js";
import {
  workflowExecutionSignaledEventAttributesSchema,
  type WorkflowExecutionSignaledEventAttributes,
} from "./workflow-execution-signaled-event-attributes.js";
import {
  workflowExecutionStartedEventAttributesSchema,
  type WorkflowExecutionStartedEventAttributes,
} from "./workflow-execution-started-event-attributes.js";
import {
  workflowExecutionTerminatedEventAttributesSchema,
  type WorkflowExecutionTerminatedEventAttributes,
} from "./workflow-execution-terminated-event-attributes.js";
import {
  workflowExecutionTimedOutEventAttributesSchema,
  type WorkflowExecutionTimedOutEventAttributes,
} from "./workflow-execution-timed-out-event-attributes.js";

export type HistoryEvent = {
  /** The date and time when the event occurred. */
  eventTimestamp: Date;
  /** The type of the history event. */
  eventType: EventType;
  /**
   * The system generated ID of the event. This ID uniquely identifies the event with in the
   * workflow execution history.
   */
  eventId: number;
  workflowExecutionStartedEventAttributes?: WorkflowExecutionStartedEventAttributes;
  workflowExecutionCompletedEventAttributes?: WorkflowExecutionCompletedEventAttributes;
  completeWorkflowExecutionFailedEventAttributes?: CompleteWorkflowExecutionFailedEventAttributes;
  workflowExecutionFailedEventAttributes?: WorkflowExecutionFailedEventAttributes;
  failWorkflowExecutionFailedEventAttributes?: FailWorkflowExecutionFailedEventAttributes;
  workflowExecutionTimedOutEventAttributes?: WorkflowExecutionTimedOutEventAttributes;
  workflowExecutionCanceledEventAttributes?: WorkflowExecutionCanceledEventAttributes;
  cancelWorkflowExecutionFailedEventAttributes?: CancelWorkflowExecutionFailedEventAttributes;
  workflowExecutionContinuedAsNewEventAttributes?: WorkflowExecutionContinuedAsNewEventAttributes;
  continueAsNewWorkflowExecutionFailedEventAttributes?: ContinueAsNewWorkflowExecutionFailedEventAttributes;
  workflowExecutionTerminatedEventAttributes?: WorkflowExecutionTerminatedEventAttributes;
  workflowExecutionCancelRequestedEventAttributes?: WorkflowExecutionCancelRequestedEventAttributes;
  decisionTaskScheduledEventAttributes?: DecisionTaskScheduledEventAttributes;
  decisionTaskStartedEventAttributes?: DecisionTaskStartedEventAttributes;
  decisionTaskCompletedEventAttributes?: DecisionTaskCompletedEventAttributes;
  decisionTaskTimedOutEventAttributes?: DecisionTaskTimedOutEventAttributes;
  activityTaskScheduledEventAttributes?: ActivityTaskScheduledEventAttributes;
  activityTaskStartedEventAttributes?: ActivityTaskStartedEventAttributes;
  activityTaskCompletedEventAttributes?: ActivityTaskCompletedEventAttributes;
  activityTaskFailedEventAttributes?: ActivityTaskFailedEventAttributes;
  activityTaskTimedOutEventAttributes?: ActivityTaskTimedOutEventAttributes;
  activityTaskCanceledEventAttributes?: ActivityTaskCanceledEventAttributes;
  activityTaskCancelRequestedEventAttributes?: ActivityTaskCancelRequestedEventAttributes;
  workflowExecutionSignaledEventAttributes?: WorkflowExecutionSignaledEventAttributes;
  markerRecordedEventAttributes?: MarkerRecordedEventAttributes;
  recordMarkerFailedEventAttributes?: RecordMarkerFailedEventAttributes;
  timerStartedEventAttributes?: TimerStartedEventAttributes;
  timerFiredEventAttributes?: TimerFiredEventAttributes;
  timerCanceledEventAttributes?: TimerCanceledEventAttributes;
  startChildWorkflowExecutionInitiatedEventAttributes?: StartChildWorkflowExecutionInitiatedEventAttributes;
  childWorkflowExecutionStartedEventAttributes?: ChildWorkflowExecutionStartedEventAttributes;
  childWorkflowExecutionCompletedEventAttributes?: ChildWorkflowExecutionCompletedEventAttributes;
  childWorkflowExecutionFailedEventAttributes?: ChildWorkflowExecutionFailedEventAttributes;
  childWorkflowExecutionTimedOutEventAttributes?: ChildWorkflowExecutionTimedOutEventAttributes;
  childWorkflowExecutionCanceledEventAttributes?: ChildWorkflowExecutionCanceledEventAttributes;
  childWorkflowExecutionTerminatedEventAttributes?: ChildWorkflowExecutionTerminatedEventAttributes;
  signalExternalWorkflowExecutionInitiatedEventAttributes?: SignalExternalWorkflowExecutionInitiatedEventAttributes;
  externalWorkflowExecutionSignaledEventAttributes?: ExternalWorkflowExecutionSignaledEventAttributes;
  signalExternalWorkflowExecutionFailedEventAttributes?: SignalExternalWorkflowExecutionFailedEventAttributes;
  externalWorkflowExecutionCancelRequestedEventAttributes?: ExternalWorkflowExecutionCancelRequestedEventAttributes;
  requestCancelExternalWorkflowExecutionInitiatedEventAttributes?: RequestCancelExternalWorkflowExecutionInitiatedEventAttributes;
  requestCancelExternalWorkflowExecutionFailedEventAttributes?: RequestCancelExternalWorkflowExecutionFailedEventAttributes;
  scheduleActivityTaskFailedEventAttributes?: ScheduleActivityTaskFailedEventAttributes;
  requestCancelActivityTaskFailedEventAttributes?: RequestCancelActivityTaskFailedEventAttributes;
  startTimerFailedEventAttributes?: StartTimerFailedEventAttributes;
  cancelTimerFailedEventAttributes?: CancelTimerFailedEventAttributes;
  startChildWorkflowExecutionFailedEventAttributes?: StartChildWorkflowExecutionFailedEventAttributes;
  lambdaFunctionScheduledEventAttributes?: LambdaFunctionScheduledEventAttributes;
  lambdaFunctionStartedEventAttributes?: LambdaFunctionStartedEventAttributes;
  lambdaFunctionCompletedEventAttributes?: LambdaFunctionCompletedEventAttributes;
  lambdaFunctionFailedEventAttributes?: LambdaFunctionFailedEventAttributes;
  lambdaFunctionTimedOutEventAttributes?: LambdaFunctionTimedOutEventAttributes;
  scheduleLambdaFunctionFailedEventAttributes?: ScheduleLambdaFunctionFailedEventAttributes;
  startLambdaFunctionFailedEventAttributes?: StartLambdaFunctionFailedEventAttributes;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const historyEventSchema: Schema<HistoryEvent> = s.object<HistoryEvent>(
  {
    eventTimestamp: s.dateTime(),
    eventType: eventTypeSchema,
    eventId: s.int(),
    workflowExecutionStartedEventAttributes: s.optional(
      s.lazy(() => workflowExecutionStartedEventAttributesSchema),
    ),
    workflowExecutionCompletedEventAttributes: s.optional(
      s.lazy(() => workflowExecutionCompletedEventAttributesSchema),
    ),
    completeWorkflowExecutionFailedEventAttributes: s.optional(
      s.lazy(() => completeWorkflowExecutionFailedEventAttributesSchema),
    ),
    workflowExecutionFailedEventAttributes: s.optional(
      s.lazy(() => workflowExecutionFailedEventAttributesSchema),
    ),
    failWorkflowExecutionFailedEventAttributes: s.optional(
      s.lazy(() => failWorkflowExecutionFailedEventAttributesSchema),
    ),
    workflowExecutionTimedOutEventAttributes: s.optional(
      s.lazy(() => workflowExecutionTimedOutEventAttributesSchema),
    ),
    workflowExecutionCanceledEventAttributes: s.optional(
      s.lazy(() => workflowExecutionCanceledEventAttributesSchema),
    ),
    cancelWorkflowExecutionFailedEventAttributes: s.optional(
      s.lazy(() => cancelWorkflowExecutionFailedEventAttributesSchema),
    ),
    workflowExecutionContinuedAsNewEventAttributes: s.optional(
      s.lazy(() => workflowExecutionContinuedAsNewEventAttributesSchema),
    ),
    continueAsNewWorkflowExecutionFailedEventAttributes: s.optional(
      s.lazy(() => continueAsNewWorkflowExecutionFailedEventAttributesSchema),
    ),
    workflowExecutionTerminatedEventAttributes: s.optional(
      s.lazy(() => workflowExecutionTerminatedEventAttributesSchema),
    ),
    workflowExecutionCancelRequestedEventAttributes: s.optional(
      s.lazy(() => workflowExecutionCancelRequestedEventAttributesSchema),
    ),
    decisionTaskScheduledEventAttributes: s.optional(
      s.lazy(() => decisionTaskScheduledEventAttributesSchema),
    ),
    decisionTaskStartedEventAttributes: s.optional(s.lazy(() => decisionTaskStartedEventAttributesSchema)),
    decisionTaskCompletedEventAttributes: s.optional(
      s.lazy(() => decisionTaskCompletedEventAttributesSchema),
    ),
    decisionTaskTimedOutEventAttributes: s.optional(s.lazy(() => decisionTaskTimedOutEventAttributesSchema)),
    activityTaskScheduledEventAttributes: s.optional(
      s.lazy(() => activityTaskScheduledEventAttributesSchema),
    ),
    activityTaskStartedEventAttributes: s.optional(s.lazy(() => activityTaskStartedEventAttributesSchema)),
    activityTaskCompletedEventAttributes: s.optional(
      s.lazy(() => activityTaskCompletedEventAttributesSchema),
    ),
    activityTaskFailedEventAttributes: s.optional(s.lazy(() => activityTaskFailedEventAttributesSchema)),
    activityTaskTimedOutEventAttributes: s.optional(s.lazy(() => activityTaskTimedOutEventAttributesSchema)),
    activityTaskCanceledEventAttributes: s.optional(s.lazy(() => activityTaskCanceledEventAttributesSchema)),
    activityTaskCancelRequestedEventAttributes: s.optional(
      s.lazy(() => activityTaskCancelRequestedEventAttributesSchema),
    ),
    workflowExecutionSignaledEventAttributes: s.optional(
      s.lazy(() => workflowExecutionSignaledEventAttributesSchema),
    ),
    markerRecordedEventAttributes: s.optional(s.lazy(() => markerRecordedEventAttributesSchema)),
    recordMarkerFailedEventAttributes: s.optional(s.lazy(() => recordMarkerFailedEventAttributesSchema)),
    timerStartedEventAttributes: s.optional(s.lazy(() => timerStartedEventAttributesSchema)),
    timerFiredEventAttributes: s.optional(s.lazy(() => timerFiredEventAttributesSchema)),
    timerCanceledEventAttributes: s.optional(s.lazy(() => timerCanceledEventAttributesSchema)),
    startChildWorkflowExecutionInitiatedEventAttributes: s.optional(
      s.lazy(() => startChildWorkflowExecutionInitiatedEventAttributesSchema),
    ),
    childWorkflowExecutionStartedEventAttributes: s.optional(
      s.lazy(() => childWorkflowExecutionStartedEventAttributesSchema),
    ),
    childWorkflowExecutionCompletedEventAttributes: s.optional(
      s.lazy(() => childWorkflowExecutionCompletedEventAttributesSchema),
    ),
    childWorkflowExecutionFailedEventAttributes: s.optional(
      s.lazy(() => childWorkflowExecutionFailedEventAttributesSchema),
    ),
    childWorkflowExecutionTimedOutEventAttributes: s.optional(
      s.lazy(() => childWorkflowExecutionTimedOutEventAttributesSchema),
    ),
    childWorkflowExecutionCanceledEventAttributes: s.optional(
      s.lazy(() => childWorkflowExecutionCanceledEventAttributesSchema),
    ),
    childWorkflowExecutionTerminatedEventAttributes: s.optional(
      s.lazy(() => childWorkflowExecutionTerminatedEventAttributesSchema),
    ),
    signalExternalWorkflowExecutionInitiatedEventAttributes: s.optional(
      s.lazy(() => signalExternalWorkflowExecutionInitiatedEventAttributesSchema),
    ),
    externalWorkflowExecutionSignaledEventAttributes: s.optional(
      s.lazy(() => externalWorkflowExecutionSignaledEventAttributesSchema),
    ),
    signalExternalWorkflowExecutionFailedEventAttributes: s.optional(
      s.lazy(() => signalExternalWorkflowExecutionFailedEventAttributesSchema),
    ),
    externalWorkflowExecutionCancelRequestedEventAttributes: s.optional(
      s.lazy(() => externalWorkflowExecutionCancelRequestedEventAttributesSchema),
    ),
    requestCancelExternalWorkflowExecutionInitiatedEventAttributes: s.optional(
      s.lazy(() => requestCancelExternalWorkflowExecutionInitiatedEventAttributesSchema),
    ),
    requestCancelExternalWorkflowExecutionFailedEventAttributes: s.optional(
      s.lazy(() => requestCancelExternalWorkflowExecutionFailedEventAttributesSchema),
    ),
    scheduleActivityTaskFailedEventAttributes: s.optional(
      s.lazy(() => scheduleActivityTaskFailedEventAttributesSchema),
    ),
    requestCancelActivityTaskFailedEventAttributes: s.optional(
      s.lazy(() => requestCancelActivityTaskFailedEventAttributesSchema),
    ),
    startTimerFailedEventAttributes: s.optional(s.lazy(() => startTimerFailedEventAttributesSchema)),
    cancelTimerFailedEventAttributes: s.optional(s.lazy(() => cancelTimerFailedEventAttributesSchema)),
    startChildWorkflowExecutionFailedEventAttributes: s.optional(
      s.lazy(() => startChildWorkflowExecutionFailedEventAttributesSchema),
    ),
    lambdaFunctionScheduledEventAttributes: s.optional(
      s.lazy(() => lambdaFunctionScheduledEventAttributesSchema),
    ),
    lambdaFunctionStartedEventAttributes: s.optional(
      s.lazy(() => lambdaFunctionStartedEventAttributesSchema),
    ),
    lambdaFunctionCompletedEventAttributes: s.optional(
      s.lazy(() => lambdaFunctionCompletedEventAttributesSchema),
    ),
    lambdaFunctionFailedEventAttributes: s.optional(s.lazy(() => lambdaFunctionFailedEventAttributesSchema)),
    lambdaFunctionTimedOutEventAttributes: s.optional(
      s.lazy(() => lambdaFunctionTimedOutEventAttributesSchema),
    ),
    scheduleLambdaFunctionFailedEventAttributes: s.optional(
      s.lazy(() => scheduleLambdaFunctionFailedEventAttributesSchema),
    ),
    startLambdaFunctionFailedEventAttributes: s.optional(
      s.lazy(() => startLambdaFunctionFailedEventAttributesSchema),
    ),
  },
  { additionalProperties: s.json() },
);
