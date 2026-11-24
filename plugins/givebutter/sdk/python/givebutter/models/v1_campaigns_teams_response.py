from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .campaign_team_resource import CampaignTeamResource, CampaignTeamResourceDict
from .links import Links, LinksDict
from .meta import Meta, MetaDict


class V1CampaignsTeamsResponse(SdkBaseModel):
    data: list[CampaignTeamResource]
    links: Links
    meta: Meta


class V1CampaignsTeamsResponseDict(TypedDict):
    data: list[CampaignTeamResourceDict]
    links: LinksDict
    meta: MetaDict
