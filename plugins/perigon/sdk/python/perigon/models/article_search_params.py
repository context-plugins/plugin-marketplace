from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .article_search_filter import ArticleSearchFilter, ArticleSearchFilterDict


class ArticleSearchParams(SdkBaseModel):
    prompt: str
    """Natural language query to search the news articles database"""

    filter: Optional[ArticleSearchFilter] = UNSET
    pub_date_from: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="pubDateFrom")
    """'pubDateFrom' filter, will search articles published after the specified date, the date could be passed as ISO or
    'yyyy-mm-dd'. Date time in ISO format, ie. 2024-01-01T00:00:00 - Default: Only articles with a pubDate within the
    last 30 days of the request"""

    pub_date_to: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="pubDateTo")
    """'pubDateTo' filter, will search articles published before the specified date, the date could be passed as ISO or
    'yyyy-mm-dd'. Date time in ISO format, ie. 2024-01-01T00:00:00"""

    show_reprints: bool | None = Field(default=True, alias="showReprints")
    """Whether to return reprints in the response or not. Reprints are usually wired articles from sources like AP or
    Reuters that are reprinted in multiple sources at the same time. By default, this parameter is 'true'."""

    size: int | None = 10
    """The number of items per page."""

    page: int | None = 0
    """The page number to retrieve."""


class ArticleSearchParamsDict(TypedDict):
    prompt: str
    filter: NotRequired[ArticleSearchFilterDict]
    pub_date_from: NotRequired[RFC3339DateTime | None]
    pub_date_to: NotRequired[RFC3339DateTime | None]
    show_reprints: NotRequired[bool | None]
    size: NotRequired[int | None]
    page: NotRequired[int | None]
