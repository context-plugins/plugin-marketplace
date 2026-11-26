from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .news_parameters import NewsParameters, NewsParametersDict
from .search_result import SearchResult, SearchResultDict


class NewsResponse(SdkBaseModel):
    search_parameters: NewsParameters = Field(alias="searchParameters")
    results: list[SearchResult]
    images: Optional[list[str]] = UNSET


class NewsResponseDict(TypedDict):
    search_parameters: NewsParametersDict
    results: list[SearchResultDict]
    images: NotRequired[list[str]]
