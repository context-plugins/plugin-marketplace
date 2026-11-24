from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .company_nordic_financial_news_calendar_events_api import (
    CompanyNordicFinancialNewsCalendarEventsApi,
    CompanyNordicFinancialNewsCalendarEventsApiDict,
)
from .dividend import Dividend, DividendDict
from .enums.date_precision import DatePrecisionOrStr
from .enums.event_type import EventTypeOrStr
from .enums.status import StatusOrStr
from .source_nordic_financial_news_calendar_events_api import (
    SourceNordicFinancialNewsCalendarEventsApi,
    SourceNordicFinancialNewsCalendarEventsApiDict,
)


class CalendarEventSummary(SdkBaseModel):
    id: str
    """Unique calendar event identifier"""

    title: str
    """Event title as reported by the issuer or exchange"""

    description: OptionalNullable[str] = UNSET
    """Optional long-form description"""

    event_type: EventTypeOrStr
    """The kind of calendar event"""

    status: StatusOrStr
    """Event lifecycle status. ``scheduled`` is upcoming; ``published`` means the event has occurred (events flip ~2
    days after their date); ``cancelled`` means the issuer withdrew it. List endpoints return ``scheduled`` +
    ``published`` and exclude ``cancelled`` by default. Pass the ``status`` query parameter to filter (e.g.
    ``status=cancelled``)."""

    date_precision: Optional[DatePrecisionOrStr] = UNSET
    """Granularity of ``scheduled_at``. ``exact`` = timestamp known; ``day`` = date only; ``month`` = only the month is
    known. Consumers that need a date should still use ``scheduled_at`` (set to a representative point inside the
    window)."""

    fiscal_period: OptionalNullable[str] = UNSET
    """Fiscal period slug (required for report-type events, e.g. ``q3_2026``, ``fy_2025``). For a split fiscal year the
    year is the one in which the fiscal year ends (2025/26 → ``fy_2026``)."""

    scheduled_at: RFC3339DateTime
    """Scheduled date/time in UTC (ISO 8601). For the local calendar date use ``local_time`` instead: a day-precision
    event is stored at local midnight, so its UTC instant falls on the previous day for ahead-of-UTC (Nordic) zones."""

    timezone: Optional[str] = UNSET
    """The issuer's IANA timezone, used to interpret ``scheduled_at``. Resolved from the source article, falling back to
    the company's country zone."""

    local_time: Optional[RFC3339DateTime] = UNSET
    """``scheduled_at`` rendered in the issuer's ``timezone`` (ISO 8601 with offset). Use this for the correct local
    date/time. Its date is right even for day-precision events."""

    scheduled_at_changed_at: OptionalNullable[RFC3339DateTime] = UNSET
    """When ``scheduled_at`` last changed. Useful for change-feed consumers tracking date moves."""

    source_article_id: OptionalNullable[str] = UNSET
    """ID of the article the event was extracted from. ``null`` when the article is not retrievable (not live, or
    removed), or when the event was first found on a company website. If a company website later supplied the date, this
    still names the original article, and ``source`` names the website. Best-effort: on the free plan it may reference
    an article your plan can't fetch (premium source or outside the age window)."""

    source: OptionalNullable[SourceNordicFinancialNewsCalendarEventsApi] = UNSET
    """Who published the current date. ``article`` is a news article or company announcement. ``company_website`` is the
    issuer's own investor relations calendar. ``null`` when our editors set the date."""

    company_id: str
    """ID of the company this event relates to"""

    company: OptionalNullable[CompanyNordicFinancialNewsCalendarEventsApi] = UNSET
    """The issuer this event belongs to, inlined so a calendar can be rendered without a lookup per row. ``id`` is the
    same value as ``company_id``. ``null`` only when the issuer is not published by this API."""

    country: OptionalNullable[str] = UNSET
    """Country ISO 3166-1 alpha-2 code"""

    dividend: OptionalNullable[Dividend] = UNSET
    """Dividend lifecycle dates. ``null`` for non-dividend events. ``scheduled_at`` follows the priority ex-date >
    record-date > payment-date, whichever is explicitly stated."""

    updated_at: Optional[RFC3339DateTime] = UNSET
    """When the event was last updated (ISO 8601). Use with ``updated_after`` for polling"""


class CalendarEventSummaryDict(TypedDict):
    id: str
    title: str
    description: NotRequired[str | None]
    event_type: EventTypeOrStr
    status: StatusOrStr
    date_precision: NotRequired[DatePrecisionOrStr]
    fiscal_period: NotRequired[str | None]
    scheduled_at: RFC3339DateTime
    timezone: NotRequired[str]
    local_time: NotRequired[RFC3339DateTime]
    scheduled_at_changed_at: NotRequired[RFC3339DateTime | None]
    source_article_id: NotRequired[str | None]
    source: NotRequired[SourceNordicFinancialNewsCalendarEventsApiDict | None]
    company_id: str
    company: NotRequired[CompanyNordicFinancialNewsCalendarEventsApiDict | None]
    country: NotRequired[str | None]
    dividend: NotRequired[DividendDict | None]
    updated_at: NotRequired[RFC3339DateTime]
