from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.object_relm_crm_webhooks_api import ObjectRelmCrmWebhooksApiOrStr


class Webhook(SdkBaseModel):
    id: Optional[str] = UNSET
    object_: Optional[ObjectRelmCrmWebhooksApiOrStr] = Field(default=UNSET, alias="object")
    url: Optional[str] = UNSET
    events: Optional[list[str]] = UNSET
    description: OptionalNullable[str] = UNSET
    enabled: Optional[bool] = UNSET
    secret: Optional[str] = UNSET
    """whsec_...; returned ONLY on create."""

    version: Optional[int] = UNSET


class WebhookDict(TypedDict):
    id: NotRequired[str]
    object_: NotRequired[ObjectRelmCrmWebhooksApiOrStr]
    url: NotRequired[str]
    events: NotRequired[list[str]]
    description: NotRequired[str | None]
    enabled: NotRequired[bool]
    secret: NotRequired[str]
    version: NotRequired[int]
