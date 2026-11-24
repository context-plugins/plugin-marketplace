from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .article_summary import ArticleSummary, ArticleSummaryDict
from .pagination import Pagination, PaginationDict


class ApiV1ArticlesResponse1(SdkBaseModel):
    articles: list[ArticleSummary]
    pagination: Optional[Pagination] = UNSET


class ApiV1ArticlesResponse1Dict(TypedDict):
    articles: list[ArticleSummaryDict]
    pagination: NotRequired[PaginationDict]
