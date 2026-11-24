from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.category_nordic_financial_news_event_types_api import CategoryNordicFinancialNewsEventTypesApiOrStr


class EventTypeSummary(SdkBaseModel):
    id: str
    """Unique event type identifier"""

    slug: str
    """Event type slug: the value for the ``event_type`` filter on ``GET /api/v1/events`` only. ``GET
    /api/v1/calendar_events`` takes a different, underscored vocabulary enumerated on that endpoint; these slugs are not
    accepted there, and a few spellings overlap while denoting different things."""

    label: str
    """Event type display label"""

    category: CategoryNordicFinancialNewsEventTypesApiOrStr
    """The broader category this type belongs to"""

    summary: str | None
    """One-line description of what this type covers"""


class EventTypeSummaryDict(TypedDict):
    id: str
    slug: str
    label: str
    category: CategoryNordicFinancialNewsEventTypesApiOrStr
    summary: str | None
