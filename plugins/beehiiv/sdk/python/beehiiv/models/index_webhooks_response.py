from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .webhook import Webhook, WebhookDict


class IndexWebhooksResponse(SdkBaseModel):
    data: list[Webhook]


class IndexWebhooksResponseDict(TypedDict):
    data: list[WebhookDict]
