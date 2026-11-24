from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ActivityTaskCanceledEventAttributes(SdkBaseModel):
    details: Optional[str] = UNSET
    """Details of the cancellation."""

    scheduled_event_id: int = Field(alias="scheduledEventId")
    """The ID of the ActivityTaskScheduled event that was recorded when this activity task was scheduled. This
    information can be useful for diagnosing problems by tracing back the chain of events leading up to this event."""

    started_event_id: int = Field(alias="startedEventId")
    """The ID of the ActivityTaskStarted event recorded when this activity task was started. This information can be
    useful for diagnosing problems by tracing back the chain of events leading up to this event."""

    latest_cancel_requested_event_id: Optional[int] = Field(default=UNSET, alias="latestCancelRequestedEventId")
    """If set, contains the ID of the last ActivityTaskCancelRequested event recorded for this activity task. This
    information can be useful for diagnosing problems by tracing back the chain of events leading up to this event."""


class ActivityTaskCanceledEventAttributesDict(TypedDict):
    details: NotRequired[str]
    scheduled_event_id: int
    started_event_id: int
    latest_cancel_requested_event_id: NotRequired[int]
