from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .company_nordic_financial_news_events_api import (
    CompanyNordicFinancialNewsEventsApi,
    CompanyNordicFinancialNewsEventsApiDict,
)
from .enums.significance import SignificanceOrStr
from .enums.status_nordic_financial_news_companies_api import StatusNordicFinancialNewsCompaniesApiOrStr
from .event_type_nordic_financial_news_companies_api import (
    EventTypeNordicFinancialNewsCompaniesApi,
    EventTypeNordicFinancialNewsCompaniesApiDict,
)
from .figure_divergence import FigureDivergence, FigureDivergenceDict


class EventDetail(SdkBaseModel):
    id: str
    """Unique event identifier"""

    title: Optional[str] = UNSET
    """Event title (omitted on a tombstone)"""

    status: StatusNordicFinancialNewsCompaniesApiOrStr
    """Lifecycle status. ``active``/``closed`` are live (closed = coverage window lapsed but the event stays visible and
    can reopen). ``merged`` = absorbed into another event (see ``merged_into``); ``removed`` = withdrawn from the feed
    (no live articles remain, or it was found to be incorrect). ``merged``/``removed`` never appear in the default list
    and carry only the tombstone fields."""

    significance: Optional[SignificanceOrStr] = UNSET
    """Editorial importance (omitted on a tombstone). ``notable`` = front-page-worthy; ``routine`` = factual ledger
    record; ``commentary`` = single-article opinion/analysis."""

    event_type: OptionalNullable[EventTypeNordicFinancialNewsCompaniesApi] = UNSET
    """The kind of event (omitted on a tombstone)"""

    article_count: Optional[int] = UNSET
    """Number of live articles reporting this event (omitted on a tombstone). This is the total count. Your plan's age
    and source restrictions do not reduce it; use GET on the event to see which of them your plan can fetch."""

    first_reported_at: OptionalNullable[RFC3339DateTime] = UNSET
    """When this event was first reported (ISO 8601, omitted on a tombstone): the earliest known publication time among
    this event's member articles. Falls back to ``last_article_at`` for ordering when null. This is editorial time, not
    the time the record reached this API."""

    last_article_at: OptionalNullable[RFC3339DateTime] = UNSET
    """Publication time of the newest article reporting this event (ISO 8601, omitted on a tombstone)."""

    updated_at: RFC3339DateTime
    """When this record last changed (ISO 8601). This is the clock incremental sync runs on. Pass your last completed
    sync time as ``updated_after``, drain every page via ``pagination.next_cursor``, and only then advance your stored
    timestamp."""

    company_ids: Optional[list[str]] = UNSET
    """IDs of companies associated with this event, verified and visible only (omitted on a tombstone). Restricted to
    companies with an active-involvement role (subject, acquirer, target, investor, issuer, partner) unless
    ``include_peripheral=true``."""

    story_ids: Optional[list[str]] = UNSET
    """IDs of published stories generated from this event, if any (omitted on a tombstone)"""

    merged_into: OptionalNullable[str] = UNSET
    """ID of the surviving event this one was merged into. Present only when ``status`` is ``merged``; null for every
    other status, including ``removed`` and on some older merged events."""

    related_to: OptionalNullable[str] = UNSET
    """Commentary-only metadata: the ``id`` of the factual event this commentary event comments on or reacts to, when
    the piece is about a specific factual event. Always null for non-commentary events, and often null for commentary
    events too (the piece may not be about a specific event). Filter with ``related_to=<id>`` to find commentary
    reacting to a given event."""

    summary: OptionalNullable[str] = UNSET
    """Event summary (omitted on a tombstone). Null when no summary has been generated for the event yet."""

    article_ids: Optional[list[str]] = UNSET
    """IDs of this event's live articles that your plan can fetch, oldest first by publication time (omitted on a
    tombstone). May be shorter than ``article_count`` on a plan with age or source restrictions. That gap is not an
    error."""

    primary_disclosure_article_id: OptionalNullable[str] = UNSET
    """The primary disclosure among this event's live articles your plan can fetch: the earliest one from a
    primary-disclosure source (wire service, stock exchange feed, PR platform, or government body). Null when the event
    has none. Always an element of ``article_ids``, or null; omitted on a tombstone. A plan with age or source
    restrictions may see a later official copy of the same disclosure, or null, instead of the true earliest one."""

    member_figures_disagree: Optional[bool] = UNSET
    """True when this event's own member articles report divergent values for the same headline figure (e.g. one source
    reports operating profit as −2.2m, another as −2.4m). A signal that the single consolidated summary hides a
    source-level disagreement. Omitted on a tombstone."""

    figure_divergence: OptionalNullable[FigureDivergence] = UNSET
    """Detail behind ``member_figures_disagree``: the specific metrics whose values disagree across member articles,
    with the per-source figures and range. Null when there is no disagreement; omitted on a tombstone."""

    companies: Optional[list[CompanyNordicFinancialNewsEventsApi]] = UNSET
    """The same companies as ``company_ids``, with detail per company: name, ticker, primary flag, association tier.
    Primary company first; omitted on a tombstone."""


class EventDetailDict(TypedDict):
    id: str
    title: NotRequired[str]
    status: StatusNordicFinancialNewsCompaniesApiOrStr
    significance: NotRequired[SignificanceOrStr]
    event_type: NotRequired[EventTypeNordicFinancialNewsCompaniesApiDict | None]
    article_count: NotRequired[int]
    first_reported_at: NotRequired[RFC3339DateTime | None]
    last_article_at: NotRequired[RFC3339DateTime | None]
    updated_at: RFC3339DateTime
    company_ids: NotRequired[list[str]]
    story_ids: NotRequired[list[str]]
    merged_into: NotRequired[str | None]
    related_to: NotRequired[str | None]
    summary: NotRequired[str | None]
    article_ids: NotRequired[list[str]]
    primary_disclosure_article_id: NotRequired[str | None]
    member_figures_disagree: NotRequired[bool]
    figure_divergence: NotRequired[FigureDivergenceDict | None]
    companies: NotRequired[list[CompanyNordicFinancialNewsEventsApiDict]]
