import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  activityFailedEventDetailsSchema,
  type ActivityFailedEventDetails,
} from "./activity-failed-event-details.js";
import {
  activityScheduleFailedEventDetailsSchema,
  type ActivityScheduleFailedEventDetails,
} from "./activity-schedule-failed-event-details.js";
import {
  activityScheduledEventDetailsSchema,
  type ActivityScheduledEventDetails,
} from "./activity-scheduled-event-details.js";
import {
  activityStartedEventDetailsSchema,
  type ActivityStartedEventDetails,
} from "./activity-started-event-details.js";
import {
  activitySucceededEventDetailsSchema,
  type ActivitySucceededEventDetails,
} from "./activity-succeeded-event-details.js";
import {
  activityTimedOutEventDetailsSchema,
  type ActivityTimedOutEventDetails,
} from "./activity-timed-out-event-details.js";
import {
  evaluationFailedEventDetailsSchema,
  type EvaluationFailedEventDetails,
} from "./evaluation-failed-event-details.js";
import {
  executionAbortedEventDetailsSchema,
  type ExecutionAbortedEventDetails,
} from "./execution-aborted-event-details.js";
import {
  executionFailedEventDetailsSchema,
  type ExecutionFailedEventDetails,
} from "./execution-failed-event-details.js";
import {
  executionRedrivenEventDetailsSchema,
  type ExecutionRedrivenEventDetails,
} from "./execution-redriven-event-details.js";
import {
  executionStartedEventDetailsSchema,
  type ExecutionStartedEventDetails,
} from "./execution-started-event-details.js";
import {
  executionSucceededEventDetailsSchema,
  type ExecutionSucceededEventDetails,
} from "./execution-succeeded-event-details.js";
import {
  executionTimedOutEventDetailsSchema,
  type ExecutionTimedOutEventDetails,
} from "./execution-timed-out-event-details.js";
import {
  lambdaFunctionFailedEventDetailsSchema,
  type LambdaFunctionFailedEventDetails,
} from "./lambda-function-failed-event-details.js";
import {
  lambdaFunctionScheduleFailedEventDetailsSchema,
  type LambdaFunctionScheduleFailedEventDetails,
} from "./lambda-function-schedule-failed-event-details.js";
import {
  lambdaFunctionScheduledEventDetailsSchema,
  type LambdaFunctionScheduledEventDetails,
} from "./lambda-function-scheduled-event-details.js";
import {
  lambdaFunctionStartFailedEventDetailsSchema,
  type LambdaFunctionStartFailedEventDetails,
} from "./lambda-function-start-failed-event-details.js";
import {
  lambdaFunctionSucceededEventDetailsSchema,
  type LambdaFunctionSucceededEventDetails,
} from "./lambda-function-succeeded-event-details.js";
import {
  lambdaFunctionTimedOutEventDetailsSchema,
  type LambdaFunctionTimedOutEventDetails,
} from "./lambda-function-timed-out-event-details.js";
import {
  mapIterationEventDetailsSchema,
  type MapIterationEventDetails,
} from "./map-iteration-event-details.js";
import {
  mapRunFailedEventDetailsSchema,
  type MapRunFailedEventDetails,
} from "./map-run-failed-event-details.js";
import {
  mapRunRedrivenEventDetailsSchema,
  type MapRunRedrivenEventDetails,
} from "./map-run-redriven-event-details.js";
import {
  mapRunStartedEventDetailsSchema,
  type MapRunStartedEventDetails,
} from "./map-run-started-event-details.js";
import {
  mapStateStartedEventDetailsSchema,
  type MapStateStartedEventDetails,
} from "./map-state-started-event-details.js";
import {
  stateEnteredEventDetailsSchema,
  type StateEnteredEventDetails,
} from "./state-entered-event-details.js";
import { stateExitedEventDetailsSchema, type StateExitedEventDetails } from "./state-exited-event-details.js";
import { taskFailedEventDetailsSchema, type TaskFailedEventDetails } from "./task-failed-event-details.js";
import {
  taskScheduledEventDetailsSchema,
  type TaskScheduledEventDetails,
} from "./task-scheduled-event-details.js";
import {
  taskStartFailedEventDetailsSchema,
  type TaskStartFailedEventDetails,
} from "./task-start-failed-event-details.js";
import { taskStartedEventDetailsSchema, type TaskStartedEventDetails } from "./task-started-event-details.js";
import {
  taskSubmitFailedEventDetailsSchema,
  type TaskSubmitFailedEventDetails,
} from "./task-submit-failed-event-details.js";
import {
  taskSubmittedEventDetailsSchema,
  type TaskSubmittedEventDetails,
} from "./task-submitted-event-details.js";
import {
  taskSucceededEventDetailsSchema,
  type TaskSucceededEventDetails,
} from "./task-succeeded-event-details.js";
import {
  taskTimedOutEventDetailsSchema,
  type TaskTimedOutEventDetails,
} from "./task-timed-out-event-details.js";
import { type3Schema, type Type3 } from "./type3.js";

export type HistoryEvent = {
  /**
   * The date and time the event occurred, expressed in seconds and fractional milliseconds since
   * the Unix epoch, which is defined as January 1, 1970, at 00:00:00 Coordinated Universal Time
   * (UTC).
   */
  timestamp: Date;
  /** The type of the event. */
  type: Type3;
  /** The id of the event. Events are numbered sequentially, starting at one. */
  id: number;
  /** The id of the previous event. */
  previousEventId?: number;
  activityFailedEventDetails?: ActivityFailedEventDetails;
  activityScheduleFailedEventDetails?: ActivityScheduleFailedEventDetails;
  activityScheduledEventDetails?: ActivityScheduledEventDetails;
  activityStartedEventDetails?: ActivityStartedEventDetails;
  activitySucceededEventDetails?: ActivitySucceededEventDetails;
  activityTimedOutEventDetails?: ActivityTimedOutEventDetails;
  taskFailedEventDetails?: TaskFailedEventDetails;
  taskScheduledEventDetails?: TaskScheduledEventDetails;
  taskStartFailedEventDetails?: TaskStartFailedEventDetails;
  taskStartedEventDetails?: TaskStartedEventDetails;
  taskSubmitFailedEventDetails?: TaskSubmitFailedEventDetails;
  taskSubmittedEventDetails?: TaskSubmittedEventDetails;
  taskSucceededEventDetails?: TaskSucceededEventDetails;
  taskTimedOutEventDetails?: TaskTimedOutEventDetails;
  executionFailedEventDetails?: ExecutionFailedEventDetails;
  executionStartedEventDetails?: ExecutionStartedEventDetails;
  executionSucceededEventDetails?: ExecutionSucceededEventDetails;
  executionAbortedEventDetails?: ExecutionAbortedEventDetails;
  executionTimedOutEventDetails?: ExecutionTimedOutEventDetails;
  executionRedrivenEventDetails?: ExecutionRedrivenEventDetails;
  mapStateStartedEventDetails?: MapStateStartedEventDetails;
  mapIterationStartedEventDetails?: MapIterationEventDetails;
  mapIterationSucceededEventDetails?: MapIterationEventDetails;
  mapIterationFailedEventDetails?: MapIterationEventDetails;
  mapIterationAbortedEventDetails?: MapIterationEventDetails;
  lambdaFunctionFailedEventDetails?: LambdaFunctionFailedEventDetails;
  lambdaFunctionScheduleFailedEventDetails?: LambdaFunctionScheduleFailedEventDetails;
  lambdaFunctionScheduledEventDetails?: LambdaFunctionScheduledEventDetails;
  lambdaFunctionStartFailedEventDetails?: LambdaFunctionStartFailedEventDetails;
  lambdaFunctionSucceededEventDetails?: LambdaFunctionSucceededEventDetails;
  lambdaFunctionTimedOutEventDetails?: LambdaFunctionTimedOutEventDetails;
  stateEnteredEventDetails?: StateEnteredEventDetails;
  stateExitedEventDetails?: StateExitedEventDetails;
  mapRunStartedEventDetails?: MapRunStartedEventDetails;
  mapRunFailedEventDetails?: MapRunFailedEventDetails;
  mapRunRedrivenEventDetails?: MapRunRedrivenEventDetails;
  evaluationFailedEventDetails?: EvaluationFailedEventDetails;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const historyEventSchema: Schema<HistoryEvent> = s.object<HistoryEvent>(
  {
    timestamp: s.dateTime(),
    type: type3Schema,
    id: s.int(),
    previousEventId: s.optional(s.int()),
    activityFailedEventDetails: s.optional(s.lazy(() => activityFailedEventDetailsSchema)),
    activityScheduleFailedEventDetails: s.optional(s.lazy(() => activityScheduleFailedEventDetailsSchema)),
    activityScheduledEventDetails: s.optional(s.lazy(() => activityScheduledEventDetailsSchema)),
    activityStartedEventDetails: s.optional(s.lazy(() => activityStartedEventDetailsSchema)),
    activitySucceededEventDetails: s.optional(s.lazy(() => activitySucceededEventDetailsSchema)),
    activityTimedOutEventDetails: s.optional(s.lazy(() => activityTimedOutEventDetailsSchema)),
    taskFailedEventDetails: s.optional(s.lazy(() => taskFailedEventDetailsSchema)),
    taskScheduledEventDetails: s.optional(s.lazy(() => taskScheduledEventDetailsSchema)),
    taskStartFailedEventDetails: s.optional(s.lazy(() => taskStartFailedEventDetailsSchema)),
    taskStartedEventDetails: s.optional(s.lazy(() => taskStartedEventDetailsSchema)),
    taskSubmitFailedEventDetails: s.optional(s.lazy(() => taskSubmitFailedEventDetailsSchema)),
    taskSubmittedEventDetails: s.optional(s.lazy(() => taskSubmittedEventDetailsSchema)),
    taskSucceededEventDetails: s.optional(s.lazy(() => taskSucceededEventDetailsSchema)),
    taskTimedOutEventDetails: s.optional(s.lazy(() => taskTimedOutEventDetailsSchema)),
    executionFailedEventDetails: s.optional(s.lazy(() => executionFailedEventDetailsSchema)),
    executionStartedEventDetails: s.optional(s.lazy(() => executionStartedEventDetailsSchema)),
    executionSucceededEventDetails: s.optional(s.lazy(() => executionSucceededEventDetailsSchema)),
    executionAbortedEventDetails: s.optional(s.lazy(() => executionAbortedEventDetailsSchema)),
    executionTimedOutEventDetails: s.optional(s.lazy(() => executionTimedOutEventDetailsSchema)),
    executionRedrivenEventDetails: s.optional(s.lazy(() => executionRedrivenEventDetailsSchema)),
    mapStateStartedEventDetails: s.optional(s.lazy(() => mapStateStartedEventDetailsSchema)),
    mapIterationStartedEventDetails: s.optional(s.lazy(() => mapIterationEventDetailsSchema)),
    mapIterationSucceededEventDetails: s.optional(s.lazy(() => mapIterationEventDetailsSchema)),
    mapIterationFailedEventDetails: s.optional(s.lazy(() => mapIterationEventDetailsSchema)),
    mapIterationAbortedEventDetails: s.optional(s.lazy(() => mapIterationEventDetailsSchema)),
    lambdaFunctionFailedEventDetails: s.optional(s.lazy(() => lambdaFunctionFailedEventDetailsSchema)),
    lambdaFunctionScheduleFailedEventDetails: s.optional(
      s.lazy(() => lambdaFunctionScheduleFailedEventDetailsSchema),
    ),
    lambdaFunctionScheduledEventDetails: s.optional(s.lazy(() => lambdaFunctionScheduledEventDetailsSchema)),
    lambdaFunctionStartFailedEventDetails: s.optional(
      s.lazy(() => lambdaFunctionStartFailedEventDetailsSchema),
    ),
    lambdaFunctionSucceededEventDetails: s.optional(s.lazy(() => lambdaFunctionSucceededEventDetailsSchema)),
    lambdaFunctionTimedOutEventDetails: s.optional(s.lazy(() => lambdaFunctionTimedOutEventDetailsSchema)),
    stateEnteredEventDetails: s.optional(s.lazy(() => stateEnteredEventDetailsSchema)),
    stateExitedEventDetails: s.optional(s.lazy(() => stateExitedEventDetailsSchema)),
    mapRunStartedEventDetails: s.optional(s.lazy(() => mapRunStartedEventDetailsSchema)),
    mapRunFailedEventDetails: s.optional(s.lazy(() => mapRunFailedEventDetailsSchema)),
    mapRunRedrivenEventDetails: s.optional(s.lazy(() => mapRunRedrivenEventDetailsSchema)),
    evaluationFailedEventDetails: s.optional(s.lazy(() => evaluationFailedEventDetailsSchema)),
  },
  { additionalProperties: s.json() },
);
