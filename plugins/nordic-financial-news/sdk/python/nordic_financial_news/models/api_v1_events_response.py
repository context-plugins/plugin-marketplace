from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .event_summary import EventSummary, EventSummaryDict
from .pagination_nordic_financial_news_calendar_events_api import (
    PaginationNordicFinancialNewsCalendarEventsApi,
    PaginationNordicFinancialNewsCalendarEventsApiDict,
)


class ApiV1EventsResponse(SdkBaseModel):
    events: list[EventSummary]
    pagination: PaginationNordicFinancialNewsCalendarEventsApi
    plan_limited: Optional[bool] = UNSET
    """Present and ``true`` when your plan capped the result to its top-N most recent events. Absent when your plan
    applies no cap. With ``mode=semantic``, present and ``true`` when your plan's source or age restrictions are in
    force instead."""

    truncated: Optional[bool] = UNSET
    """Only with ``mode=semantic``. Present and ``true`` when the article-match horizon was exhausted, so further
    matching events exist that this response cannot reach."""


class ApiV1EventsResponseDict(TypedDict):
    events: list[EventSummaryDict]
    pagination: PaginationNordicFinancialNewsCalendarEventsApiDict
    plan_limited: NotRequired[bool]
    truncated: NotRequired[bool]
