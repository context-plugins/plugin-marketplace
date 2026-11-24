from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.timeout_type import TimeoutTypeOrStr


class ActivityTaskTimedOutEventAttributes(SdkBaseModel):
    timeout_type: TimeoutTypeOrStr = Field(alias="timeoutType")
    """The type of the timeout that caused this event."""

    scheduled_event_id: int = Field(alias="scheduledEventId")
    """The ID of the ActivityTaskScheduled event that was recorded when this activity task was scheduled. This
    information can be useful for diagnosing problems by tracing back the chain of events leading up to this event."""

    started_event_id: int = Field(alias="startedEventId")
    """The ID of the ActivityTaskStarted event recorded when this activity task was started. This information can be
    useful for diagnosing problems by tracing back the chain of events leading up to this event."""

    details: Optional[str] = UNSET
    """Contains the content of the details parameter for the last call made by the activity to
    RecordActivityTaskHeartbeat."""


class ActivityTaskTimedOutEventAttributesDict(TypedDict):
    timeout_type: TimeoutTypeOrStr
    scheduled_event_id: int
    started_event_id: int
    details: NotRequired[str]
