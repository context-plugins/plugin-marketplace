from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .insight_response import InsightResponse, InsightResponseDict
from .pagination import Pagination, PaginationDict


class ResultsBody(SdkBaseModel):
    """Paginated list of insight results."""

    results: Optional[list[InsightResponse]] = UNSET
    """List of insight results."""

    pagination: Optional[Pagination] = UNSET
    """Cursor-based pagination metadata."""


class ResultsBodyDict(TypedDict):
    results: NotRequired[list[InsightResponseDict]]
    pagination: NotRequired[PaginationDict]
