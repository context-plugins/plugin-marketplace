from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status6 import Status6OrStr


class ReportFilterAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi(SdkBaseModel):
    status: Optional[Status6OrStr] = UNSET
    """The status used to filter reports. You can filter using one status only."""


class ReportFilterAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiDict(TypedDict):
    status: NotRequired[Status6OrStr]
