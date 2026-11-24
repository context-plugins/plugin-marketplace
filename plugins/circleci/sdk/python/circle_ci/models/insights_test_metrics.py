from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .most_failed_test import MostFailedTest, MostFailedTestDict
from .slowest_test import SlowestTest, SlowestTestDict
from .test_run import TestRun, TestRunDict


class InsightsTestMetrics(SdkBaseModel):
    average_test_count: Optional[int] = UNSET
    """Average number of tests per run"""

    most_failed_tests: Optional[list[MostFailedTest]] = UNSET
    """Most frequently failing tests"""

    slowest_tests: Optional[list[SlowestTest]] = UNSET
    """Slowest tests by duration"""

    test_runs: Optional[list[TestRun]] = UNSET
    """Recent test run summaries"""


class InsightsTestMetricsDict(TypedDict):
    average_test_count: NotRequired[int]
    most_failed_tests: NotRequired[list[MostFailedTestDict]]
    slowest_tests: NotRequired[list[SlowestTestDict]]
    test_runs: NotRequired[list[TestRunDict]]
