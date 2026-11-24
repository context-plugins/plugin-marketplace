from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .pagination import Pagination, PaginationDict
from .source_summary import SourceSummary, SourceSummaryDict


class ApiV1SourcesResponse(SdkBaseModel):
    sources: Optional[list[SourceSummary]] = UNSET
    pagination: Optional[Pagination] = UNSET


class ApiV1SourcesResponseDict(TypedDict):
    sources: NotRequired[list[SourceSummaryDict]]
    pagination: NotRequired[PaginationDict]
