from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class CodeCoverage(SdkBaseModel):
    id: Optional[str] = UNSET
    """The identifier of the code coverage report."""

    report_arn: Optional[str] = Field(default=UNSET, alias="reportARN")
    """The ARN of the report."""

    file_path: Optional[str] = Field(default=UNSET, alias="filePath")
    """The path of the test report file."""

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

    expired: Optional[RFC3339DateTime] = UNSET
    """The date and time that the tests were run."""


class CodeCoverageDict(TypedDict):
    id: NotRequired[str]
    report_arn: NotRequired[str]
    file_path: NotRequired[str]
    line_coverage_percentage: NotRequired[float]
    lines_covered: NotRequired[int]
    lines_missed: NotRequired[int]
    branch_coverage_percentage: NotRequired[float]
    branches_covered: NotRequired[int]
    branches_missed: NotRequired[int]
    expired: NotRequired[RFC3339DateTime]
