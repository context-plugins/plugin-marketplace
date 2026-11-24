from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TrendField(str, Enum):
    """The test report value to accumulate. This must be one of the following values: Test reports: DURATION Accumulate
    the test run times for the specified reports. PASS_RATE Accumulate the percentage of tests that passed for the
    specified test reports. TOTAL Accumulate the total number of tests for the specified test reports. Code coverage
    reports: BRANCH_COVERAGE Accumulate the branch coverage percentages for the specified test reports. BRANCHES_COVERED
    Accumulate the branches covered values for the specified test reports. BRANCHES_MISSED Accumulate the branches
    missed values for the specified tes"""

    PASS_RATE = "PASS_RATE"
    DURATION = "DURATION"
    TOTAL = "TOTAL"
    LINE_COVERAGE = "LINE_COVERAGE"
    LINES_COVERED = "LINES_COVERED"
    LINES_MISSED = "LINES_MISSED"
    BRANCH_COVERAGE = "BRANCH_COVERAGE"
    BRANCHES_COVERED = "BRANCHES_COVERED"
    BRANCHES_MISSED = "BRANCHES_MISSED"

    __str__ = str.__str__


TrendFieldOrStr: TypeAlias = Annotated[TrendField | str, open_enum_validator(TrendField)]
