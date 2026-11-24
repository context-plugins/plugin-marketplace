from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class LambdaFunctionStartedEventAttributes(SdkBaseModel):
    scheduled_event_id: int = Field(alias="scheduledEventId")
    """The ID of the LambdaFunctionScheduled event that was recorded when this activity task was scheduled. To help
    diagnose issues, use this information to trace back the chain of events leading up to this event."""


class LambdaFunctionStartedEventAttributesDict(TypedDict):
    scheduled_event_id: int
