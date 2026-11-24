from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_analytics_admin_v1_beta_account import (
    GoogleAnalyticsAdminV1BetaAccount,
    GoogleAnalyticsAdminV1BetaAccountDict,
)


class GoogleAnalyticsAdminV1BetaListAccountsResponse(SdkBaseModel):
    """Request message for ListAccounts RPC."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A token, which can be sent as ``page_token`` to retrieve the next page. If this field is omitted, there are no
    subsequent pages."""

    accounts: Optional[list[GoogleAnalyticsAdminV1BetaAccount]] = UNSET
    """Results that were accessible to the caller."""


class GoogleAnalyticsAdminV1BetaListAccountsResponseDict(TypedDict):
    next_page_token: NotRequired[str]
    accounts: NotRequired[list[GoogleAnalyticsAdminV1BetaAccountDict]]
