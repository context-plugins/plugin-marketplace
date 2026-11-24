from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .datum31 import Datum31, Datum31Dict
from .links_webhooks_api import LinksWebhooksApi, LinksWebhooksApiDict


class NotificationsWebhooksMessagesResponse(SdkBaseModel):
    type_: Optional[str] = Field(default=UNSET, alias="type")
    count: Optional[int] = UNSET
    size: Optional[int] = UNSET
    data: Optional[list[Datum31]] = UNSET
    links: Optional[LinksWebhooksApi] = UNSET


class NotificationsWebhooksMessagesResponseDict(TypedDict):
    type_: NotRequired[str]
    count: NotRequired[int]
    size: NotRequired[int]
    data: NotRequired[list[Datum31Dict]]
    links: NotRequired[LinksWebhooksApiDict]
