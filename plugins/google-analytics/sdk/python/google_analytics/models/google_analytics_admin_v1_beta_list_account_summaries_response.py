from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_analytics_admin_v1_beta_account_summary import (
    GoogleAnalyticsAdminV1BetaAccountSummary,
    GoogleAnalyticsAdminV1BetaAccountSummaryDict,
)


class GoogleAnalyticsAdminV1BetaListAccountSummariesResponse(SdkBaseModel):
    """Response message for ListAccountSummaries RPC."""

    account_summaries: Optional[list[GoogleAnalyticsAdminV1BetaAccountSummary]] = Field(
        default=UNSET, alias="accountSummaries"
    )
    """Account summaries of all accounts the caller has access to."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A token, which can be sent as ``page_token`` to retrieve the next page. If this field is omitted, there are no
    subsequent pages."""


class GoogleAnalyticsAdminV1BetaListAccountSummariesResponseDict(TypedDict):
    account_summaries: NotRequired[list[GoogleAnalyticsAdminV1BetaAccountSummaryDict]]
    next_page_token: NotRequired[str]
