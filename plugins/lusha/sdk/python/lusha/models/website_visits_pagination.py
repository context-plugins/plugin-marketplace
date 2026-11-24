from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class WebsiteVisitsPagination(SdkBaseModel):
    size: int
    page: int
    total: int
    """Total results across all pages."""


class WebsiteVisitsPaginationDict(TypedDict):
    size: int
    page: int
    total: int
