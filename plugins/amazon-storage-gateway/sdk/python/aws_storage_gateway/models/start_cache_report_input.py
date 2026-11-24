from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .cache_report_filter import CacheReportFilter, CacheReportFilterDict
from .tag_model import TagModel, TagModelDict


class StartCacheReportInput(SdkBaseModel):
    file_share_arn: str = Field(alias="FileShareARN")
    role: str = Field(alias="Role")
    """The ARN of the IAM role used when saving the cache report to Amazon S3."""

    location_arn: str = Field(alias="LocationARN")
    """The ARN of the Amazon S3 bucket where you want to save the cache report. We do not recommend saving the cache
    report to the same Amazon S3 bucket for which you are generating the report. This field does not accept access point
    ARNs."""

    bucket_region: str = Field(alias="BucketRegion")
    """The Amazon Web Services Region of the Amazon S3 bucket where you want to save the cache report."""

    vpc_endpoint_dns_name: Optional[str] = Field(default=UNSET, alias="VPCEndpointDNSName")
    """The DNS name of the VPC endpoint associated with the Amazon S3 where you want to save the cache report.
    Optional."""

    inclusion_filters: Optional[list[CacheReportFilter]] = Field(default=UNSET, alias="InclusionFilters")
    """The list of filters and parameters that determine which files are included in the report. You must specify at
    least one value for InclusionFilters or ExclusionFilters in a StartCacheReport request."""

    exclusion_filters: Optional[list[CacheReportFilter]] = Field(default=UNSET, alias="ExclusionFilters")
    """The list of filters and parameters that determine which files are excluded from the report. You must specify at
    least one value for InclusionFilters or ExclusionFilters in a StartCacheReport request."""

    client_token: str = Field(alias="ClientToken")
    """A unique identifier that you use to ensure idempotent report generation if you need to retry an unsuccessful
    StartCacheReport request. If you retry a request, use the same ClientToken you specified in the initial request."""

    tags: Optional[list[TagModel]] = Field(default=UNSET, alias="Tags")
    """A list of up to 50 key/value tags that you can assign to the cache report. Using tags can help you categorize
    your reports and more easily locate them in search results."""


class StartCacheReportInputDict(TypedDict):
    file_share_arn: str
    role: str
    location_arn: str
    bucket_region: str
    vpc_endpoint_dns_name: NotRequired[str]
    inclusion_filters: NotRequired[list[CacheReportFilterDict]]
    exclusion_filters: NotRequired[list[CacheReportFilterDict]]
    client_token: str
    tags: NotRequired[list[TagModelDict]]
