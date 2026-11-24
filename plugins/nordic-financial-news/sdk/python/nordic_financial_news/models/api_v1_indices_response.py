from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .index_summary import IndexSummary, IndexSummaryDict
from .pagination import Pagination, PaginationDict


class ApiV1IndicesResponse(SdkBaseModel):
    indices: Optional[list[IndexSummary]] = UNSET
    pagination: Optional[Pagination] = UNSET


class ApiV1IndicesResponseDict(TypedDict):
    indices: NotRequired[list[IndexSummaryDict]]
    pagination: NotRequired[PaginationDict]
