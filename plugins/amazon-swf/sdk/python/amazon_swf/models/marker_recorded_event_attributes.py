from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MarkerRecordedEventAttributes(SdkBaseModel):
    marker_name: str = Field(alias="markerName")
    """The name of the marker."""

    details: Optional[str] = UNSET
    """The details of the marker."""

    decision_task_completed_event_id: int = Field(alias="decisionTaskCompletedEventId")
    """The ID of the DecisionTaskCompleted event corresponding to the decision task that resulted in the RecordMarker
    decision that requested this marker. This information can be useful for diagnosing problems by tracing back the
    chain of events leading up to this event."""


class MarkerRecordedEventAttributesDict(TypedDict):
    marker_name: str
    details: NotRequired[str]
    decision_task_completed_event_id: int
