from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class WebhookDeleteResponse(SdkBaseModel):
    """Response for webhook deletion."""

    webhook_id: str
    deleted: bool


class WebhookDeleteResponseDict(TypedDict):
    webhook_id: str
    deleted: bool
