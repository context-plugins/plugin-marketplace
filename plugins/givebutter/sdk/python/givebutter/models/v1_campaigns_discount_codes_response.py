from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .campaign_discount_code_resource import CampaignDiscountCodeResource, CampaignDiscountCodeResourceDict
from .links import Links, LinksDict
from .meta import Meta, MetaDict


class V1CampaignsDiscountCodesResponse(SdkBaseModel):
    data: list[CampaignDiscountCodeResource]
    links: Links
    meta: Meta


class V1CampaignsDiscountCodesResponseDict(TypedDict):
    data: list[CampaignDiscountCodeResourceDict]
    links: LinksDict
    meta: MetaDict
