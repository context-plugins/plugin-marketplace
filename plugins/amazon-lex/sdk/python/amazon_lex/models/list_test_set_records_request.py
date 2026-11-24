from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ListTestSetRecordsRequest(SdkBaseModel):
    test_set_id: str = Field(alias="testSetId")
    """The identifier of the test set to list its test set records."""

    max_results: Optional[int] = Field(default=UNSET, alias="maxResults")
    """The maximum number of test set records to return in each page. If there are fewer records than the max page size,
    only the actual number of records are returned."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """If the response from the ListTestSetRecords operation contains more results than specified in the maxResults
    parameter, a token is returned in the response. Use that token in the nextToken parameter to return the next page of
    results."""


class ListTestSetRecordsRequestDict(TypedDict):
    test_set_id: str
    max_results: NotRequired[int]
    next_token: NotRequired[str]
