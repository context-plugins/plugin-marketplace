from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.search_service import SearchServiceOrStr
from .enums.time_range import TimeRangeOrStr


class SearchParameters(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    query: str
    search_service: Optional[SearchServiceOrStr] = UNSET
    max_results: int = 5
    page: int = 1
    crawl_results: int = 0
    image: bool = False
    include_sites: Optional[list[str]] = UNSET
    exclude_sites: Optional[list[str]] = UNSET
    language: Optional[str] = UNSET
    time_range: Optional[TimeRangeOrStr] = UNSET


class SearchParametersDict(TypedDict):
    query: str
    search_service: NotRequired[SearchServiceOrStr]
    max_results: NotRequired[int]
    page: NotRequired[int]
    crawl_results: NotRequired[int]
    image: NotRequired[bool]
    include_sites: NotRequired[list[str]]
    exclude_sites: NotRequired[list[str]]
    language: NotRequired[str]
    time_range: NotRequired[TimeRangeOrStr]
