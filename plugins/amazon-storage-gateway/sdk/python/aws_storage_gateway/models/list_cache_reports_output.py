from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .cache_report_info import CacheReportInfo, CacheReportInfoDict


class ListCacheReportsOutput(SdkBaseModel):
    cache_report_list: Optional[list[CacheReportInfo]] = Field(default=UNSET, alias="CacheReportList")
    """A list of existing cache reports for all file shares associated with your Amazon Web Services account. This list
    includes all information provided by the DescribeCacheReport action, such as report status, completion progress,
    start time, end time, filters, and tags."""

    marker: Optional[str] = Field(default=UNSET, alias="Marker")
    """If the request includes Marker, the response returns that value in this field."""


class ListCacheReportsOutputDict(TypedDict):
    cache_report_list: NotRequired[list[CacheReportInfoDict]]
    marker: NotRequired[str]
