from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .webhook import Webhook, WebhookDict


class UpdateWebhookOutput(SdkBaseModel):
    webhook: Optional[Webhook] = UNSET


class UpdateWebhookOutputDict(TypedDict):
    webhook: NotRequired[WebhookDict]
