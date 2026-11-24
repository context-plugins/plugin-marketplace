from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bulk_campaign import BulkCampaign, BulkCampaignDict


class BulkCampaignsCancelResponse(SdkBaseModel):
    data: Optional[BulkCampaign] = UNSET
    message: Optional[str] = UNSET


class BulkCampaignsCancelResponseDict(TypedDict):
    data: NotRequired[BulkCampaignDict]
    message: NotRequired[str]
