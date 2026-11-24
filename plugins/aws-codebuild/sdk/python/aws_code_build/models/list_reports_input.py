from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.sort_order_aws_code_build_aws_codebuild_x_amz_target_codebuild20161006_listreports_api import (
    SortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApiOrStr,
)
from .report_filter import ReportFilter, ReportFilterDict


class ListReportsInput(SdkBaseModel):
    sort_order: Optional[SortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApiOrStr] = Field(
        default=UNSET, alias="sortOrder"
    )
    """Specifies the sort order for the list of returned reports. Valid values are: ASCENDING: return reports in
    chronological order based on their creation date. DESCENDING: return reports in the reverse chronological order
    based on their creation date."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """During a previous call, the maximum number of items that can be returned is the value specified in maxResults. If
    there more items in the list, then a unique string called a nextToken is returned. To get the next batch of items in
    the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep
    calling this operation with each subsequent next token that is returned, until no more next tokens are returned."""

    max_results: Optional[int] = Field(default=UNSET, alias="maxResults")
    """The maximum number of paginated reports returned per response. Use nextToken to iterate pages in the list of
    returned Report objects. The default value is 100."""

    filter: Optional[ReportFilter] = UNSET


class ListReportsInputDict(TypedDict):
    sort_order: NotRequired[SortOrderAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApiOrStr]
    next_token: NotRequired[str]
    max_results: NotRequired[int]
    filter: NotRequired[ReportFilterDict]
