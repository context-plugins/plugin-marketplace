from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CoreV1CloudconnectAwsAccountsRequest1(SdkBaseModel):
    s3_bucket: Optional[str] = Field(default=UNSET, alias="s3Bucket")
    """S3 bucket name for CloudTrail real-time anomaly detection. Required together with s3BucketRegion."""

    s3_bucket_region: Optional[str] = Field(default=UNSET, alias="s3BucketRegion")
    """AWS region of the S3 bucket. Required together with s3Bucket."""

    enabled_features: list[str] = Field(alias="enabledFeatures")
    """Declares which supported AWS features the caller intends to enable. Values must match feature names configured in
    awsFeaturePermissions on app/cloud-connect. The value is persisted and returned in account responses. When
    "real-time-data" is included, s3Bucket and s3BucketRegion are required; when it is not included, s3Bucket and
    s3BucketRegion are not allowed."""


class CoreV1CloudconnectAwsAccountsRequest1Dict(TypedDict):
    s3_bucket: NotRequired[str]
    s3_bucket_region: NotRequired[str]
    enabled_features: list[str]
