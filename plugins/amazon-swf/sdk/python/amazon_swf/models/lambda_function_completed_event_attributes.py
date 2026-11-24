from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class LambdaFunctionCompletedEventAttributes(SdkBaseModel):
    scheduled_event_id: int = Field(alias="scheduledEventId")
    """The ID of the LambdaFunctionScheduled event that was recorded when this Lambda task was scheduled. To help
    diagnose issues, use this information to trace back the chain of events leading up to this event."""

    started_event_id: int = Field(alias="startedEventId")
    """The ID of the LambdaFunctionStarted event recorded when this activity task started. To help diagnose issues, use
    this information to trace back the chain of events leading up to this event."""

    result: Optional[str] = UNSET
    """The results of the Lambda task."""


class LambdaFunctionCompletedEventAttributesDict(TypedDict):
    scheduled_event_id: int
    started_event_id: int
    result: NotRequired[str]
