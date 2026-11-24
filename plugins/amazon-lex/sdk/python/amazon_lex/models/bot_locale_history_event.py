from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class BotLocaleHistoryEvent(SdkBaseModel):
    event: str
    """A description of the event that occurred."""

    event_date: RFC3339DateTime = Field(alias="eventDate")
    """A timestamp of the date and time that the event occurred."""


class BotLocaleHistoryEventDict(TypedDict):
    event: str
    event_date: RFC3339DateTime
