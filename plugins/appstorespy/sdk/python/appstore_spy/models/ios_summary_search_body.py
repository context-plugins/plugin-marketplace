from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .search_filter_ios import SearchFilterIos, SearchFilterIosDict


class IosSummarySearchBody(SdkBaseModel):
    q: Optional[str] = UNSET
    """Query"""

    filter: SearchFilterIos


class IosSummarySearchBodyDict(TypedDict):
    q: NotRequired[str]
    filter: SearchFilterIosDict
