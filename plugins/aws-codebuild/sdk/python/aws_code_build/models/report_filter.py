from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status_aws_code_build_aws_codebuild_x_amz_target_codebuild20161006_listreports_api import (
    StatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApiOrStr,
)


class ReportFilter(SdkBaseModel):
    status: Optional[StatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApiOrStr] = UNSET
    """The status used to filter reports. You can filter using one status only."""


class ReportFilterDict(TypedDict):
    status: NotRequired[StatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApiOrStr]
