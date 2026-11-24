from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_analytics_admin_v1_beta_property import (
    GoogleAnalyticsAdminV1BetaProperty,
    GoogleAnalyticsAdminV1BetaPropertyDict,
)


class GoogleAnalyticsAdminV1BetaListPropertiesResponse(SdkBaseModel):
    """Response message for ListProperties RPC."""

    properties: Optional[list[GoogleAnalyticsAdminV1BetaProperty]] = UNSET
    """Results that matched the filter criteria and were accessible to the caller."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A token, which can be sent as ``page_token`` to retrieve the next page. If this field is omitted, there are no
    subsequent pages."""


class GoogleAnalyticsAdminV1BetaListPropertiesResponseDict(TypedDict):
    properties: NotRequired[list[GoogleAnalyticsAdminV1BetaPropertyDict]]
    next_page_token: NotRequired[str]
