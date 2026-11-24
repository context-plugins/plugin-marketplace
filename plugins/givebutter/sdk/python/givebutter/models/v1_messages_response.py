from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .links import Links, LinksDict
from .message_resource import MessageResource, MessageResourceDict
from .meta import Meta, MetaDict


class V1MessagesResponse(SdkBaseModel):
    data: list[MessageResource]
    links: Links
    meta: Meta


class V1MessagesResponseDict(TypedDict):
    data: list[MessageResourceDict]
    links: LinksDict
    meta: MetaDict
