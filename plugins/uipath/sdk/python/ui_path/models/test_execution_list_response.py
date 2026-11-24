from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .test_execution import TestExecution, TestExecutionDict


class TestExecutionListResponse(SdkBaseModel):
    """Paginated response containing test executions"""

    total_count: Optional[int] = Field(default=UNSET, alias="totalCount")
    """Total number of test executions"""

    executions: Optional[list[TestExecution]] = UNSET


class TestExecutionListResponseDict(TypedDict):
    total_count: NotRequired[int]
    executions: NotRequired[list[TestExecutionDict]]
