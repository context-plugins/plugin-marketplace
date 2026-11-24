from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .webhook_with_secret import WebhookWithSecret, WebhookWithSecretDict


class WebhookCreateResponse(SdkBaseModel):
    """Response for webhook creation, includes the secret (only returned once)."""

    webhook: WebhookWithSecret
    """Webhook response that includes the secret, only returned on creation."""


class WebhookCreateResponseDict(TypedDict):
    webhook: WebhookWithSecretDict
