from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .search_line import SearchLine, SearchLineDict


class SearchContentMatch(SdkBaseModel):
    lines: Optional[list[SearchLine]] = UNSET


class SearchContentMatchDict(TypedDict):
    lines: NotRequired[list[SearchLineDict]]
