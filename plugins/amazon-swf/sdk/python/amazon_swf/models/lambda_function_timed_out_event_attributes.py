from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.timeout_type2 import TimeoutType2OrStr


class LambdaFunctionTimedOutEventAttributes(SdkBaseModel):
    scheduled_event_id: int = Field(alias="scheduledEventId")
    """The ID of the LambdaFunctionScheduled event that was recorded when this activity task was scheduled. To help
    diagnose issues, use this information to trace back the chain of events leading up to this event."""

    started_event_id: int = Field(alias="startedEventId")
    """The ID of the ActivityTaskStarted event that was recorded when this activity task started. To help diagnose
    issues, use this information to trace back the chain of events leading up to this event."""

    timeout_type: Optional[TimeoutType2OrStr] = Field(default=UNSET, alias="timeoutType")
    """The type of the timeout that caused this event."""


class LambdaFunctionTimedOutEventAttributesDict(TypedDict):
    scheduled_event_id: int
    started_event_id: int
    timeout_type: NotRequired[TimeoutType2OrStr]
