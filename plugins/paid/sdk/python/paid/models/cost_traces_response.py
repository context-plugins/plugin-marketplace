from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .cost_trace import CostTrace, CostTraceDict
from .pagination_meta import PaginationMeta, PaginationMetaDict


class CostTracesResponse(SdkBaseModel):
    """Response containing cost traces and pagination metadata"""

    traces: list[CostTrace]
    meta: PaginationMeta
    """Pagination metadata for cost traces"""


class CostTracesResponseDict(TypedDict):
    traces: list[CostTraceDict]
    meta: PaginationMetaDict
