from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .campaign import Campaign, CampaignDict


class Campaigns(SdkBaseModel):
    campaigns: Optional[list[Campaign]] = UNSET


class CampaignsDict(TypedDict):
    campaigns: NotRequired[list[CampaignDict]]
