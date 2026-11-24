from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .filters1 import Filters1, Filters1Dict
from .pagination_params import PaginationParams, PaginationParamsDict


class CompanySearchRequest(SdkBaseModel):
    pages: Optional[PaginationParams] = UNSET
    filters: Filters1


class CompanySearchRequestDict(TypedDict):
    pages: NotRequired[PaginationParamsDict]
    filters: Filters1Dict
