from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ResultReportingReportsApi(SdkBaseModel):
    value: Optional[str] = UNSET
    format: Optional[str] = UNSET
    """Format of the metric value"""


class ResultReportingReportsApiDict(TypedDict):
    value: NotRequired[str]
    format: NotRequired[str]
