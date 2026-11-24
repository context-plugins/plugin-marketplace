from __future__ import annotations

from typing import Any

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .unions.campaign_recipient import CampaignRecipient, CampaignRecipientDict


class StartCampaignRequest(SdkBaseModel):
    """Request body for triggering an API campaign send."""

    model_config = ConfigDict(extra="forbid")

    properties: Optional[dict[str, Any]] = UNSET
    """Shared personalization properties applied to all recipients. Keys must match the variable names shown in the
    message editor. Per-recipient ``properties`` take precedence when a key appears in both."""

    draft: bool = False
    """When ``true``, sends the campaign even if it has not been activated. Intended for test sends against draft
    campaigns only."""

    recipients: list[CampaignRecipient]
    """List of recipients to send to. Each entry must include either a ``handle`` (delivery address) or an ``id``
    (Personalization API based profile ID)."""


class StartCampaignRequestDict(TypedDict):
    properties: NotRequired[dict[str, Any]]
    draft: NotRequired[bool]
    recipients: list[CampaignRecipientDict]
