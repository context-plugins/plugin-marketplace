from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .article_summary import ArticleSummary, ArticleSummaryDict
from .pagination import Pagination, PaginationDict


class ApiV1CompaniesArticlesResponse(SdkBaseModel):
    articles: list[ArticleSummary]
    pagination: Optional[Pagination] = UNSET
    plan_limited: Optional[bool] = UNSET
    """Present and ``true`` when your plan restricted what this endpoint can return, so the result may be incomplete.
    Absent when your plan applies no restriction."""


class ApiV1CompaniesArticlesResponseDict(TypedDict):
    articles: list[ArticleSummaryDict]
    pagination: NotRequired[PaginationDict]
    plan_limited: NotRequired[bool]
