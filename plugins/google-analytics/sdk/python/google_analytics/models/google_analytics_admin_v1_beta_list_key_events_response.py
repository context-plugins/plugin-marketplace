from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_analytics_admin_v1_beta_key_event import (
    GoogleAnalyticsAdminV1BetaKeyEvent,
    GoogleAnalyticsAdminV1BetaKeyEventDict,
)


class GoogleAnalyticsAdminV1BetaListKeyEventsResponse(SdkBaseModel):
    """Response message for ListKeyEvents RPC."""

    key_events: Optional[list[GoogleAnalyticsAdminV1BetaKeyEvent]] = Field(default=UNSET, alias="keyEvents")
    """The requested Key Events"""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A token, which can be sent as ``page_token`` to retrieve the next page. If this field is omitted, there are no
    subsequent pages."""


class GoogleAnalyticsAdminV1BetaListKeyEventsResponseDict(TypedDict):
    key_events: NotRequired[list[GoogleAnalyticsAdminV1BetaKeyEventDict]]
    next_page_token: NotRequired[str]
