from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .links import Links, LinksDict
from .meta import Meta, MetaDict
from .webhook_activity_resource import WebhookActivityResource, WebhookActivityResourceDict


class V1WebhooksActivitiesResponse(SdkBaseModel):
    data: list[WebhookActivityResource]
    links: Links
    meta: Meta


class V1WebhooksActivitiesResponseDict(TypedDict):
    data: list[WebhookActivityResourceDict]
    links: LinksDict
    meta: MetaDict
