from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .category_summary import CategorySummary, CategorySummaryDict
from .pagination import Pagination, PaginationDict


class ApiV1CategoriesResponse(SdkBaseModel):
    categories: list[CategorySummary]
    pagination: Optional[Pagination] = UNSET


class ApiV1CategoriesResponseDict(TypedDict):
    categories: list[CategorySummaryDict]
    pagination: NotRequired[PaginationDict]
