from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bulk_campaign import BulkCampaign, BulkCampaignDict


class BulkCampaignsResponse1(SdkBaseModel):
    data: Optional[BulkCampaign] = UNSET
    skipped_recipients: Optional[int] = UNSET


class BulkCampaignsResponse1Dict(TypedDict):
    data: NotRequired[BulkCampaignDict]
    skipped_recipients: NotRequired[int]
