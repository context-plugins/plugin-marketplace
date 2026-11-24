from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.score_band1 import ScoreBand1OrStr
from .visitor_countries import VisitorCountries, VisitorCountriesDict
from .website_visits_float_range import WebsiteVisitsFloatRange, WebsiteVisitsFloatRangeDict
from .website_visits_int_range import WebsiteVisitsIntRange, WebsiteVisitsIntRangeDict


class WebsiteVisitsFilters(SdkBaseModel):
    score_bands: Optional[list[ScoreBand1OrStr]] = Field(default=UNSET, alias="scoreBands")
    """Restrict to specific score bands."""

    visitor_countries: Optional[VisitorCountries] = Field(default=UNSET, alias="visitorCountries")
    """ISO 3166-1 alpha-2 country code filters."""

    score: Optional[WebsiteVisitsIntRange] = UNSET
    """Score range (1–100)."""

    total_sessions: Optional[WebsiteVisitsIntRange] = Field(default=UNSET, alias="totalSessions")
    """Integer range filter (non-negative)"""

    avg_session_minutes: Optional[WebsiteVisitsFloatRange] = Field(default=UNSET, alias="avgSessionMinutes")
    """Float range filter (non-negative)"""

    unique_visitors: Optional[WebsiteVisitsIntRange] = Field(default=UNSET, alias="uniqueVisitors")
    """Integer range filter (non-negative)"""

    days_visited: Optional[WebsiteVisitsIntRange] = Field(default=UNSET, alias="daysVisited")
    """Integer range filter (non-negative)"""

    high_intent_pageviews: Optional[WebsiteVisitsIntRange] = Field(default=UNSET, alias="highIntentPageviews")
    """Integer range filter (non-negative)"""

    days_since_last_visit: Optional[WebsiteVisitsIntRange] = Field(default=UNSET, alias="daysSinceLastVisit")
    """Integer range filter (non-negative)"""


class WebsiteVisitsFiltersDict(TypedDict):
    score_bands: NotRequired[list[ScoreBand1OrStr]]
    visitor_countries: NotRequired[VisitorCountriesDict]
    score: NotRequired[WebsiteVisitsIntRangeDict]
    total_sessions: NotRequired[WebsiteVisitsIntRangeDict]
    avg_session_minutes: NotRequired[WebsiteVisitsFloatRangeDict]
    unique_visitors: NotRequired[WebsiteVisitsIntRangeDict]
    days_visited: NotRequired[WebsiteVisitsIntRangeDict]
    high_intent_pageviews: NotRequired[WebsiteVisitsIntRangeDict]
    days_since_last_visit: NotRequired[WebsiteVisitsIntRangeDict]
