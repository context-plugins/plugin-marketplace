from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .test_execution_result_items import TestExecutionResultItems, TestExecutionResultItemsDict


class ListTestExecutionResultItemsResponse(SdkBaseModel):
    test_execution_results: Optional[TestExecutionResultItems] = Field(default=UNSET, alias="testExecutionResults")
    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """A token that indicates whether there are more results to return in a response to the ListTestExecutionResultItems
    operation. If the nextToken field is present, you send the contents as the nextToken parameter of a
    ListTestExecutionResultItems operation request to get the next page of results."""


class ListTestExecutionResultItemsResponseDict(TypedDict):
    test_execution_results: NotRequired[TestExecutionResultItemsDict]
    next_token: NotRequired[str]
