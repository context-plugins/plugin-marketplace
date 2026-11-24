from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .campaign_item_ticket_resource import CampaignItemTicketResource, CampaignItemTicketResourceDict
from .links import Links, LinksDict
from .meta import Meta, MetaDict


class V1CampaignsItemsTicketsResponse(SdkBaseModel):
    data: list[CampaignItemTicketResource]
    links: Links
    meta: Meta


class V1CampaignsItemsTicketsResponseDict(TypedDict):
    data: list[CampaignItemTicketResourceDict]
    links: LinksDict
    meta: MetaDict
