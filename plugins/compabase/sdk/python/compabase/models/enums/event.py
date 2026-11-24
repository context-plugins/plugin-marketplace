from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Event(str, Enum):
    """Event type (also sent in the ``X-Compabase-Event`` header)."""

    WATCHLIST_COMPANY_CHANGED = "watchlist.company_changed"
    WATCHLIST_BOARD_CHANGED = "watchlist.board_changed"
    WATCHLIST_OWNERSHIP_CHANGED = "watchlist.ownership_changed"
    WATCHLIST_STATUS_CHANGED = "watchlist.status_changed"
    WATCHLIST_COMPANY_REMOVED_FROM_REGISTRY = "watchlist.company_removed_from_registry"
    WATCHLIST_FINANCIALS_UPDATED = "watchlist.financials_updated"
    WATCHLIST_FILING_OVERDUE = "watchlist.filing_overdue"
    WATCHLIST_INSOLVENCY = "watchlist.insolvency"
    WATCHLIST_COURT_GAZETTE = "watchlist.court_gazette"
    WATCHLIST_SECURED_LIABILITIES = "watchlist.secured_liabilities"
    WATCHLIST_SANCTIONS = "watchlist.sanctions"
    WATCHLIST_PUBLIC_TENDERS = "watchlist.public_tenders"
    WATCHLIST_PUBLIC_AID = "watchlist.public_aid"
    WATCHLIST_LICENSES = "watchlist.licenses"
    WATCHLIST_NFZ = "watchlist.nfz"
    WATCHLIST_TRADEMARKS = "watchlist.trademarks"
    WATCHLIST_JOB_OFFERS = "watchlist.job_offers"
    WATCHLIST_CONTACT_CHANGED = "watchlist.contact_changed"
    WATCHLIST_COMPANY_NEWS = "watchlist.company_news"

    __str__ = str.__str__


EventOrStr: TypeAlias = Annotated[Event | str, open_enum_validator(Event)]
