from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class TestReportSummary(SdkBaseModel):
    total: int
    """The number of test cases in this TestReportSummary. The total includes truncated test cases."""

    status_counts: dict[str, int] = Field(alias="statusCounts")
    """A map that contains the number of each type of status returned by the test results in this TestReportSummary."""

    duration_in_nano_seconds: int = Field(alias="durationInNanoSeconds")
    """The number of nanoseconds it took to run all of the test cases in this report."""


class TestReportSummaryDict(TypedDict):
    total: int
    status_counts: dict[str, int]
    duration_in_nano_seconds: int
