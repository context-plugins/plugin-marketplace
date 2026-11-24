from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_analytics_admin_v1_beta_google_ads_link import (
    GoogleAnalyticsAdminV1BetaGoogleAdsLink,
    GoogleAnalyticsAdminV1BetaGoogleAdsLinkDict,
)


class GoogleAnalyticsAdminV1BetaListGoogleAdsLinksResponse(SdkBaseModel):
    """Response message for ListGoogleAdsLinks RPC."""

    google_ads_links: Optional[list[GoogleAnalyticsAdminV1BetaGoogleAdsLink]] = Field(
        default=UNSET, alias="googleAdsLinks"
    )
    """List of GoogleAdsLinks."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A token, which can be sent as ``page_token`` to retrieve the next page. If this field is omitted, there are no
    subsequent pages."""


class GoogleAnalyticsAdminV1BetaListGoogleAdsLinksResponseDict(TypedDict):
    google_ads_links: NotRequired[list[GoogleAnalyticsAdminV1BetaGoogleAdsLinkDict]]
    next_page_token: NotRequired[str]
