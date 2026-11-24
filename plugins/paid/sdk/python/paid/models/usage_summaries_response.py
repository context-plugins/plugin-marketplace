from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .usage_pagination_meta import UsagePaginationMeta, UsagePaginationMetaDict
from .usage_summary import UsageSummary, UsageSummaryDict


class UsageSummariesResponse(SdkBaseModel):
    """Response containing usage summaries and pagination metadata"""

    data: list[UsageSummary]
    pagination: UsagePaginationMeta
    """Pagination metadata for usage summaries"""


class UsageSummariesResponseDict(TypedDict):
    data: list[UsageSummaryDict]
    pagination: UsagePaginationMetaDict
