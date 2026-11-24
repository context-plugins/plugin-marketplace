from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .insights_data import InsightsData, InsightsDataDict
from .paging import Paging, PagingDict


class InsightsResponse(SdkBaseModel):
    data: Optional[list[InsightsData]] = UNSET
    paging: Optional[Paging] = UNSET


class InsightsResponseDict(TypedDict):
    data: NotRequired[list[InsightsDataDict]]
    paging: NotRequired[PagingDict]
