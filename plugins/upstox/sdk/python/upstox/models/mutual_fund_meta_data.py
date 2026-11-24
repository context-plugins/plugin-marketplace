from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .pagination import Pagination, PaginationDict


class MutualFundMetaData(SdkBaseModel):
    page: Optional[Pagination] = UNSET


class MutualFundMetaDataDict(TypedDict):
    page: NotRequired[PaginationDict]
