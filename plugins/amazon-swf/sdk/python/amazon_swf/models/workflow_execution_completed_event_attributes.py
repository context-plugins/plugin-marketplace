from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class WorkflowExecutionCompletedEventAttributes(SdkBaseModel):
    result: Optional[str] = UNSET
    """The result produced by the workflow execution upon successful completion."""

    decision_task_completed_event_id: int = Field(alias="decisionTaskCompletedEventId")
    """The ID of the DecisionTaskCompleted event corresponding to the decision task that resulted in the
    CompleteWorkflowExecution decision to complete this execution. This information can be useful for diagnosing
    problems by tracing back the chain of events leading up to this event."""


class WorkflowExecutionCompletedEventAttributesDict(TypedDict):
    result: NotRequired[str]
    decision_task_completed_event_id: int
