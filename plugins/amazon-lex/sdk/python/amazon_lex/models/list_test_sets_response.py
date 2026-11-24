from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .test_set_summary import TestSetSummary, TestSetSummaryDict


class ListTestSetsResponse(SdkBaseModel):
    test_sets: Optional[list[TestSetSummary]] = Field(default=UNSET, alias="testSets")
    """The selected test sets in a list of test sets."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """A token that indicates whether there are more results to return in a response to the ListTestSets operation. If
    the nextToken field is present, you send the contents as the nextToken parameter of a ListTestSets operation request
    to get the next page of results."""


class ListTestSetsResponseDict(TypedDict):
    test_sets: NotRequired[list[TestSetSummaryDict]]
    next_token: NotRequired[str]
