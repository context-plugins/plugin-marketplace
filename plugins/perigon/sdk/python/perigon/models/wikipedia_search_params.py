from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .wikipedia_search_filter import WikipediaSearchFilter, WikipediaSearchFilterDict


class WikipediaSearchParams(SdkBaseModel):
    prompt: str
    """Natural language query to search the Wikipedia pages database"""

    filter: Optional[WikipediaSearchFilter] = UNSET
    wiki_revision_from: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="wikiRevisionFrom")
    """'wikiRevisionFrom' filter, will search pages modified after the specified date, the date could be passed as ISO
    or 'yyyy-mm-dd'. Date time in ISO format, ie. 2024-01-01T00:00:00."""

    wiki_revision_to: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="wikiRevisionTo")
    """'wikiRevisionFrom' filter, will search pages modified before the specified date, the date could be passed as ISO
    or 'yyyy-mm-dd'. Date time in ISO format, ie. 2024-01-01T00:00:00."""

    pageviews_from: OptionalNullable[int] = Field(default=UNSET, alias="pageviewsFrom")
    """'pageviewsFrom' filter, will search pages with at least the provided number of views per day."""

    pageviews_to: OptionalNullable[int] = Field(default=UNSET, alias="pageviewsTo")
    """'pageviewsFrom' filter, will search pages with at most the provided number of views per day."""

    size: int | None = 10
    """The number of items per page."""

    page: int | None = 0
    """The page number to retrieve."""


class WikipediaSearchParamsDict(TypedDict):
    prompt: str
    filter: NotRequired[WikipediaSearchFilterDict]
    wiki_revision_from: NotRequired[RFC3339DateTime | None]
    wiki_revision_to: NotRequired[RFC3339DateTime | None]
    pageviews_from: NotRequired[int | None]
    pageviews_to: NotRequired[int | None]
    size: NotRequired[int | None]
    page: NotRequired[int | None]
