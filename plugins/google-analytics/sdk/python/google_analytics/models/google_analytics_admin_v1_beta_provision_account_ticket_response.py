from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleAnalyticsAdminV1BetaProvisionAccountTicketResponse(SdkBaseModel):
    """Response message for ProvisionAccountTicket RPC."""

    account_ticket_id: Optional[str] = Field(default=UNSET, alias="accountTicketId")
    """The param to be passed in the ToS link."""


class GoogleAnalyticsAdminV1BetaProvisionAccountTicketResponseDict(TypedDict):
    account_ticket_id: NotRequired[str]
