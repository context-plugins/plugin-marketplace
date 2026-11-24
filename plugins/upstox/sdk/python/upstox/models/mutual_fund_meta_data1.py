from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .pagination import Pagination, PaginationDict


class MutualFundMetaData1(SdkBaseModel):
    """Meta data for mutual fund orders"""

    page: Optional[Pagination] = UNSET


class MutualFundMetaData1Dict(TypedDict):
    page: NotRequired[PaginationDict]
