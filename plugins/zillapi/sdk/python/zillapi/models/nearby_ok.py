from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .search_result_row import SearchResultRow, SearchResultRowDict


class NearbyOk(SdkBaseModel):
    data: Optional[list[SearchResultRow]] = UNSET
    request_id: Optional[str] = UNSET


class NearbyOkDict(TypedDict):
    data: NotRequired[list[SearchResultRowDict]]
    request_id: NotRequired[str]
