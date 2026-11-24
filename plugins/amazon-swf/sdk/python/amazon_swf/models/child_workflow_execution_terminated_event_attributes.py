from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .workflow_execution import WorkflowExecution, WorkflowExecutionDict
from .workflow_type import WorkflowType, WorkflowTypeDict


class ChildWorkflowExecutionTerminatedEventAttributes(SdkBaseModel):
    workflow_execution: WorkflowExecution = Field(alias="workflowExecution")
    workflow_type: WorkflowType = Field(alias="workflowType")
    initiated_event_id: int = Field(alias="initiatedEventId")
    """The ID of the StartChildWorkflowExecutionInitiated event corresponding to the StartChildWorkflowExecution
    Decision to start this child workflow execution. This information can be useful for diagnosing problems by tracing
    back the chain of events leading up to this event."""

    started_event_id: int = Field(alias="startedEventId")
    """The ID of the ChildWorkflowExecutionStarted event recorded when this child workflow execution was started. This
    information can be useful for diagnosing problems by tracing back the chain of events leading up to this event."""


class ChildWorkflowExecutionTerminatedEventAttributesDict(TypedDict):
    workflow_execution: WorkflowExecutionDict
    workflow_type: WorkflowTypeDict
    initiated_event_id: int
    started_event_id: int
