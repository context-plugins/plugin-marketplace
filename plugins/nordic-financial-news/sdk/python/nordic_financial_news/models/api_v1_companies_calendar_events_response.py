from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .calendar_event_summary_nordic_financial_news_companies_api import (
    CalendarEventSummaryNordicFinancialNewsCompaniesApi,
    CalendarEventSummaryNordicFinancialNewsCompaniesApiDict,
)
from .pagination import Pagination, PaginationDict


class ApiV1CompaniesCalendarEventsResponse(SdkBaseModel):
    calendar_events: list[CalendarEventSummaryNordicFinancialNewsCompaniesApi]
    pagination: Pagination


class ApiV1CompaniesCalendarEventsResponseDict(TypedDict):
    calendar_events: list[CalendarEventSummaryNordicFinancialNewsCompaniesApiDict]
    pagination: PaginationDict
