from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .article_refresh_peek_result import ArticleRefreshPeekResult, ArticleRefreshPeekResultDict


class ArticleRefreshPeekResponse(SdkBaseModel):
    results: OptionalNullable[list[ArticleRefreshPeekResult]] = UNSET


class ArticleRefreshPeekResponseDict(TypedDict):
    results: NotRequired[list[ArticleRefreshPeekResultDict] | None]
