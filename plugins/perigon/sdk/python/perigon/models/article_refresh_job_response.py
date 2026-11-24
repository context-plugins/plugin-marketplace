from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .article_refresh_job_article_result import ArticleRefreshJobArticleResult, ArticleRefreshJobArticleResultDict
from .enums.status1_perigon_news_stories_api import Status1PerigonNewsStoriesApiOrStr


class ArticleRefreshJobResponse(SdkBaseModel):
    job_id: OptionalNullable[UUID] = Field(default=UNSET, alias="jobId")
    status: OptionalNullable[Status1PerigonNewsStoriesApiOrStr] = UNSET
    results: OptionalNullable[list[ArticleRefreshJobArticleResult]] = UNSET


class ArticleRefreshJobResponseDict(TypedDict):
    job_id: NotRequired[UUID | None]
    status: NotRequired[Status1PerigonNewsStoriesApiOrStr | None]
    results: NotRequired[list[ArticleRefreshJobArticleResultDict] | None]
