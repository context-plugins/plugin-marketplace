from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .test_set import TestSet, TestSetDict


class TestSetListResponse(SdkBaseModel):
    """Paginated response containing test sets"""

    total_count: Optional[int] = Field(default=UNSET, alias="totalCount")
    """Total number of test sets"""

    test_sets: Optional[list[TestSet]] = Field(default=UNSET, alias="testSets")


class TestSetListResponseDict(TypedDict):
    total_count: NotRequired[int]
    test_sets: NotRequired[list[TestSetDict]]
