from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .search_segment import SearchSegment, SearchSegmentDict


class SearchLine(SdkBaseModel):
    line: Optional[int] = UNSET
    segments: Optional[list[SearchSegment]] = UNSET


class SearchLineDict(TypedDict):
    line: NotRequired[int]
    segments: NotRequired[list[SearchSegmentDict]]
