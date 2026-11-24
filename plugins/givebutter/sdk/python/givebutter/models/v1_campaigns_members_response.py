from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .campaign_member_resource import CampaignMemberResource, CampaignMemberResourceDict
from .links import Links, LinksDict
from .meta import Meta, MetaDict


class V1CampaignsMembersResponse(SdkBaseModel):
    data: list[CampaignMemberResource]
    links: Links
    meta: Meta


class V1CampaignsMembersResponseDict(TypedDict):
    data: list[CampaignMemberResourceDict]
    links: LinksDict
    meta: MetaDict
