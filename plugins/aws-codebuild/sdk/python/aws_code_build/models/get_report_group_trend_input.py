from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.trend_field import TrendFieldOrStr


class GetReportGroupTrendInput(SdkBaseModel):
    report_group_arn: str = Field(alias="reportGroupArn")
    """The ARN of the report group that contains the reports to analyze."""

    num_of_reports: Optional[int] = Field(default=UNSET, alias="numOfReports")
    """The number of reports to analyze. This operation always retrieves the most recent reports. If this parameter is
    omitted, the most recent 100 reports are analyzed."""

    trend_field: TrendFieldOrStr = Field(alias="trendField")
    """The test report value to accumulate. This must be one of the following values: Test reports: DURATION Accumulate
    the test run times for the specified reports. PASS_RATE Accumulate the percentage of tests that passed for the
    specified test reports. TOTAL Accumulate the total number of tests for the specified test reports. Code coverage
    reports: BRANCH_COVERAGE Accumulate the branch coverage percentages for the specified test reports. BRANCHES_COVERED
    Accumulate the branches covered values for the specified test reports. BRANCHES_MISSED Accumulate the branches
    missed values for the specified tes"""


class GetReportGroupTrendInputDict(TypedDict):
    report_group_arn: str
    num_of_reports: NotRequired[int]
    trend_field: TrendFieldOrStr
