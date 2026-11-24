from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .campaign import Campaign, CampaignDict
from .paging import Paging, PagingDict


class CampaignList(SdkBaseModel):
    data: Optional[list[Campaign]] = UNSET
    paging: Optional[Paging] = UNSET


class CampaignListDict(TypedDict):
    data: NotRequired[list[CampaignDict]]
    paging: NotRequired[PagingDict]
