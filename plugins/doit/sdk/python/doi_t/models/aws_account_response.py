from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .aws_supported_feature import AwsSupportedFeature, AwsSupportedFeatureDict


class AwsAccountResponse(SdkBaseModel):
    account_id: Optional[str] = Field(default=UNSET, alias="accountID")
    """The AWS account ID."""

    role_arn: Optional[str] = Field(default=UNSET, alias="roleArn")
    """The ARN of the IAM role."""

    s3_bucket: Optional[str] = Field(default=UNSET, alias="s3Bucket")
    """S3 bucket name for real-time anomaly detection. Present only if real-time is enabled."""

    s3_bucket_region: Optional[str] = Field(default=UNSET, alias="s3BucketRegion")
    """AWS region of the S3 bucket. Present only if s3Bucket exists."""

    supported_features: Optional[list[AwsSupportedFeature]] = Field(default=UNSET, alias="supportedFeatures")
    """List of supported features and their permission status."""

    enabled_features: Optional[list[str]] = Field(default=UNSET, alias="enabledFeatures")
    """List of supported AWS features enabled by the caller. Returned in the same order as provided."""

    time_linked: Optional[str] = Field(default=UNSET, alias="timeLinked")
    """ISO 8601 timestamp of when the role was linked."""


class AwsAccountResponseDict(TypedDict):
    account_id: NotRequired[str]
    role_arn: NotRequired[str]
    s3_bucket: NotRequired[str]
    s3_bucket_region: NotRequired[str]
    supported_features: NotRequired[list[AwsSupportedFeatureDict]]
    enabled_features: NotRequired[list[str]]
    time_linked: NotRequired[str]
