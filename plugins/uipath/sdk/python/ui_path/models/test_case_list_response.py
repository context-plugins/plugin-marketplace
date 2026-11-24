from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .test_case import TestCase, TestCaseDict


class TestCaseListResponse(SdkBaseModel):
    """Paginated response containing test cases"""

    total_count: Optional[int] = Field(default=UNSET, alias="totalCount")
    """Total number of test cases"""

    test_cases: Optional[list[TestCase]] = Field(default=UNSET, alias="testCases")


class TestCaseListResponseDict(TypedDict):
    total_count: NotRequired[int]
    test_cases: NotRequired[list[TestCaseDict]]
