from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .cancel_timer_decision_attributes import CancelTimerDecisionAttributes, CancelTimerDecisionAttributesDict
from .cancel_workflow_execution_decision_attributes import (
    CancelWorkflowExecutionDecisionAttributes,
    CancelWorkflowExecutionDecisionAttributesDict,
)
from .complete_workflow_execution_decision_attributes import (
    CompleteWorkflowExecutionDecisionAttributes,
    CompleteWorkflowExecutionDecisionAttributesDict,
)
from .continue_as_new_workflow_execution_decision_attributes import (
    ContinueAsNewWorkflowExecutionDecisionAttributes,
    ContinueAsNewWorkflowExecutionDecisionAttributesDict,
)
from .enums.decision_type import DecisionTypeOrStr
from .fail_workflow_execution_decision_attributes import (
    FailWorkflowExecutionDecisionAttributes,
    FailWorkflowExecutionDecisionAttributesDict,
)
from .record_marker_decision_attributes import RecordMarkerDecisionAttributes, RecordMarkerDecisionAttributesDict
from .request_cancel_activity_task_decision_attributes import (
    RequestCancelActivityTaskDecisionAttributes,
    RequestCancelActivityTaskDecisionAttributesDict,
)
from .request_cancel_external_workflow_execution_decision_attributes import (
    RequestCancelExternalWorkflowExecutionDecisionAttributes,
    RequestCancelExternalWorkflowExecutionDecisionAttributesDict,
)
from .schedule_activity_task_decision_attributes import (
    ScheduleActivityTaskDecisionAttributes,
    ScheduleActivityTaskDecisionAttributesDict,
)
from .schedule_lambda_function_decision_attributes import (
    ScheduleLambdaFunctionDecisionAttributes,
    ScheduleLambdaFunctionDecisionAttributesDict,
)
from .signal_external_workflow_execution_decision_attributes import (
    SignalExternalWorkflowExecutionDecisionAttributes,
    SignalExternalWorkflowExecutionDecisionAttributesDict,
)
from .start_child_workflow_execution_decision_attributes import (
    StartChildWorkflowExecutionDecisionAttributes,
    StartChildWorkflowExecutionDecisionAttributesDict,
)
from .start_timer_decision_attributes import StartTimerDecisionAttributes, StartTimerDecisionAttributesDict


class Decision(SdkBaseModel):
    decision_type: DecisionTypeOrStr = Field(alias="decisionType")
    """Specifies the type of the decision."""

    schedule_activity_task_decision_attributes: Optional[ScheduleActivityTaskDecisionAttributes] = Field(
        default=UNSET, alias="scheduleActivityTaskDecisionAttributes"
    )
    request_cancel_activity_task_decision_attributes: Optional[RequestCancelActivityTaskDecisionAttributes] = Field(
        default=UNSET, alias="requestCancelActivityTaskDecisionAttributes"
    )
    complete_workflow_execution_decision_attributes: Optional[CompleteWorkflowExecutionDecisionAttributes] = Field(
        default=UNSET, alias="completeWorkflowExecutionDecisionAttributes"
    )
    fail_workflow_execution_decision_attributes: Optional[FailWorkflowExecutionDecisionAttributes] = Field(
        default=UNSET, alias="failWorkflowExecutionDecisionAttributes"
    )
    cancel_workflow_execution_decision_attributes: Optional[CancelWorkflowExecutionDecisionAttributes] = Field(
        default=UNSET, alias="cancelWorkflowExecutionDecisionAttributes"
    )
    continue_as_new_workflow_execution_decision_attributes: Optional[
        ContinueAsNewWorkflowExecutionDecisionAttributes
    ] = Field(default=UNSET, alias="continueAsNewWorkflowExecutionDecisionAttributes")
    record_marker_decision_attributes: Optional[RecordMarkerDecisionAttributes] = Field(
        default=UNSET, alias="recordMarkerDecisionAttributes"
    )
    start_timer_decision_attributes: Optional[StartTimerDecisionAttributes] = Field(
        default=UNSET, alias="startTimerDecisionAttributes"
    )
    cancel_timer_decision_attributes: Optional[CancelTimerDecisionAttributes] = Field(
        default=UNSET, alias="cancelTimerDecisionAttributes"
    )
    signal_external_workflow_execution_decision_attributes: Optional[
        SignalExternalWorkflowExecutionDecisionAttributes
    ] = Field(default=UNSET, alias="signalExternalWorkflowExecutionDecisionAttributes")
    request_cancel_external_workflow_execution_decision_attributes: Optional[
        RequestCancelExternalWorkflowExecutionDecisionAttributes
    ] = Field(default=UNSET, alias="requestCancelExternalWorkflowExecutionDecisionAttributes")
    start_child_workflow_execution_decision_attributes: Optional[StartChildWorkflowExecutionDecisionAttributes] = Field(
        default=UNSET, alias="startChildWorkflowExecutionDecisionAttributes"
    )
    schedule_lambda_function_decision_attributes: Optional[ScheduleLambdaFunctionDecisionAttributes] = Field(
        default=UNSET, alias="scheduleLambdaFunctionDecisionAttributes"
    )


class DecisionDict(TypedDict):
    decision_type: DecisionTypeOrStr
    schedule_activity_task_decision_attributes: NotRequired[ScheduleActivityTaskDecisionAttributesDict]
    request_cancel_activity_task_decision_attributes: NotRequired[RequestCancelActivityTaskDecisionAttributesDict]
    complete_workflow_execution_decision_attributes: NotRequired[CompleteWorkflowExecutionDecisionAttributesDict]
    fail_workflow_execution_decision_attributes: NotRequired[FailWorkflowExecutionDecisionAttributesDict]
    cancel_workflow_execution_decision_attributes: NotRequired[CancelWorkflowExecutionDecisionAttributesDict]
    continue_as_new_workflow_execution_decision_attributes: NotRequired[
        ContinueAsNewWorkflowExecutionDecisionAttributesDict
    ]
    record_marker_decision_attributes: NotRequired[RecordMarkerDecisionAttributesDict]
    start_timer_decision_attributes: NotRequired[StartTimerDecisionAttributesDict]
    cancel_timer_decision_attributes: NotRequired[CancelTimerDecisionAttributesDict]
    signal_external_workflow_execution_decision_attributes: NotRequired[
        SignalExternalWorkflowExecutionDecisionAttributesDict
    ]
    request_cancel_external_workflow_execution_decision_attributes: NotRequired[
        RequestCancelExternalWorkflowExecutionDecisionAttributesDict
    ]
    start_child_workflow_execution_decision_attributes: NotRequired[StartChildWorkflowExecutionDecisionAttributesDict]
    schedule_lambda_function_decision_attributes: NotRequired[ScheduleLambdaFunctionDecisionAttributesDict]
