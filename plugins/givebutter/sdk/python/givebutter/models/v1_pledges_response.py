from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .links import Links, LinksDict
from .meta import Meta, MetaDict
from .pledge_resource import PledgeResource, PledgeResourceDict


class V1PledgesResponse(SdkBaseModel):
    data: list[PledgeResource]
    links: Links
    meta: Meta


class V1PledgesResponseDict(TypedDict):
    data: list[PledgeResourceDict]
    links: LinksDict
    meta: MetaDict
