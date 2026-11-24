from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .range import Range, RangeDict
from .search_keyword import SearchKeyword, SearchKeywordDict


class ApiV1MiscGoogleBusinessLocationSearchKeywordsResponse(SdkBaseModel):
    location: str
    """The Google Business location the keywords belong to, as ``locations/{locationId}``."""

    range_: Range = Field(alias="range")
    search_keywords: Optional[list[SearchKeyword]] = Field(default=UNSET, alias="searchKeywords")
    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")


class ApiV1MiscGoogleBusinessLocationSearchKeywordsResponseDict(TypedDict):
    location: str
    range_: RangeDict
    search_keywords: NotRequired[list[SearchKeywordDict]]
    next_page_token: NotRequired[str]
