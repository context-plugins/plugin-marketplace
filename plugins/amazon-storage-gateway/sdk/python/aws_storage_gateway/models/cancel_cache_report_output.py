from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CancelCacheReportOutput(SdkBaseModel):
    cache_report_arn: Optional[str] = Field(default=UNSET, alias="CacheReportARN")
    """The Amazon Resource Name (ARN) of the cache report you want to cancel."""


class CancelCacheReportOutputDict(TypedDict):
    cache_report_arn: NotRequired[str]
