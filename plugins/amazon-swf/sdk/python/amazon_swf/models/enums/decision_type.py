from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DecisionType(str, Enum):
    """Specifies the type of the decision."""

    SCHEDULE_ACTIVITY_TASK = "ScheduleActivityTask"
    REQUEST_CANCEL_ACTIVITY_TASK = "RequestCancelActivityTask"
    COMPLETE_WORKFLOW_EXECUTION = "CompleteWorkflowExecution"
    FAIL_WORKFLOW_EXECUTION = "FailWorkflowExecution"
    CANCEL_WORKFLOW_EXECUTION = "CancelWorkflowExecution"
    CONTINUE_AS_NEW_WORKFLOW_EXECUTION = "ContinueAsNewWorkflowExecution"
    RECORD_MARKER = "RecordMarker"
    START_TIMER = "StartTimer"
    CANCEL_TIMER = "CancelTimer"
    SIGNAL_EXTERNAL_WORKFLOW_EXECUTION = "SignalExternalWorkflowExecution"
    REQUEST_CANCEL_EXTERNAL_WORKFLOW_EXECUTION = "RequestCancelExternalWorkflowExecution"
    START_CHILD_WORKFLOW_EXECUTION = "StartChildWorkflowExecution"
    SCHEDULE_LAMBDA_FUNCTION = "ScheduleLambdaFunction"

    __str__ = str.__str__


DecisionTypeOrStr: TypeAlias = Annotated[DecisionType | str, open_enum_validator(DecisionType)]
