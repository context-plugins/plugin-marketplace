from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bulk_campaign import BulkCampaign, BulkCampaignDict


class BulkCampaignsResponse2(SdkBaseModel):
    data: Optional[BulkCampaign] = UNSET


class BulkCampaignsResponse2Dict(TypedDict):
    data: NotRequired[BulkCampaignDict]
