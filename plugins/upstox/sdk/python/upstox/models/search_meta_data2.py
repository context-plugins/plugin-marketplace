from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .pagination import Pagination, PaginationDict


class SearchMetaData2(SdkBaseModel):
    """Meta data for search instrument response"""

    page: Optional[Pagination] = UNSET


class SearchMetaData2Dict(TypedDict):
    page: NotRequired[PaginationDict]
