from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .activity_failed_event_details import ActivityFailedEventDetails, ActivityFailedEventDetailsDict
from .activity_schedule_failed_event_details import (
    ActivityScheduleFailedEventDetails,
    ActivityScheduleFailedEventDetailsDict,
)
from .activity_scheduled_event_details import ActivityScheduledEventDetails, ActivityScheduledEventDetailsDict
from .activity_started_event_details import ActivityStartedEventDetails, ActivityStartedEventDetailsDict
from .activity_succeeded_event_details import ActivitySucceededEventDetails, ActivitySucceededEventDetailsDict
from .activity_timed_out_event_details import ActivityTimedOutEventDetails, ActivityTimedOutEventDetailsDict
from .enums.type3 import Type3OrStr
from .evaluation_failed_event_details import EvaluationFailedEventDetails, EvaluationFailedEventDetailsDict
from .execution_aborted_event_details import ExecutionAbortedEventDetails, ExecutionAbortedEventDetailsDict
from .execution_failed_event_details import ExecutionFailedEventDetails, ExecutionFailedEventDetailsDict
from .execution_redriven_event_details import ExecutionRedrivenEventDetails, ExecutionRedrivenEventDetailsDict
from .execution_started_event_details import ExecutionStartedEventDetails, ExecutionStartedEventDetailsDict
from .execution_succeeded_event_details import ExecutionSucceededEventDetails, ExecutionSucceededEventDetailsDict
from .execution_timed_out_event_details import ExecutionTimedOutEventDetails, ExecutionTimedOutEventDetailsDict
from .lambda_function_failed_event_details import LambdaFunctionFailedEventDetails, LambdaFunctionFailedEventDetailsDict
from .lambda_function_schedule_failed_event_details import (
    LambdaFunctionScheduleFailedEventDetails,
    LambdaFunctionScheduleFailedEventDetailsDict,
)
from .lambda_function_scheduled_event_details import (
    LambdaFunctionScheduledEventDetails,
    LambdaFunctionScheduledEventDetailsDict,
)
from .lambda_function_start_failed_event_details import (
    LambdaFunctionStartFailedEventDetails,
    LambdaFunctionStartFailedEventDetailsDict,
)
from .lambda_function_succeeded_event_details import (
    LambdaFunctionSucceededEventDetails,
    LambdaFunctionSucceededEventDetailsDict,
)
from .lambda_function_timed_out_event_details import (
    LambdaFunctionTimedOutEventDetails,
    LambdaFunctionTimedOutEventDetailsDict,
)
from .map_iteration_event_details import MapIterationEventDetails, MapIterationEventDetailsDict
from .map_run_failed_event_details import MapRunFailedEventDetails, MapRunFailedEventDetailsDict
from .map_run_redriven_event_details import MapRunRedrivenEventDetails, MapRunRedrivenEventDetailsDict
from .map_run_started_event_details import MapRunStartedEventDetails, MapRunStartedEventDetailsDict
from .map_state_started_event_details import MapStateStartedEventDetails, MapStateStartedEventDetailsDict
from .state_entered_event_details import StateEnteredEventDetails, StateEnteredEventDetailsDict
from .state_exited_event_details import StateExitedEventDetails, StateExitedEventDetailsDict
from .task_failed_event_details import TaskFailedEventDetails, TaskFailedEventDetailsDict
from .task_scheduled_event_details import TaskScheduledEventDetails, TaskScheduledEventDetailsDict
from .task_start_failed_event_details import TaskStartFailedEventDetails, TaskStartFailedEventDetailsDict
from .task_started_event_details import TaskStartedEventDetails, TaskStartedEventDetailsDict
from .task_submit_failed_event_details import TaskSubmitFailedEventDetails, TaskSubmitFailedEventDetailsDict
from .task_submitted_event_details import TaskSubmittedEventDetails, TaskSubmittedEventDetailsDict
from .task_succeeded_event_details import TaskSucceededEventDetails, TaskSucceededEventDetailsDict
from .task_timed_out_event_details import TaskTimedOutEventDetails, TaskTimedOutEventDetailsDict


class HistoryEvent(SdkBaseModel):
    timestamp: RFC3339DateTime
    """The date and time the event occurred, expressed in seconds and fractional milliseconds since the Unix epoch,
    which is defined as January 1, 1970, at 00:00:00 Coordinated Universal Time (UTC)."""

    type_: Type3OrStr = Field(alias="type")
    """The type of the event."""

    id: int
    """The id of the event. Events are numbered sequentially, starting at one."""

    previous_event_id: Optional[int] = Field(default=UNSET, alias="previousEventId")
    """The id of the previous event."""

    activity_failed_event_details: Optional[ActivityFailedEventDetails] = Field(
        default=UNSET, alias="activityFailedEventDetails"
    )
    activity_schedule_failed_event_details: Optional[ActivityScheduleFailedEventDetails] = Field(
        default=UNSET, alias="activityScheduleFailedEventDetails"
    )
    activity_scheduled_event_details: Optional[ActivityScheduledEventDetails] = Field(
        default=UNSET, alias="activityScheduledEventDetails"
    )
    activity_started_event_details: Optional[ActivityStartedEventDetails] = Field(
        default=UNSET, alias="activityStartedEventDetails"
    )
    activity_succeeded_event_details: Optional[ActivitySucceededEventDetails] = Field(
        default=UNSET, alias="activitySucceededEventDetails"
    )
    activity_timed_out_event_details: Optional[ActivityTimedOutEventDetails] = Field(
        default=UNSET, alias="activityTimedOutEventDetails"
    )
    task_failed_event_details: Optional[TaskFailedEventDetails] = Field(default=UNSET, alias="taskFailedEventDetails")
    task_scheduled_event_details: Optional[TaskScheduledEventDetails] = Field(
        default=UNSET, alias="taskScheduledEventDetails"
    )
    task_start_failed_event_details: Optional[TaskStartFailedEventDetails] = Field(
        default=UNSET, alias="taskStartFailedEventDetails"
    )
    task_started_event_details: Optional[TaskStartedEventDetails] = Field(
        default=UNSET, alias="taskStartedEventDetails"
    )
    task_submit_failed_event_details: Optional[TaskSubmitFailedEventDetails] = Field(
        default=UNSET, alias="taskSubmitFailedEventDetails"
    )
    task_submitted_event_details: Optional[TaskSubmittedEventDetails] = Field(
        default=UNSET, alias="taskSubmittedEventDetails"
    )
    task_succeeded_event_details: Optional[TaskSucceededEventDetails] = Field(
        default=UNSET, alias="taskSucceededEventDetails"
    )
    task_timed_out_event_details: Optional[TaskTimedOutEventDetails] = Field(
        default=UNSET, alias="taskTimedOutEventDetails"
    )
    execution_failed_event_details: Optional[ExecutionFailedEventDetails] = Field(
        default=UNSET, alias="executionFailedEventDetails"
    )
    execution_started_event_details: Optional[ExecutionStartedEventDetails] = Field(
        default=UNSET, alias="executionStartedEventDetails"
    )
    execution_succeeded_event_details: Optional[ExecutionSucceededEventDetails] = Field(
        default=UNSET, alias="executionSucceededEventDetails"
    )
    execution_aborted_event_details: Optional[ExecutionAbortedEventDetails] = Field(
        default=UNSET, alias="executionAbortedEventDetails"
    )
    execution_timed_out_event_details: Optional[ExecutionTimedOutEventDetails] = Field(
        default=UNSET, alias="executionTimedOutEventDetails"
    )
    execution_redriven_event_details: Optional[ExecutionRedrivenEventDetails] = Field(
        default=UNSET, alias="executionRedrivenEventDetails"
    )
    map_state_started_event_details: Optional[MapStateStartedEventDetails] = Field(
        default=UNSET, alias="mapStateStartedEventDetails"
    )
    map_iteration_started_event_details: Optional[MapIterationEventDetails] = Field(
        default=UNSET, alias="mapIterationStartedEventDetails"
    )
    map_iteration_succeeded_event_details: Optional[MapIterationEventDetails] = Field(
        default=UNSET, alias="mapIterationSucceededEventDetails"
    )
    map_iteration_failed_event_details: Optional[MapIterationEventDetails] = Field(
        default=UNSET, alias="mapIterationFailedEventDetails"
    )
    map_iteration_aborted_event_details: Optional[MapIterationEventDetails] = Field(
        default=UNSET, alias="mapIterationAbortedEventDetails"
    )
    lambda_function_failed_event_details: Optional[LambdaFunctionFailedEventDetails] = Field(
        default=UNSET, alias="lambdaFunctionFailedEventDetails"
    )
    lambda_function_schedule_failed_event_details: Optional[LambdaFunctionScheduleFailedEventDetails] = Field(
        default=UNSET, alias="lambdaFunctionScheduleFailedEventDetails"
    )
    lambda_function_scheduled_event_details: Optional[LambdaFunctionScheduledEventDetails] = Field(
        default=UNSET, alias="lambdaFunctionScheduledEventDetails"
    )
    lambda_function_start_failed_event_details: Optional[LambdaFunctionStartFailedEventDetails] = Field(
        default=UNSET, alias="lambdaFunctionStartFailedEventDetails"
    )
    lambda_function_succeeded_event_details: Optional[LambdaFunctionSucceededEventDetails] = Field(
        default=UNSET, alias="lambdaFunctionSucceededEventDetails"
    )
    lambda_function_timed_out_event_details: Optional[LambdaFunctionTimedOutEventDetails] = Field(
        default=UNSET, alias="lambdaFunctionTimedOutEventDetails"
    )
    state_entered_event_details: Optional[StateEnteredEventDetails] = Field(
        default=UNSET, alias="stateEnteredEventDetails"
    )
    state_exited_event_details: Optional[StateExitedEventDetails] = Field(
        default=UNSET, alias="stateExitedEventDetails"
    )
    map_run_started_event_details: Optional[MapRunStartedEventDetails] = Field(
        default=UNSET, alias="mapRunStartedEventDetails"
    )
    map_run_failed_event_details: Optional[MapRunFailedEventDetails] = Field(
        default=UNSET, alias="mapRunFailedEventDetails"
    )
    map_run_redriven_event_details: Optional[MapRunRedrivenEventDetails] = Field(
        default=UNSET, alias="mapRunRedrivenEventDetails"
    )
    evaluation_failed_event_details: Optional[EvaluationFailedEventDetails] = Field(
        default=UNSET, alias="evaluationFailedEventDetails"
    )


class HistoryEventDict(TypedDict):
    timestamp: RFC3339DateTime
    type_: Type3OrStr
    id: int
    previous_event_id: NotRequired[int]
    activity_failed_event_details: NotRequired[ActivityFailedEventDetailsDict]
    activity_schedule_failed_event_details: NotRequired[ActivityScheduleFailedEventDetailsDict]
    activity_scheduled_event_details: NotRequired[ActivityScheduledEventDetailsDict]
    activity_started_event_details: NotRequired[ActivityStartedEventDetailsDict]
    activity_succeeded_event_details: NotRequired[ActivitySucceededEventDetailsDict]
    activity_timed_out_event_details: NotRequired[ActivityTimedOutEventDetailsDict]
    task_failed_event_details: NotRequired[TaskFailedEventDetailsDict]
    task_scheduled_event_details: NotRequired[TaskScheduledEventDetailsDict]
    task_start_failed_event_details: NotRequired[TaskStartFailedEventDetailsDict]
    task_started_event_details: NotRequired[TaskStartedEventDetailsDict]
    task_submit_failed_event_details: NotRequired[TaskSubmitFailedEventDetailsDict]
    task_submitted_event_details: NotRequired[TaskSubmittedEventDetailsDict]
    task_succeeded_event_details: NotRequired[TaskSucceededEventDetailsDict]
    task_timed_out_event_details: NotRequired[TaskTimedOutEventDetailsDict]
    execution_failed_event_details: NotRequired[ExecutionFailedEventDetailsDict]
    execution_started_event_details: NotRequired[ExecutionStartedEventDetailsDict]
    execution_succeeded_event_details: NotRequired[ExecutionSucceededEventDetailsDict]
    execution_aborted_event_details: NotRequired[ExecutionAbortedEventDetailsDict]
    execution_timed_out_event_details: NotRequired[ExecutionTimedOutEventDetailsDict]
    execution_redriven_event_details: NotRequired[ExecutionRedrivenEventDetailsDict]
    map_state_started_event_details: NotRequired[MapStateStartedEventDetailsDict]
    map_iteration_started_event_details: NotRequired[MapIterationEventDetailsDict]
    map_iteration_succeeded_event_details: NotRequired[MapIterationEventDetailsDict]
    map_iteration_failed_event_details: NotRequired[MapIterationEventDetailsDict]
    map_iteration_aborted_event_details: NotRequired[MapIterationEventDetailsDict]
    lambda_function_failed_event_details: NotRequired[LambdaFunctionFailedEventDetailsDict]
    lambda_function_schedule_failed_event_details: NotRequired[LambdaFunctionScheduleFailedEventDetailsDict]
    lambda_function_scheduled_event_details: NotRequired[LambdaFunctionScheduledEventDetailsDict]
    lambda_function_start_failed_event_details: NotRequired[LambdaFunctionStartFailedEventDetailsDict]
    lambda_function_succeeded_event_details: NotRequired[LambdaFunctionSucceededEventDetailsDict]
    lambda_function_timed_out_event_details: NotRequired[LambdaFunctionTimedOutEventDetailsDict]
    state_entered_event_details: NotRequired[StateEnteredEventDetailsDict]
    state_exited_event_details: NotRequired[StateExitedEventDetailsDict]
    map_run_started_event_details: NotRequired[MapRunStartedEventDetailsDict]
    map_run_failed_event_details: NotRequired[MapRunFailedEventDetailsDict]
    map_run_redriven_event_details: NotRequired[MapRunRedrivenEventDetailsDict]
    evaluation_failed_event_details: NotRequired[EvaluationFailedEventDetailsDict]
