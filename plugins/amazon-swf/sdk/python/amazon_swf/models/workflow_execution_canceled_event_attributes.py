from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class WorkflowExecutionCanceledEventAttributes(SdkBaseModel):
    details: Optional[str] = UNSET
    """The details of the cancellation."""

    decision_task_completed_event_id: int = Field(alias="decisionTaskCompletedEventId")
    """The ID of the DecisionTaskCompleted event corresponding to the decision task that resulted in the
    CancelWorkflowExecution decision for this cancellation request. This information can be useful for diagnosing
    problems by tracing back the chain of events leading up to this event."""


class WorkflowExecutionCanceledEventAttributesDict(TypedDict):
    details: NotRequired[str]
    decision_task_completed_event_id: int
