from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ActivityTaskStartedEventAttributes(SdkBaseModel):
    identity: Optional[str] = UNSET
    """Identity of the worker that was assigned this task. This aids diagnostics when problems arise. The form of this
    identity is user defined."""

    scheduled_event_id: int = Field(alias="scheduledEventId")
    """The ID of the ActivityTaskScheduled event that was recorded when this activity task was scheduled. This
    information can be useful for diagnosing problems by tracing back the chain of events leading up to this event."""


class ActivityTaskStartedEventAttributesDict(TypedDict):
    identity: NotRequired[str]
    scheduled_event_id: int
