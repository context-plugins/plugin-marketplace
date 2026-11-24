from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .cache_report_info import CacheReportInfo, CacheReportInfoDict


class DescribeCacheReportOutput(SdkBaseModel):
    cache_report_info: Optional[CacheReportInfo] = Field(default=UNSET, alias="CacheReportInfo")


class DescribeCacheReportOutputDict(TypedDict):
    cache_report_info: NotRequired[CacheReportInfoDict]
