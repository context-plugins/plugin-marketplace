from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .test_case_filter import TestCaseFilter, TestCaseFilterDict


class DescribeTestCasesInput(SdkBaseModel):
    report_arn: str = Field(alias="reportArn")
    """The ARN of the report for which test cases are returned."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """During a previous call, the maximum number of items that can be returned is the value specified in maxResults. If
    there more items in the list, then a unique string called a nextToken is returned. To get the next batch of items in
    the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep
    calling this operation with each subsequent next token that is returned, until no more next tokens are returned."""

    max_results: Optional[int] = Field(default=UNSET, alias="maxResults")
    """The maximum number of paginated test cases returned per response. Use nextToken to iterate pages in the list of
    returned TestCase objects. The default value is 100."""

    filter: Optional[TestCaseFilter] = UNSET


class DescribeTestCasesInputDict(TypedDict):
    report_arn: str
    next_token: NotRequired[str]
    max_results: NotRequired[int]
    filter: NotRequired[TestCaseFilterDict]
