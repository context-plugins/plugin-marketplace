from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .test_set_sort_by import TestSetSortBy, TestSetSortByDict


class ListTestSetsRequest(SdkBaseModel):
    sort_by: Optional[TestSetSortBy] = Field(default=UNSET, alias="sortBy")
    max_results: Optional[int] = Field(default=UNSET, alias="maxResults")
    """The maximum number of test sets to return in each page. If there are fewer results than the max page size, only
    the actual number of results are returned."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """If the response from the ListTestSets operation contains more results than specified in the maxResults parameter,
    a token is returned in the response. Use that token in the nextToken parameter to return the next page of
    results."""


class ListTestSetsRequestDict(TypedDict):
    sort_by: NotRequired[TestSetSortByDict]
    max_results: NotRequired[int]
    next_token: NotRequired[str]
