from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CodeCoverageReportSummary(SdkBaseModel):
    line_coverage_percentage: Optional[float] = Field(default=UNSET, alias="lineCoveragePercentage")
    """The percentage of lines that are covered by your tests."""

    lines_covered: Optional[int] = Field(default=UNSET, alias="linesCovered")
    """The number of lines that are covered by your tests."""

    lines_missed: Optional[int] = Field(default=UNSET, alias="linesMissed")
    """The number of lines that are not covered by your tests."""

    branch_coverage_percentage: Optional[float] = Field(default=UNSET, alias="branchCoveragePercentage")
    """The percentage of branches that are covered by your tests."""

    branches_covered: Optional[int] = Field(default=UNSET, alias="branchesCovered")
    """The number of conditional branches that are covered by your tests."""

    branches_missed: Optional[int] = Field(default=UNSET, alias="branchesMissed")
    """The number of conditional branches that are not covered by your tests."""


class CodeCoverageReportSummaryDict(TypedDict):
    line_coverage_percentage: NotRequired[float]
    lines_covered: NotRequired[int]
    lines_missed: NotRequired[int]
    branch_coverage_percentage: NotRequired[float]
    branches_covered: NotRequired[int]
    branches_missed: NotRequired[int]
