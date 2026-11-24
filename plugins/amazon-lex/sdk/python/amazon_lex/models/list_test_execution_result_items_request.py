from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .test_execution_result_filter_by import TestExecutionResultFilterBy, TestExecutionResultFilterByDict


class ListTestExecutionResultItemsRequest(SdkBaseModel):
    test_execution_id: str = Field(alias="testExecutionId")
    """The unique identifier of the test execution to list the result items."""

    result_filter_by: TestExecutionResultFilterBy = Field(alias="resultFilterBy")
    max_results: Optional[int] = Field(default=UNSET, alias="maxResults")
    """The maximum number of test execution result items to return in each page. If there are fewer results than the max
    page size, only the actual number of results are returned."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """If the response from the ListTestExecutionResultItems operation contains more results than specified in the
    maxResults parameter, a token is returned in the response. Use that token in the nextToken parameter to return the
    next page of results."""


class ListTestExecutionResultItemsRequestDict(TypedDict):
    test_execution_id: str
    result_filter_by: TestExecutionResultFilterByDict
    max_results: NotRequired[int]
    next_token: NotRequired[str]
