from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RequestCancelExternalWorkflowExecutionInitiatedEventAttributes(SdkBaseModel):
    workflow_id: str = Field(alias="workflowId")
    """The workflowId of the external workflow execution to be canceled."""

    run_id: Optional[str] = Field(default=UNSET, alias="runId")
    """The runId of the external workflow execution to be canceled."""

    decision_task_completed_event_id: int = Field(alias="decisionTaskCompletedEventId")
    """The ID of the DecisionTaskCompleted event corresponding to the decision task that resulted in the
    RequestCancelExternalWorkflowExecution decision for this cancellation request. This information can be useful for
    diagnosing problems by tracing back the chain of events leading up to this event."""

    control: Optional[str] = UNSET
    """Data attached to the event that can be used by the decider in subsequent workflow tasks."""


class RequestCancelExternalWorkflowExecutionInitiatedEventAttributesDict(TypedDict):
    workflow_id: str
    run_id: NotRequired[str]
    decision_task_completed_event_id: int
    control: NotRequired[str]
