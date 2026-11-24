from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .webhook import Webhook, WebhookDict


class BasesWebhooksResponse(SdkBaseModel):
    webhooks: Optional[list[Webhook]] = UNSET


class BasesWebhooksResponseDict(TypedDict):
    webhooks: NotRequired[list[WebhookDict]]
