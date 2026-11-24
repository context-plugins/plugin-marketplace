from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_analytics_admin_v1_beta_account2 import (
    GoogleAnalyticsAdminV1BetaAccount2,
    GoogleAnalyticsAdminV1BetaAccount2Dict,
)


class GoogleAnalyticsAdminV1BetaProvisionAccountTicketRequest(SdkBaseModel):
    """Request message for ProvisionAccountTicket RPC."""

    account: Optional[GoogleAnalyticsAdminV1BetaAccount2] = UNSET
    """The account to create."""

    redirect_uri: Optional[str] = Field(default=UNSET, alias="redirectUri")
    """Redirect URI where the user will be sent after accepting Terms of Service."""


class GoogleAnalyticsAdminV1BetaProvisionAccountTicketRequestDict(TypedDict):
    account: NotRequired[GoogleAnalyticsAdminV1BetaAccount2Dict]
    redirect_uri: NotRequired[str]
