from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .pagination import Pagination, PaginationDict


class MutualFundMetaData2(SdkBaseModel):
    """Meta data for mutual fund sips"""

    page: Optional[Pagination] = UNSET


class MutualFundMetaData2Dict(TypedDict):
    page: NotRequired[PaginationDict]
