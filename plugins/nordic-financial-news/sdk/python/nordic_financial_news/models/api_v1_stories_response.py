from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .pagination import Pagination, PaginationDict
from .story_summary_nordic_financial_news_stories_api import (
    StorySummaryNordicFinancialNewsStoriesApi,
    StorySummaryNordicFinancialNewsStoriesApiDict,
)


class ApiV1StoriesResponse(SdkBaseModel):
    stories: Optional[list[StorySummaryNordicFinancialNewsStoriesApi]] = UNSET
    pagination: Optional[Pagination] = UNSET
    plan_limited: Optional[bool] = UNSET
    """Present and ``true`` when your plan restricted what this endpoint can return, so the result may be incomplete.
    Absent when your plan applies no restriction."""


class ApiV1StoriesResponseDict(TypedDict):
    stories: NotRequired[list[StorySummaryNordicFinancialNewsStoriesApiDict]]
    pagination: NotRequired[PaginationDict]
    plan_limited: NotRequired[bool]
