from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .workflow_execution import WorkflowExecution, WorkflowExecutionDict
from .workflow_type import WorkflowType, WorkflowTypeDict


class ChildWorkflowExecutionCompletedEventAttributes(SdkBaseModel):
    workflow_execution: WorkflowExecution = Field(alias="workflowExecution")
    workflow_type: WorkflowType = Field(alias="workflowType")
    result: Optional[str] = UNSET
    """The result of the child workflow execution."""

    initiated_event_id: int = Field(alias="initiatedEventId")
    """The ID of the StartChildWorkflowExecutionInitiated event corresponding to the StartChildWorkflowExecution
    Decision to start this child workflow execution. This information can be useful for diagnosing problems by tracing
    back the chain of events leading up to this event."""

    started_event_id: int = Field(alias="startedEventId")
    """The ID of the ChildWorkflowExecutionStarted event recorded when this child workflow execution was started. This
    information can be useful for diagnosing problems by tracing back the chain of events leading up to this event."""


class ChildWorkflowExecutionCompletedEventAttributesDict(TypedDict):
    workflow_execution: WorkflowExecutionDict
    workflow_type: WorkflowTypeDict
    result: NotRequired[str]
    initiated_event_id: int
    started_event_id: int
