from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .links import Links, LinksDict
from .meta import Meta, MetaDict
from .payout_resource import PayoutResource, PayoutResourceDict


class V1PayoutsResponse(SdkBaseModel):
    data: list[PayoutResource]
    links: Links
    meta: Meta


class V1PayoutsResponseDict(TypedDict):
    data: list[PayoutResourceDict]
    links: LinksDict
    meta: MetaDict
