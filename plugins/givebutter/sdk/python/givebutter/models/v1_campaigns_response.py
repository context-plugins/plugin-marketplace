from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .campaign_resource import CampaignResource, CampaignResourceDict
from .links import Links, LinksDict
from .meta_givebutter_api_documentation_campaigns_api import (
    MetaGivebutterApiDocumentationCampaignsApi,
    MetaGivebutterApiDocumentationCampaignsApiDict,
)


class V1CampaignsResponse(SdkBaseModel):
    data: list[CampaignResource]
    links: Links
    meta: MetaGivebutterApiDocumentationCampaignsApi


class V1CampaignsResponseDict(TypedDict):
    data: list[CampaignResourceDict]
    links: LinksDict
    meta: MetaGivebutterApiDocumentationCampaignsApiDict
