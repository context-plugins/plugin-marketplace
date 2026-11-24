from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .workflow_execution import WorkflowExecution, WorkflowExecutionDict


class ExternalWorkflowExecutionCancelRequestedEventAttributes(SdkBaseModel):
    workflow_execution: WorkflowExecution = Field(alias="workflowExecution")
    initiated_event_id: int = Field(alias="initiatedEventId")
    """The ID of the RequestCancelExternalWorkflowExecutionInitiated event corresponding to the
    RequestCancelExternalWorkflowExecution decision to cancel this external workflow execution. This information can be
    useful for diagnosing problems by tracing back the chain of events leading up to this event."""


class ExternalWorkflowExecutionCancelRequestedEventAttributesDict(TypedDict):
    workflow_execution: WorkflowExecutionDict
    initiated_event_id: int
