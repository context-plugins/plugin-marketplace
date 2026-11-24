from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .webhook import Webhook, WebhookDict


class WebhookResponse(SdkBaseModel):
    data: Webhook


class WebhookResponseDict(TypedDict):
    data: WebhookDict
