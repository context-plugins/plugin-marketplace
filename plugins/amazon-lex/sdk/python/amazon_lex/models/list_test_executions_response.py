from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .test_execution_summary import TestExecutionSummary, TestExecutionSummaryDict


class ListTestExecutionsResponse(SdkBaseModel):
    test_executions: Optional[list[TestExecutionSummary]] = Field(default=UNSET, alias="testExecutions")
    """The list of test executions."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """A token that indicates whether there are more results to return in a response to the ListTestExecutions
    operation. If the nextToken field is present, you send the contents as the nextToken parameter of a
    ListTestExecutions operation request to get the next page of results."""


class ListTestExecutionsResponseDict(TypedDict):
    test_executions: NotRequired[list[TestExecutionSummaryDict]]
    next_token: NotRequired[str]
