from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .paginated_response_webhook import PaginatedResponseWebhook, PaginatedResponseWebhookDict


class WebhooksListResponse(SdkBaseModel):
    """Response containing a paginated list of webhooks."""

    webhooks: PaginatedResponseWebhook


class WebhooksListResponseDict(TypedDict):
    webhooks: PaginatedResponseWebhookDict
