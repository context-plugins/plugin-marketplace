from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .webhook_created import WebhookCreated, WebhookCreatedDict


class V1WebhooksResponse1(SdkBaseModel):
    data: Optional[WebhookCreated] = UNSET
    request_id: Optional[str] = UNSET


class V1WebhooksResponse1Dict(TypedDict):
    data: NotRequired[WebhookCreatedDict]
    request_id: NotRequired[str]
