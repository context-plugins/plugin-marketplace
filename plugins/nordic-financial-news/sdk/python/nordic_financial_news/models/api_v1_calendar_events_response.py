from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .calendar_event_summary import CalendarEventSummary, CalendarEventSummaryDict
from .pagination_nordic_financial_news_calendar_events_api import (
    PaginationNordicFinancialNewsCalendarEventsApi,
    PaginationNordicFinancialNewsCalendarEventsApiDict,
)


class ApiV1CalendarEventsResponse(SdkBaseModel):
    calendar_events: list[CalendarEventSummary]
    pagination: PaginationNordicFinancialNewsCalendarEventsApi
    plan_limited: Optional[bool] = UNSET
    """Present and ``true`` when your plan restricted the result to its upcoming-events window, so the result may be
    incomplete. Filters narrow within that window rather than searching the full calendar, so on a limited plan an
    issuer filter often returns an empty list. Absent when your plan applies no restriction."""


class ApiV1CalendarEventsResponseDict(TypedDict):
    calendar_events: list[CalendarEventSummaryDict]
    pagination: PaginationNordicFinancialNewsCalendarEventsApiDict
    plan_limited: NotRequired[bool]
