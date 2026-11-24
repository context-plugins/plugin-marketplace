from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .workflow_execution import WorkflowExecution, WorkflowExecutionDict
from .workflow_type import WorkflowType, WorkflowTypeDict


class ChildWorkflowExecutionTimedOutEventAttributes(SdkBaseModel):
    workflow_execution: WorkflowExecution = Field(alias="workflowExecution")
    workflow_type: WorkflowType = Field(alias="workflowType")
    timeout_type: Literal["START_TO_CLOSE"] = Field(default="START_TO_CLOSE", alias="timeoutType")
    """The type of the timeout that caused the child workflow execution to time out."""

    initiated_event_id: int = Field(alias="initiatedEventId")
    """The ID of the StartChildWorkflowExecutionInitiated event corresponding to the StartChildWorkflowExecution
    Decision to start this child workflow execution. This information can be useful for diagnosing problems by tracing
    back the chain of events leading up to this event."""

    started_event_id: int = Field(alias="startedEventId")
    """The ID of the ChildWorkflowExecutionStarted event recorded when this child workflow execution was started. This
    information can be useful for diagnosing problems by tracing back the chain of events leading up to this event."""


class ChildWorkflowExecutionTimedOutEventAttributesDict(TypedDict):
    workflow_execution: WorkflowExecutionDict
    workflow_type: WorkflowTypeDict
    timeout_type: Literal["START_TO_CLOSE"]
    initiated_event_id: int
    started_event_id: int
