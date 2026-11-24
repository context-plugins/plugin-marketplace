from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .test_counts import TestCounts, TestCountsDict


class TestRun(SdkBaseModel):
    pipeline_number: Optional[int] = UNSET
    """The pipeline number"""

    workflow_id: Optional[UUID] = UNSET
    """The workflow ID"""

    success_rate: Optional[float] = UNSET
    """Success rate of tests in this run"""

    test_counts: Optional[TestCounts] = UNSET
    """Test counts by result"""


class TestRunDict(TypedDict):
    pipeline_number: NotRequired[int]
    workflow_id: NotRequired[UUID]
    success_rate: NotRequired[float]
    test_counts: NotRequired[TestCountsDict]
