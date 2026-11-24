from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .cache_report_filter import CacheReportFilter, CacheReportFilterDict
from .enums.cache_report_status import CacheReportStatusOrStr
from .tag_model import TagModel, TagModelDict


class CacheReportInfo(SdkBaseModel):
    cache_report_arn: Optional[str] = Field(default=UNSET, alias="CacheReportARN")
    """The Amazon Resource Name (ARN) of the cache report you want to describe."""

    cache_report_status: Optional[CacheReportStatusOrStr] = Field(default=UNSET, alias="CacheReportStatus")
    """The status of the specified cache report."""

    report_completion_percent: Optional[int] = Field(default=UNSET, alias="ReportCompletionPercent")
    """The percentage of the report generation process that has been completed at time of inquiry."""

    end_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="EndTime")
    """The time at which the gateway stopped generating the cache report."""

    role: Optional[str] = Field(default=UNSET, alias="Role")
    file_share_arn: Optional[str] = Field(default=UNSET, alias="FileShareARN")
    location_arn: Optional[str] = Field(default=UNSET, alias="LocationARN")
    """The ARN of the Amazon S3 bucket location where the cache report is saved."""

    start_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="StartTime")
    """The time at which the gateway started generating the cache report."""

    inclusion_filters: Optional[list[CacheReportFilter]] = Field(default=UNSET, alias="InclusionFilters")
    """The list of filters and parameters that determine which files are included in the report."""

    exclusion_filters: Optional[list[CacheReportFilter]] = Field(default=UNSET, alias="ExclusionFilters")
    """The list of filters and parameters that determine which files are excluded from the report."""

    report_name: Optional[str] = Field(default=UNSET, alias="ReportName")
    """The file name of the completed cache report object stored in Amazon S3."""

    tags: Optional[list[TagModel]] = Field(default=UNSET, alias="Tags")
    """The list of key/value tags associated with the report."""


class CacheReportInfoDict(TypedDict):
    cache_report_arn: NotRequired[str]
    cache_report_status: NotRequired[CacheReportStatusOrStr]
    report_completion_percent: NotRequired[int]
    end_time: NotRequired[RFC3339DateTime]
    role: NotRequired[str]
    file_share_arn: NotRequired[str]
    location_arn: NotRequired[str]
    start_time: NotRequired[RFC3339DateTime]
    inclusion_filters: NotRequired[list[CacheReportFilterDict]]
    exclusion_filters: NotRequired[list[CacheReportFilterDict]]
    report_name: NotRequired[str]
    tags: NotRequired[list[TagModelDict]]
