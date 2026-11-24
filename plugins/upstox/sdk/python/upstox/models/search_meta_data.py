from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .pagination import Pagination, PaginationDict


class SearchMetaData(SdkBaseModel):
    page: Optional[Pagination] = UNSET


class SearchMetaDataDict(TypedDict):
    page: NotRequired[PaginationDict]
