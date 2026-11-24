from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CampaignItemTicketResource(SdkBaseModel):
    id: str
    campaign_id: str
    name: str
    description: str
    price: str
    total_quantity: str
    subtype: str
    active: str
    retail_price: str
    bundle_only: str
    hide_remaining: str
    scope: str
    bundles: str
    custom_fields: str
    pictures: str


class CampaignItemTicketResourceDict(TypedDict):
    id: str
    campaign_id: str
    name: str
    description: str
    price: str
    total_quantity: str
    subtype: str
    active: str
    retail_price: str
    bundle_only: str
    hide_remaining: str
    scope: str
    bundles: str
    custom_fields: str
    pictures: str
