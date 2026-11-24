from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class WorkflowExecutionFailedEventAttributes(SdkBaseModel):
    reason: Optional[str] = UNSET
    """The descriptive reason provided for the failure."""

    details: Optional[str] = UNSET
    """The details of the failure."""

    decision_task_completed_event_id: int = Field(alias="decisionTaskCompletedEventId")
    """The ID of the DecisionTaskCompleted event corresponding to the decision task that resulted in the
    FailWorkflowExecution decision to fail this execution. This information can be useful for diagnosing problems by
    tracing back the chain of events leading up to this event."""


class WorkflowExecutionFailedEventAttributesDict(TypedDict):
    reason: NotRequired[str]
    details: NotRequired[str]
    decision_task_completed_event_id: int
