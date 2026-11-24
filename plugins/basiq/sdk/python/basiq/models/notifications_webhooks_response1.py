from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .datum7 import Datum7, Datum7Dict
from .links_webhooks_api import LinksWebhooksApi, LinksWebhooksApiDict


class NotificationsWebhooksResponse1(SdkBaseModel):
    type_: Optional[str] = Field(default=UNSET, alias="type")
    count: Optional[int] = UNSET
    size: Optional[int] = UNSET
    data: Optional[list[Datum7]] = UNSET
    links: Optional[LinksWebhooksApi] = UNSET


class NotificationsWebhooksResponse1Dict(TypedDict):
    type_: NotRequired[str]
    count: NotRequired[int]
    size: NotRequired[int]
    data: NotRequired[list[Datum7Dict]]
    links: NotRequired[LinksWebhooksApiDict]
