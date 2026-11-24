from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.sort_by_aws_code_build_aws_codebuild_x_amz_target_codebuild_api import (
    SortByAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr,
)
from .enums.sort_order_aws_code_build_aws_codebuild_x_amz_target_codebuild_api import (
    SortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr,
)


class DescribeCodeCoveragesInput(SdkBaseModel):
    report_arn: str = Field(alias="reportArn")
    """The ARN of the report for which test cases are returned."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """The nextToken value returned from a previous call to DescribeCodeCoverages. This specifies the next item to
    return. To return the beginning of the list, exclude this parameter."""

    max_results: Optional[int] = Field(default=UNSET, alias="maxResults")
    """The maximum number of results to return."""

    sort_order: Optional[SortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr] = Field(
        default=UNSET, alias="sortOrder"
    )
    """Specifies if the results are sorted in ascending or descending order."""

    sort_by: Optional[SortByAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr] = Field(default=UNSET, alias="sortBy")
    """Specifies how the results are sorted. Possible values are: FILE_PATH The results are sorted by file path.
    LINE_COVERAGE_PERCENTAGE The results are sorted by the percentage of lines that are covered."""

    min_line_coverage_percentage: Optional[float] = Field(default=UNSET, alias="minLineCoveragePercentage")
    """The minimum line coverage percentage to report."""

    max_line_coverage_percentage: Optional[float] = Field(default=UNSET, alias="maxLineCoveragePercentage")
    """The maximum line coverage percentage to report."""


class DescribeCodeCoveragesInputDict(TypedDict):
    report_arn: str
    next_token: NotRequired[str]
    max_results: NotRequired[int]
    sort_order: NotRequired[SortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr]
    sort_by: NotRequired[SortByAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr]
    min_line_coverage_percentage: NotRequired[float]
    max_line_coverage_percentage: NotRequired[float]
