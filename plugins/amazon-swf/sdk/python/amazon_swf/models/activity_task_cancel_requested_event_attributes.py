from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ActivityTaskCancelRequestedEventAttributes(SdkBaseModel):
    decision_task_completed_event_id: int = Field(alias="decisionTaskCompletedEventId")
    """The ID of the DecisionTaskCompleted event corresponding to the decision task that resulted in the
    RequestCancelActivityTask decision for this cancellation request. This information can be useful for diagnosing
    problems by tracing back the chain of events leading up to this event."""

    activity_id: str = Field(alias="activityId")
    """The unique ID of the task."""


class ActivityTaskCancelRequestedEventAttributesDict(TypedDict):
    decision_task_completed_event_id: int
    activity_id: str
