from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .fund_resource import FundResource, FundResourceDict
from .links import Links, LinksDict
from .meta import Meta, MetaDict


class V1FundsResponse(SdkBaseModel):
    data: list[FundResource]
    links: Links
    meta: Meta


class V1FundsResponseDict(TypedDict):
    data: list[FundResourceDict]
    links: LinksDict
    meta: MetaDict
