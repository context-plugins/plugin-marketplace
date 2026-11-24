from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .calendar_event import CalendarEvent, CalendarEventDict


class CalendarEvents(SdkBaseModel):
    events: Optional[list[CalendarEvent]] = UNSET


class CalendarEventsDict(TypedDict):
    events: NotRequired[list[CalendarEventDict]]
