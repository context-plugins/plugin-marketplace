from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .workflow_execution import WorkflowExecution, WorkflowExecutionDict


class ExternalWorkflowExecutionSignaledEventAttributes(SdkBaseModel):
    workflow_execution: WorkflowExecution = Field(alias="workflowExecution")
    initiated_event_id: int = Field(alias="initiatedEventId")
    """The ID of the SignalExternalWorkflowExecutionInitiated event corresponding to the SignalExternalWorkflowExecution
    decision to request this signal. This information can be useful for diagnosing problems by tracing back the chain of
    events leading up to this event."""


class ExternalWorkflowExecutionSignaledEventAttributesDict(TypedDict):
    workflow_execution: WorkflowExecutionDict
    initiated_event_id: int
