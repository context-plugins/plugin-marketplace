from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.sort_order5 import SortOrder5OrStr
from .report_filter_aws_code_build_aws_codebuild_x_amz_target_codebuild_api import (
    ReportFilterAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi,
    ReportFilterAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiDict,
)


class ListReportsForReportGroupInput(SdkBaseModel):
    report_group_arn: str = Field(alias="reportGroupArn")
    """The ARN of the report group for which you want to return report ARNs."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """During a previous call, the maximum number of items that can be returned is the value specified in maxResults. If
    there more items in the list, then a unique string called a nextToken is returned. To get the next batch of items in
    the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep
    calling this operation with each subsequent next token that is returned, until no more next tokens are returned."""

    sort_order: Optional[SortOrder5OrStr] = Field(default=UNSET, alias="sortOrder")
    """Use to specify whether the results are returned in ascending or descending order."""

    max_results: Optional[int] = Field(default=UNSET, alias="maxResults")
    """The maximum number of paginated reports in this report group returned per response. Use nextToken to iterate
    pages in the list of returned Report objects. The default value is 100."""

    filter: Optional[ReportFilterAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi] = UNSET


class ListReportsForReportGroupInputDict(TypedDict):
    report_group_arn: str
    next_token: NotRequired[str]
    sort_order: NotRequired[SortOrder5OrStr]
    max_results: NotRequired[int]
    filter: NotRequired[ReportFilterAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiDict]
