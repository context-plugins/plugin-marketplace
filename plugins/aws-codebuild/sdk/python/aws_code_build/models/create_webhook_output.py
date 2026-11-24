from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .webhook import Webhook, WebhookDict


class CreateWebhookOutput(SdkBaseModel):
    webhook: Optional[Webhook] = UNSET


class CreateWebhookOutputDict(TypedDict):
    webhook: NotRequired[WebhookDict]
