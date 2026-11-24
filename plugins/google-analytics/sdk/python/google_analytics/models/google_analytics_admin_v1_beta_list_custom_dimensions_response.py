from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_analytics_admin_v1_beta_custom_dimension import (
    GoogleAnalyticsAdminV1BetaCustomDimension,
    GoogleAnalyticsAdminV1BetaCustomDimensionDict,
)


class GoogleAnalyticsAdminV1BetaListCustomDimensionsResponse(SdkBaseModel):
    """Response message for ListCustomDimensions RPC."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A token, which can be sent as ``page_token`` to retrieve the next page. If this field is omitted, there are no
    subsequent pages."""

    custom_dimensions: Optional[list[GoogleAnalyticsAdminV1BetaCustomDimension]] = Field(
        default=UNSET, alias="customDimensions"
    )
    """List of CustomDimensions."""


class GoogleAnalyticsAdminV1BetaListCustomDimensionsResponseDict(TypedDict):
    next_page_token: NotRequired[str]
    custom_dimensions: NotRequired[list[GoogleAnalyticsAdminV1BetaCustomDimensionDict]]
