from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .search_filter_play import SearchFilterPlay, SearchFilterPlayDict


class SummarySearchBody(SdkBaseModel):
    q: Optional[str] = UNSET
    """Query"""

    filter: SearchFilterPlay


class SummarySearchBodyDict(TypedDict):
    q: NotRequired[str]
    filter: SearchFilterPlayDict
