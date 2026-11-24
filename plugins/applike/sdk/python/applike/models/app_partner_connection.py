from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.required_campaign_type import RequiredCampaignTypeOrStr


class AppPartnerConnection(SdkBaseModel):
    campaign_types: list[RequiredCampaignTypeOrStr] = Field(alias="campaignTypes")
    """List of campaign types this partner can run."""

    default_channel_id: int = Field(alias="defaultChannelId")
    """justtrack internal ID for the channel used by default to create campaigns"""

    multi_country_campaign_allowed: bool = Field(alias="multiCountryCampaignAllowed")
    """if you want to allow creation of campaigns with multiple countries for this partner"""

    tracking_url_slug: str = Field(alias="trackingUrlSlug")
    """a unique string to identify this partner among others on tracking urls"""


class AppPartnerConnectionDict(TypedDict):
    campaign_types: list[RequiredCampaignTypeOrStr]
    default_channel_id: int
    multi_country_campaign_allowed: bool
    tracking_url_slug: str
