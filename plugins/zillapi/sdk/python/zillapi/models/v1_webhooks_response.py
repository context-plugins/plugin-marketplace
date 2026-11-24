from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .webhook import Webhook, WebhookDict


class V1WebhooksResponse(SdkBaseModel):
    data: Optional[list[Webhook]] = UNSET
    request_id: Optional[str] = UNSET


class V1WebhooksResponseDict(TypedDict):
    data: NotRequired[list[WebhookDict]]
    request_id: NotRequired[str]
