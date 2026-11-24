from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .activity_task_cancel_requested_event_attributes import (
    ActivityTaskCancelRequestedEventAttributes,
    ActivityTaskCancelRequestedEventAttributesDict,
)
from .activity_task_canceled_event_attributes import (
    ActivityTaskCanceledEventAttributes,
    ActivityTaskCanceledEventAttributesDict,
)
from .activity_task_completed_event_attributes import (
    ActivityTaskCompletedEventAttributes,
    ActivityTaskCompletedEventAttributesDict,
)
from .activity_task_failed_event_attributes import (
    ActivityTaskFailedEventAttributes,
    ActivityTaskFailedEventAttributesDict,
)
from .activity_task_scheduled_event_attributes import (
    ActivityTaskScheduledEventAttributes,
    ActivityTaskScheduledEventAttributesDict,
)
from .activity_task_started_event_attributes import (
    ActivityTaskStartedEventAttributes,
    ActivityTaskStartedEventAttributesDict,
)
from .activity_task_timed_out_event_attributes import (
    ActivityTaskTimedOutEventAttributes,
    ActivityTaskTimedOutEventAttributesDict,
)
from .cancel_timer_failed_event_attributes import CancelTimerFailedEventAttributes, CancelTimerFailedEventAttributesDict
from .cancel_workflow_execution_failed_event_attributes import (
    CancelWorkflowExecutionFailedEventAttributes,
    CancelWorkflowExecutionFailedEventAttributesDict,
)
from .child_workflow_execution_canceled_event_attributes import (
    ChildWorkflowExecutionCanceledEventAttributes,
    ChildWorkflowExecutionCanceledEventAttributesDict,
)
from .child_workflow_execution_completed_event_attributes import (
    ChildWorkflowExecutionCompletedEventAttributes,
    ChildWorkflowExecutionCompletedEventAttributesDict,
)
from .child_workflow_execution_failed_event_attributes import (
    ChildWorkflowExecutionFailedEventAttributes,
    ChildWorkflowExecutionFailedEventAttributesDict,
)
from .child_workflow_execution_started_event_attributes import (
    ChildWorkflowExecutionStartedEventAttributes,
    ChildWorkflowExecutionStartedEventAttributesDict,
)
from .child_workflow_execution_terminated_event_attributes import (
    ChildWorkflowExecutionTerminatedEventAttributes,
    ChildWorkflowExecutionTerminatedEventAttributesDict,
)
from .child_workflow_execution_timed_out_event_attributes import (
    ChildWorkflowExecutionTimedOutEventAttributes,
    ChildWorkflowExecutionTimedOutEventAttributesDict,
)
from .complete_workflow_execution_failed_event_attributes import (
    CompleteWorkflowExecutionFailedEventAttributes,
    CompleteWorkflowExecutionFailedEventAttributesDict,
)
from .continue_as_new_workflow_execution_failed_event_attributes import (
    ContinueAsNewWorkflowExecutionFailedEventAttributes,
    ContinueAsNewWorkflowExecutionFailedEventAttributesDict,
)
from .decision_task_completed_event_attributes import (
    DecisionTaskCompletedEventAttributes,
    DecisionTaskCompletedEventAttributesDict,
)
from .decision_task_scheduled_event_attributes import (
    DecisionTaskScheduledEventAttributes,
    DecisionTaskScheduledEventAttributesDict,
)
from .decision_task_started_event_attributes import (
    DecisionTaskStartedEventAttributes,
    DecisionTaskStartedEventAttributesDict,
)
from .decision_task_timed_out_event_attributes import (
    DecisionTaskTimedOutEventAttributes,
    DecisionTaskTimedOutEventAttributesDict,
)
from .enums.event_type import EventTypeOrStr
from .external_workflow_execution_cancel_requested_event_attributes import (
    ExternalWorkflowExecutionCancelRequestedEventAttributes,
    ExternalWorkflowExecutionCancelRequestedEventAttributesDict,
)
from .external_workflow_execution_signaled_event_attributes import (
    ExternalWorkflowExecutionSignaledEventAttributes,
    ExternalWorkflowExecutionSignaledEventAttributesDict,
)
from .fail_workflow_execution_failed_event_attributes import (
    FailWorkflowExecutionFailedEventAttributes,
    FailWorkflowExecutionFailedEventAttributesDict,
)
from .lambda_function_completed_event_attributes import (
    LambdaFunctionCompletedEventAttributes,
    LambdaFunctionCompletedEventAttributesDict,
)
from .lambda_function_failed_event_attributes import (
    LambdaFunctionFailedEventAttributes,
    LambdaFunctionFailedEventAttributesDict,
)
from .lambda_function_scheduled_event_attributes import (
    LambdaFunctionScheduledEventAttributes,
    LambdaFunctionScheduledEventAttributesDict,
)
from .lambda_function_started_event_attributes import (
    LambdaFunctionStartedEventAttributes,
    LambdaFunctionStartedEventAttributesDict,
)
from .lambda_function_timed_out_event_attributes import (
    LambdaFunctionTimedOutEventAttributes,
    LambdaFunctionTimedOutEventAttributesDict,
)
from .marker_recorded_event_attributes import MarkerRecordedEventAttributes, MarkerRecordedEventAttributesDict
from .record_marker_failed_event_attributes import (
    RecordMarkerFailedEventAttributes,
    RecordMarkerFailedEventAttributesDict,
)
from .request_cancel_activity_task_failed_event_attributes import (
    RequestCancelActivityTaskFailedEventAttributes,
    RequestCancelActivityTaskFailedEventAttributesDict,
)
from .request_cancel_external_workflow_execution_failed_event_attributes import (
    RequestCancelExternalWorkflowExecutionFailedEventAttributes,
    RequestCancelExternalWorkflowExecutionFailedEventAttributesDict,
)
from .request_cancel_external_workflow_execution_initiated_event_attributes import (
    RequestCancelExternalWorkflowExecutionInitiatedEventAttributes,
    RequestCancelExternalWorkflowExecutionInitiatedEventAttributesDict,
)
from .schedule_activity_task_failed_event_attributes import (
    ScheduleActivityTaskFailedEventAttributes,
    ScheduleActivityTaskFailedEventAttributesDict,
)
from .schedule_lambda_function_failed_event_attributes import (
    ScheduleLambdaFunctionFailedEventAttributes,
    ScheduleLambdaFunctionFailedEventAttributesDict,
)
from .signal_external_workflow_execution_failed_event_attributes import (
    SignalExternalWorkflowExecutionFailedEventAttributes,
    SignalExternalWorkflowExecutionFailedEventAttributesDict,
)
from .signal_external_workflow_execution_initiated_event_attributes import (
    SignalExternalWorkflowExecutionInitiatedEventAttributes,
    SignalExternalWorkflowExecutionInitiatedEventAttributesDict,
)
from .start_child_workflow_execution_failed_event_attributes import (
    StartChildWorkflowExecutionFailedEventAttributes,
    StartChildWorkflowExecutionFailedEventAttributesDict,
)
from .start_child_workflow_execution_initiated_event_attributes import (
    StartChildWorkflowExecutionInitiatedEventAttributes,
    StartChildWorkflowExecutionInitiatedEventAttributesDict,
)
from .start_lambda_function_failed_event_attributes import (
    StartLambdaFunctionFailedEventAttributes,
    StartLambdaFunctionFailedEventAttributesDict,
)
from .start_timer_failed_event_attributes import StartTimerFailedEventAttributes, StartTimerFailedEventAttributesDict
from .timer_canceled_event_attributes import TimerCanceledEventAttributes, TimerCanceledEventAttributesDict
from .timer_fired_event_attributes import TimerFiredEventAttributes, TimerFiredEventAttributesDict
from .timer_started_event_attributes import TimerStartedEventAttributes, TimerStartedEventAttributesDict
from .workflow_execution_cancel_requested_event_attributes import (
    WorkflowExecutionCancelRequestedEventAttributes,
    WorkflowExecutionCancelRequestedEventAttributesDict,
)
from .workflow_execution_canceled_event_attributes import (
    WorkflowExecutionCanceledEventAttributes,
    WorkflowExecutionCanceledEventAttributesDict,
)
from .workflow_execution_completed_event_attributes import (
    WorkflowExecutionCompletedEventAttributes,
    WorkflowExecutionCompletedEventAttributesDict,
)
from .workflow_execution_continued_as_new_event_attributes import (
    WorkflowExecutionContinuedAsNewEventAttributes,
    WorkflowExecutionContinuedAsNewEventAttributesDict,
)
from .workflow_execution_failed_event_attributes import (
    WorkflowExecutionFailedEventAttributes,
    WorkflowExecutionFailedEventAttributesDict,
)
from .workflow_execution_signaled_event_attributes import (
    WorkflowExecutionSignaledEventAttributes,
    WorkflowExecutionSignaledEventAttributesDict,
)
from .workflow_execution_started_event_attributes import (
    WorkflowExecutionStartedEventAttributes,
    WorkflowExecutionStartedEventAttributesDict,
)
from .workflow_execution_terminated_event_attributes import (
    WorkflowExecutionTerminatedEventAttributes,
    WorkflowExecutionTerminatedEventAttributesDict,
)
from .workflow_execution_timed_out_event_attributes import (
    WorkflowExecutionTimedOutEventAttributes,
    WorkflowExecutionTimedOutEventAttributesDict,
)


class HistoryEvent(SdkBaseModel):
    event_timestamp: RFC3339DateTime = Field(alias="eventTimestamp")
    """The date and time when the event occurred."""

    event_type: EventTypeOrStr = Field(alias="eventType")
    """The type of the history event."""

    event_id: int = Field(alias="eventId")
    """The system generated ID of the event. This ID uniquely identifies the event with in the workflow execution
    history."""

    workflow_execution_started_event_attributes: Optional[WorkflowExecutionStartedEventAttributes] = Field(
        default=UNSET, alias="workflowExecutionStartedEventAttributes"
    )
    workflow_execution_completed_event_attributes: Optional[WorkflowExecutionCompletedEventAttributes] = Field(
        default=UNSET, alias="workflowExecutionCompletedEventAttributes"
    )
    complete_workflow_execution_failed_event_attributes: Optional[
        CompleteWorkflowExecutionFailedEventAttributes
    ] = Field(default=UNSET, alias="completeWorkflowExecutionFailedEventAttributes")
    workflow_execution_failed_event_attributes: Optional[WorkflowExecutionFailedEventAttributes] = Field(
        default=UNSET, alias="workflowExecutionFailedEventAttributes"
    )
    fail_workflow_execution_failed_event_attributes: Optional[FailWorkflowExecutionFailedEventAttributes] = Field(
        default=UNSET, alias="failWorkflowExecutionFailedEventAttributes"
    )
    workflow_execution_timed_out_event_attributes: Optional[WorkflowExecutionTimedOutEventAttributes] = Field(
        default=UNSET, alias="workflowExecutionTimedOutEventAttributes"
    )
    workflow_execution_canceled_event_attributes: Optional[WorkflowExecutionCanceledEventAttributes] = Field(
        default=UNSET, alias="workflowExecutionCanceledEventAttributes"
    )
    cancel_workflow_execution_failed_event_attributes: Optional[CancelWorkflowExecutionFailedEventAttributes] = Field(
        default=UNSET, alias="cancelWorkflowExecutionFailedEventAttributes"
    )
    workflow_execution_continued_as_new_event_attributes: Optional[
        WorkflowExecutionContinuedAsNewEventAttributes
    ] = Field(default=UNSET, alias="workflowExecutionContinuedAsNewEventAttributes")
    continue_as_new_workflow_execution_failed_event_attributes: Optional[
        ContinueAsNewWorkflowExecutionFailedEventAttributes
    ] = Field(default=UNSET, alias="continueAsNewWorkflowExecutionFailedEventAttributes")
    workflow_execution_terminated_event_attributes: Optional[WorkflowExecutionTerminatedEventAttributes] = Field(
        default=UNSET, alias="workflowExecutionTerminatedEventAttributes"
    )
    workflow_execution_cancel_requested_event_attributes: Optional[
        WorkflowExecutionCancelRequestedEventAttributes
    ] = Field(default=UNSET, alias="workflowExecutionCancelRequestedEventAttributes")
    decision_task_scheduled_event_attributes: Optional[DecisionTaskScheduledEventAttributes] = Field(
        default=UNSET, alias="decisionTaskScheduledEventAttributes"
    )
    decision_task_started_event_attributes: Optional[DecisionTaskStartedEventAttributes] = Field(
        default=UNSET, alias="decisionTaskStartedEventAttributes"
    )
    decision_task_completed_event_attributes: Optional[DecisionTaskCompletedEventAttributes] = Field(
        default=UNSET, alias="decisionTaskCompletedEventAttributes"
    )
    decision_task_timed_out_event_attributes: Optional[DecisionTaskTimedOutEventAttributes] = Field(
        default=UNSET, alias="decisionTaskTimedOutEventAttributes"
    )
    activity_task_scheduled_event_attributes: Optional[ActivityTaskScheduledEventAttributes] = Field(
        default=UNSET, alias="activityTaskScheduledEventAttributes"
    )
    activity_task_started_event_attributes: Optional[ActivityTaskStartedEventAttributes] = Field(
        default=UNSET, alias="activityTaskStartedEventAttributes"
    )
    activity_task_completed_event_attributes: Optional[ActivityTaskCompletedEventAttributes] = Field(
        default=UNSET, alias="activityTaskCompletedEventAttributes"
    )
    activity_task_failed_event_attributes: Optional[ActivityTaskFailedEventAttributes] = Field(
        default=UNSET, alias="activityTaskFailedEventAttributes"
    )
    activity_task_timed_out_event_attributes: Optional[ActivityTaskTimedOutEventAttributes] = Field(
        default=UNSET, alias="activityTaskTimedOutEventAttributes"
    )
    activity_task_canceled_event_attributes: Optional[ActivityTaskCanceledEventAttributes] = Field(
        default=UNSET, alias="activityTaskCanceledEventAttributes"
    )
    activity_task_cancel_requested_event_attributes: Optional[ActivityTaskCancelRequestedEventAttributes] = Field(
        default=UNSET, alias="activityTaskCancelRequestedEventAttributes"
    )
    workflow_execution_signaled_event_attributes: Optional[WorkflowExecutionSignaledEventAttributes] = Field(
        default=UNSET, alias="workflowExecutionSignaledEventAttributes"
    )
    marker_recorded_event_attributes: Optional[MarkerRecordedEventAttributes] = Field(
        default=UNSET, alias="markerRecordedEventAttributes"
    )
    record_marker_failed_event_attributes: Optional[RecordMarkerFailedEventAttributes] = Field(
        default=UNSET, alias="recordMarkerFailedEventAttributes"
    )
    timer_started_event_attributes: Optional[TimerStartedEventAttributes] = Field(
        default=UNSET, alias="timerStartedEventAttributes"
    )
    timer_fired_event_attributes: Optional[TimerFiredEventAttributes] = Field(
        default=UNSET, alias="timerFiredEventAttributes"
    )
    timer_canceled_event_attributes: Optional[TimerCanceledEventAttributes] = Field(
        default=UNSET, alias="timerCanceledEventAttributes"
    )
    start_child_workflow_execution_initiated_event_attributes: Optional[
        StartChildWorkflowExecutionInitiatedEventAttributes
    ] = Field(default=UNSET, alias="startChildWorkflowExecutionInitiatedEventAttributes")
    child_workflow_execution_started_event_attributes: Optional[ChildWorkflowExecutionStartedEventAttributes] = Field(
        default=UNSET, alias="childWorkflowExecutionStartedEventAttributes"
    )
    child_workflow_execution_completed_event_attributes: Optional[
        ChildWorkflowExecutionCompletedEventAttributes
    ] = Field(default=UNSET, alias="childWorkflowExecutionCompletedEventAttributes")
    child_workflow_execution_failed_event_attributes: Optional[ChildWorkflowExecutionFailedEventAttributes] = Field(
        default=UNSET, alias="childWorkflowExecutionFailedEventAttributes"
    )
    child_workflow_execution_timed_out_event_attributes: Optional[
        ChildWorkflowExecutionTimedOutEventAttributes
    ] = Field(default=UNSET, alias="childWorkflowExecutionTimedOutEventAttributes")
    child_workflow_execution_canceled_event_attributes: Optional[ChildWorkflowExecutionCanceledEventAttributes] = Field(
        default=UNSET, alias="childWorkflowExecutionCanceledEventAttributes"
    )
    child_workflow_execution_terminated_event_attributes: Optional[
        ChildWorkflowExecutionTerminatedEventAttributes
    ] = Field(default=UNSET, alias="childWorkflowExecutionTerminatedEventAttributes")
    signal_external_workflow_execution_initiated_event_attributes: Optional[
        SignalExternalWorkflowExecutionInitiatedEventAttributes
    ] = Field(default=UNSET, alias="signalExternalWorkflowExecutionInitiatedEventAttributes")
    external_workflow_execution_signaled_event_attributes: Optional[
        ExternalWorkflowExecutionSignaledEventAttributes
    ] = Field(default=UNSET, alias="externalWorkflowExecutionSignaledEventAttributes")
    signal_external_workflow_execution_failed_event_attributes: Optional[
        SignalExternalWorkflowExecutionFailedEventAttributes
    ] = Field(default=UNSET, alias="signalExternalWorkflowExecutionFailedEventAttributes")
    external_workflow_execution_cancel_requested_event_attributes: Optional[
        ExternalWorkflowExecutionCancelRequestedEventAttributes
    ] = Field(default=UNSET, alias="externalWorkflowExecutionCancelRequestedEventAttributes")
    request_cancel_external_workflow_execution_initiated_event_attributes: Optional[
        RequestCancelExternalWorkflowExecutionInitiatedEventAttributes
    ] = Field(default=UNSET, alias="requestCancelExternalWorkflowExecutionInitiatedEventAttributes")
    request_cancel_external_workflow_execution_failed_event_attributes: Optional[
        RequestCancelExternalWorkflowExecutionFailedEventAttributes
    ] = Field(default=UNSET, alias="requestCancelExternalWorkflowExecutionFailedEventAttributes")
    schedule_activity_task_failed_event_attributes: Optional[ScheduleActivityTaskFailedEventAttributes] = Field(
        default=UNSET, alias="scheduleActivityTaskFailedEventAttributes"
    )
    request_cancel_activity_task_failed_event_attributes: Optional[
        RequestCancelActivityTaskFailedEventAttributes
    ] = Field(default=UNSET, alias="requestCancelActivityTaskFailedEventAttributes")
    start_timer_failed_event_attributes: Optional[StartTimerFailedEventAttributes] = Field(
        default=UNSET, alias="startTimerFailedEventAttributes"
    )
    cancel_timer_failed_event_attributes: Optional[CancelTimerFailedEventAttributes] = Field(
        default=UNSET, alias="cancelTimerFailedEventAttributes"
    )
    start_child_workflow_execution_failed_event_attributes: Optional[
        StartChildWorkflowExecutionFailedEventAttributes
    ] = Field(default=UNSET, alias="startChildWorkflowExecutionFailedEventAttributes")
    lambda_function_scheduled_event_attributes: Optional[LambdaFunctionScheduledEventAttributes] = Field(
        default=UNSET, alias="lambdaFunctionScheduledEventAttributes"
    )
    lambda_function_started_event_attributes: Optional[LambdaFunctionStartedEventAttributes] = Field(
        default=UNSET, alias="lambdaFunctionStartedEventAttributes"
    )
    lambda_function_completed_event_attributes: Optional[LambdaFunctionCompletedEventAttributes] = Field(
        default=UNSET, alias="lambdaFunctionCompletedEventAttributes"
    )
    lambda_function_failed_event_attributes: Optional[LambdaFunctionFailedEventAttributes] = Field(
        default=UNSET, alias="lambdaFunctionFailedEventAttributes"
    )
    lambda_function_timed_out_event_attributes: Optional[LambdaFunctionTimedOutEventAttributes] = Field(
        default=UNSET, alias="lambdaFunctionTimedOutEventAttributes"
    )
    schedule_lambda_function_failed_event_attributes: Optional[ScheduleLambdaFunctionFailedEventAttributes] = Field(
        default=UNSET, alias="scheduleLambdaFunctionFailedEventAttributes"
    )
    start_lambda_function_failed_event_attributes: Optional[StartLambdaFunctionFailedEventAttributes] = Field(
        default=UNSET, alias="startLambdaFunctionFailedEventAttributes"
    )


class HistoryEventDict(TypedDict):
    event_timestamp: RFC3339DateTime
    event_type: EventTypeOrStr
    event_id: int
    workflow_execution_started_event_attributes: NotRequired[WorkflowExecutionStartedEventAttributesDict]
    workflow_execution_completed_event_attributes: NotRequired[WorkflowExecutionCompletedEventAttributesDict]
    complete_workflow_execution_failed_event_attributes: NotRequired[CompleteWorkflowExecutionFailedEventAttributesDict]
    workflow_execution_failed_event_attributes: NotRequired[WorkflowExecutionFailedEventAttributesDict]
    fail_workflow_execution_failed_event_attributes: NotRequired[FailWorkflowExecutionFailedEventAttributesDict]
    workflow_execution_timed_out_event_attributes: NotRequired[WorkflowExecutionTimedOutEventAttributesDict]
    workflow_execution_canceled_event_attributes: NotRequired[WorkflowExecutionCanceledEventAttributesDict]
    cancel_workflow_execution_failed_event_attributes: NotRequired[CancelWorkflowExecutionFailedEventAttributesDict]
    workflow_execution_continued_as_new_event_attributes: NotRequired[
        WorkflowExecutionContinuedAsNewEventAttributesDict
    ]
    continue_as_new_workflow_execution_failed_event_attributes: NotRequired[
        ContinueAsNewWorkflowExecutionFailedEventAttributesDict
    ]
    workflow_execution_terminated_event_attributes: NotRequired[WorkflowExecutionTerminatedEventAttributesDict]
    workflow_execution_cancel_requested_event_attributes: NotRequired[
        WorkflowExecutionCancelRequestedEventAttributesDict
    ]
    decision_task_scheduled_event_attributes: NotRequired[DecisionTaskScheduledEventAttributesDict]
    decision_task_started_event_attributes: NotRequired[DecisionTaskStartedEventAttributesDict]
    decision_task_completed_event_attributes: NotRequired[DecisionTaskCompletedEventAttributesDict]
    decision_task_timed_out_event_attributes: NotRequired[DecisionTaskTimedOutEventAttributesDict]
    activity_task_scheduled_event_attributes: NotRequired[ActivityTaskScheduledEventAttributesDict]
    activity_task_started_event_attributes: NotRequired[ActivityTaskStartedEventAttributesDict]
    activity_task_completed_event_attributes: NotRequired[ActivityTaskCompletedEventAttributesDict]
    activity_task_failed_event_attributes: NotRequired[ActivityTaskFailedEventAttributesDict]
    activity_task_timed_out_event_attributes: NotRequired[ActivityTaskTimedOutEventAttributesDict]
    activity_task_canceled_event_attributes: NotRequired[ActivityTaskCanceledEventAttributesDict]
    activity_task_cancel_requested_event_attributes: NotRequired[ActivityTaskCancelRequestedEventAttributesDict]
    workflow_execution_signaled_event_attributes: NotRequired[WorkflowExecutionSignaledEventAttributesDict]
    marker_recorded_event_attributes: NotRequired[MarkerRecordedEventAttributesDict]
    record_marker_failed_event_attributes: NotRequired[RecordMarkerFailedEventAttributesDict]
    timer_started_event_attributes: NotRequired[TimerStartedEventAttributesDict]
    timer_fired_event_attributes: NotRequired[TimerFiredEventAttributesDict]
    timer_canceled_event_attributes: NotRequired[TimerCanceledEventAttributesDict]
    start_child_workflow_execution_initiated_event_attributes: NotRequired[
        StartChildWorkflowExecutionInitiatedEventAttributesDict
    ]
    child_workflow_execution_started_event_attributes: NotRequired[ChildWorkflowExecutionStartedEventAttributesDict]
    child_workflow_execution_completed_event_attributes: NotRequired[ChildWorkflowExecutionCompletedEventAttributesDict]
    child_workflow_execution_failed_event_attributes: NotRequired[ChildWorkflowExecutionFailedEventAttributesDict]
    child_workflow_execution_timed_out_event_attributes: NotRequired[ChildWorkflowExecutionTimedOutEventAttributesDict]
    child_workflow_execution_canceled_event_attributes: NotRequired[ChildWorkflowExecutionCanceledEventAttributesDict]
    child_workflow_execution_terminated_event_attributes: NotRequired[
        ChildWorkflowExecutionTerminatedEventAttributesDict
    ]
    signal_external_workflow_execution_initiated_event_attributes: NotRequired[
        SignalExternalWorkflowExecutionInitiatedEventAttributesDict
    ]
    external_workflow_execution_signaled_event_attributes: NotRequired[
        ExternalWorkflowExecutionSignaledEventAttributesDict
    ]
    signal_external_workflow_execution_failed_event_attributes: NotRequired[
        SignalExternalWorkflowExecutionFailedEventAttributesDict
    ]
    external_workflow_execution_cancel_requested_event_attributes: NotRequired[
        ExternalWorkflowExecutionCancelRequestedEventAttributesDict
    ]
    request_cancel_external_workflow_execution_initiated_event_attributes: NotRequired[
        RequestCancelExternalWorkflowExecutionInitiatedEventAttributesDict
    ]
    request_cancel_external_workflow_execution_failed_event_attributes: NotRequired[
        RequestCancelExternalWorkflowExecutionFailedEventAttributesDict
    ]
    schedule_activity_task_failed_event_attributes: NotRequired[ScheduleActivityTaskFailedEventAttributesDict]
    request_cancel_activity_task_failed_event_attributes: NotRequired[
        RequestCancelActivityTaskFailedEventAttributesDict
    ]
    start_timer_failed_event_attributes: NotRequired[StartTimerFailedEventAttributesDict]
    cancel_timer_failed_event_attributes: NotRequired[CancelTimerFailedEventAttributesDict]
    start_child_workflow_execution_failed_event_attributes: NotRequired[
        StartChildWorkflowExecutionFailedEventAttributesDict
    ]
    lambda_function_scheduled_event_attributes: NotRequired[LambdaFunctionScheduledEventAttributesDict]
    lambda_function_started_event_attributes: NotRequired[LambdaFunctionStartedEventAttributesDict]
    lambda_function_completed_event_attributes: NotRequired[LambdaFunctionCompletedEventAttributesDict]
    lambda_function_failed_event_attributes: NotRequired[LambdaFunctionFailedEventAttributesDict]
    lambda_function_timed_out_event_attributes: NotRequired[LambdaFunctionTimedOutEventAttributesDict]
    schedule_lambda_function_failed_event_attributes: NotRequired[ScheduleLambdaFunctionFailedEventAttributesDict]
    start_lambda_function_failed_event_attributes: NotRequired[StartLambdaFunctionFailedEventAttributesDict]
