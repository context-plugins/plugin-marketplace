from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .pagination_meta import PaginationMeta, PaginationMetaDict
from .trace import Trace, TraceDict


class TracesResponse(SdkBaseModel):
    """Response containing cost traces and pagination metadata"""

    traces: list[Trace]
    meta: PaginationMeta
    """Pagination metadata for cost traces"""


class TracesResponseDict(TypedDict):
    traces: list[TraceDict]
    meta: PaginationMetaDict
