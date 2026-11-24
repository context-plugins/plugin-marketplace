from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_analytics_admin_v1_beta_property_summary import (
    GoogleAnalyticsAdminV1BetaPropertySummary,
    GoogleAnalyticsAdminV1BetaPropertySummaryDict,
)


class GoogleAnalyticsAdminV1BetaAccountSummary(SdkBaseModel):
    """A virtual resource representing an overview of an account and all its child Google Analytics properties."""

    account: Optional[str] = UNSET
    """Resource name of account referred to by this account summary Format: accounts/{account_id} Example:
    "accounts/1000"
    """

    name: Optional[str] = UNSET
    """Identifier. Resource name for this account summary. Format: accountSummaries/{account_id} Example:
    "accountSummaries/1000"
    """

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """Display name for the account referred to in this account summary."""

    property_summaries: Optional[list[GoogleAnalyticsAdminV1BetaPropertySummary]] = Field(
        default=UNSET, alias="propertySummaries"
    )
    """List of summaries for child accounts of this account."""


class GoogleAnalyticsAdminV1BetaAccountSummaryDict(TypedDict):
    account: NotRequired[str]
    name: NotRequired[str]
    display_name: NotRequired[str]
    property_summaries: NotRequired[list[GoogleAnalyticsAdminV1BetaPropertySummaryDict]]
