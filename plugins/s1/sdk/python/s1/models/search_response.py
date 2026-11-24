from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .search_parameters import SearchParameters, SearchParametersDict
from .search_result import SearchResult, SearchResultDict


class SearchResponse(SdkBaseModel):
    search_parameters: SearchParameters = Field(alias="searchParameters")
    results: list[SearchResult]
    images: Optional[list[str]] = UNSET


class SearchResponseDict(TypedDict):
    search_parameters: SearchParametersDict
    results: list[SearchResultDict]
    images: NotRequired[list[str]]
