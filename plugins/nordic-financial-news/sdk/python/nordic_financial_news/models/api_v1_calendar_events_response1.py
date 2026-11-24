from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .calendar_event_summary import CalendarEventSummary, CalendarEventSummaryDict


class ApiV1CalendarEventsResponse1(SdkBaseModel):
    calendar_event: CalendarEventSummary


class ApiV1CalendarEventsResponse1Dict(TypedDict):
    calendar_event: CalendarEventSummaryDict
