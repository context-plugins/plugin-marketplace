from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bulk_campaign import BulkCampaign, BulkCampaignDict
from .pagination import Pagination, PaginationDict


class BulkCampaignsResponse(SdkBaseModel):
    data: Optional[list[BulkCampaign]] = UNSET
    meta: Optional[Pagination] = UNSET


class BulkCampaignsResponseDict(TypedDict):
    data: NotRequired[list[BulkCampaignDict]]
    meta: NotRequired[PaginationDict]
