from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ActivityTaskFailedEventAttributes(SdkBaseModel):
    reason: Optional[str] = UNSET
    """The reason provided for the failure."""

    details: Optional[str] = UNSET
    """The details of the failure."""

    scheduled_event_id: int = Field(alias="scheduledEventId")
    """The ID of the ActivityTaskScheduled event that was recorded when this activity task was scheduled. This
    information can be useful for diagnosing problems by tracing back the chain of events leading up to this event."""

    started_event_id: int = Field(alias="startedEventId")
    """The ID of the ActivityTaskStarted event recorded when this activity task was started. This information can be
    useful for diagnosing problems by tracing back the chain of events leading up to this event."""


class ActivityTaskFailedEventAttributesDict(TypedDict):
    reason: NotRequired[str]
    details: NotRequired[str]
    scheduled_event_id: int
    started_event_id: int
