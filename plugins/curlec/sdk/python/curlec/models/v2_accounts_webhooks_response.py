from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .partner_webhook import PartnerWebhook, PartnerWebhookDict


class V2AccountsWebhooksResponse(SdkBaseModel):
    entity: Optional[str] = UNSET
    count: Optional[int] = UNSET
    items: Optional[list[PartnerWebhook]] = UNSET


class V2AccountsWebhooksResponseDict(TypedDict):
    entity: NotRequired[str]
    count: NotRequired[int]
    items: NotRequired[list[PartnerWebhookDict]]
