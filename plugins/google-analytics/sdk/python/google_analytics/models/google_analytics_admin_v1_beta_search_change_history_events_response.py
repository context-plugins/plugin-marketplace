from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_analytics_admin_v1_beta_change_history_event import (
    GoogleAnalyticsAdminV1BetaChangeHistoryEvent,
    GoogleAnalyticsAdminV1BetaChangeHistoryEventDict,
)


class GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsResponse(SdkBaseModel):
    """Response message for SearchAccounts RPC."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A token, which can be sent as ``page_token`` to retrieve the next page. If this field is omitted, there are no
    subsequent pages."""

    change_history_events: Optional[list[GoogleAnalyticsAdminV1BetaChangeHistoryEvent]] = Field(
        default=UNSET, alias="changeHistoryEvents"
    )
    """Results that were accessible to the caller."""


class GoogleAnalyticsAdminV1BetaSearchChangeHistoryEventsResponseDict(TypedDict):
    next_page_token: NotRequired[str]
    change_history_events: NotRequired[list[GoogleAnalyticsAdminV1BetaChangeHistoryEventDict]]
