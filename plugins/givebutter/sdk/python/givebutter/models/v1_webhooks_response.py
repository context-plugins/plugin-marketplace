from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .links import Links, LinksDict
from .meta import Meta, MetaDict
from .webhook_resource import WebhookResource, WebhookResourceDict


class V1WebhooksResponse(SdkBaseModel):
    data: list[WebhookResource]
    links: Links
    meta: Meta


class V1WebhooksResponseDict(TypedDict):
    data: list[WebhookResourceDict]
    links: LinksDict
    meta: MetaDict
