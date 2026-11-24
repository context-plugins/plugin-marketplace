from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class TimerFiredEventAttributes(SdkBaseModel):
    timer_id: str = Field(alias="timerId")
    """The unique ID of the timer that fired."""

    started_event_id: int = Field(alias="startedEventId")
    """The ID of the TimerStarted event that was recorded when this timer was started. This information can be useful
    for diagnosing problems by tracing back the chain of events leading up to this event."""


class TimerFiredEventAttributesDict(TypedDict):
    timer_id: str
    started_event_id: int
