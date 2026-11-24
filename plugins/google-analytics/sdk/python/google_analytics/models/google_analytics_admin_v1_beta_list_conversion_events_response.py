from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_analytics_admin_v1_beta_conversion_event import (
    GoogleAnalyticsAdminV1BetaConversionEvent,
    GoogleAnalyticsAdminV1BetaConversionEventDict,
)


class GoogleAnalyticsAdminV1BetaListConversionEventsResponse(SdkBaseModel):
    """Response message for ListConversionEvents RPC."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A token, which can be sent as ``page_token`` to retrieve the next page. If this field is omitted, there are no
    subsequent pages."""

    conversion_events: Optional[list[GoogleAnalyticsAdminV1BetaConversionEvent]] = Field(
        default=UNSET, alias="conversionEvents"
    )
    """The requested conversion events"""


class GoogleAnalyticsAdminV1BetaListConversionEventsResponseDict(TypedDict):
    next_page_token: NotRequired[str]
    conversion_events: NotRequired[list[GoogleAnalyticsAdminV1BetaConversionEventDict]]
