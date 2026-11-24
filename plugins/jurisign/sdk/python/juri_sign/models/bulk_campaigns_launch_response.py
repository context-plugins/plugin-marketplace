from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bulk_campaign import BulkCampaign, BulkCampaignDict


class BulkCampaignsLaunchResponse(SdkBaseModel):
    data: Optional[BulkCampaign] = UNSET
    message: Optional[str] = UNSET


class BulkCampaignsLaunchResponseDict(TypedDict):
    data: NotRequired[BulkCampaignDict]
    message: NotRequired[str]
