from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .pagination import Pagination, PaginationDict
from .value_model_summary import ValueModelSummary, ValueModelSummaryDict


class ValueModelVersionListResponse(SdkBaseModel):
    data: list[ValueModelSummary]
    pagination: Pagination


class ValueModelVersionListResponseDict(TypedDict):
    data: list[ValueModelSummaryDict]
    pagination: PaginationDict
