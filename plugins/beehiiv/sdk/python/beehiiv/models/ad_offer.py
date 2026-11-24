from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .ad_offer_advertiser import AdOfferAdvertiser, AdOfferAdvertiserDict
from .ad_offer_campaign import AdOfferCampaign, AdOfferCampaignDict


class AdOffer(SdkBaseModel):
    id: str
    """The ID of the offer or pending opportunity."""

    payout_model: str
    """The payout model for the offer."""

    payout_per_click: str
    """The formatted payout per eligible click."""

    payout_per_mille: str
    """The formatted payout per thousand eligible opens."""

    estimated_payout: str
    """The formatted estimated payout."""

    send_by: Optional[RFC3339DateTime] = UNSET
    """The date the advertisement should be sent by."""

    campaign: AdOfferCampaign
    advertiser: AdOfferAdvertiser


class AdOfferDict(TypedDict):
    id: str
    payout_model: str
    payout_per_click: str
    payout_per_mille: str
    estimated_payout: str
    send_by: NotRequired[RFC3339DateTime]
    campaign: AdOfferCampaignDict
    advertiser: AdOfferAdvertiserDict
