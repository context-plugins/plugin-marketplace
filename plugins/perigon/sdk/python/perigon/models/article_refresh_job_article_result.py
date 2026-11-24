from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .article_refresh_data import ArticleRefreshData, ArticleRefreshDataDict
from .enums.status_perigon_news_stories_api import StatusPerigonNewsStoriesApiOrStr


class ArticleRefreshJobArticleResult(SdkBaseModel):
    article_id: OptionalNullable[str] = Field(default=UNSET, alias="articleId")
    status: OptionalNullable[StatusPerigonNewsStoriesApiOrStr] = UNSET
    data: Optional[ArticleRefreshData] = UNSET
    computed_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="computedAt")


class ArticleRefreshJobArticleResultDict(TypedDict):
    article_id: NotRequired[str | None]
    status: NotRequired[StatusPerigonNewsStoriesApiOrStr | None]
    data: NotRequired[ArticleRefreshDataDict]
    computed_at: NotRequired[RFC3339DateTime | None]
