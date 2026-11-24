from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .webhook import Webhook, WebhookDict


class WebhookResponse(SdkBaseModel):
    """Response containing a single webhook."""

    webhook: Webhook
    """API model for webhook representation in the developer API."""


class WebhookResponseDict(TypedDict):
    webhook: WebhookDict
