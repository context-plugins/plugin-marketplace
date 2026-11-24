from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .article_refresh_data import ArticleRefreshData, ArticleRefreshDataDict


class ArticleRefreshPeekResult(SdkBaseModel):
    data: Optional[ArticleRefreshData] = UNSET
    fetched_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="fetchedAt")
    validated_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="validatedAt")


class ArticleRefreshPeekResultDict(TypedDict):
    data: NotRequired[ArticleRefreshDataDict]
    fetched_at: NotRequired[RFC3339DateTime | None]
    validated_at: NotRequired[RFC3339DateTime | None]
