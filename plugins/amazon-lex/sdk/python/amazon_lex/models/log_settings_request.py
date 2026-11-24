from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.destination1 import Destination1OrStr
from .enums.log_type1 import LogType1OrStr


class LogSettingsRequest(SdkBaseModel):
    log_type: LogType1OrStr = Field(alias="logType")
    """The type of logging to enable. Text logs are delivered to a CloudWatch Logs log group. Audio logs are delivered
    to an S3 bucket."""

    destination: Destination1OrStr
    """Where the logs will be delivered. Text logs are delivered to a CloudWatch Logs log group. Audio logs are
    delivered to an S3 bucket."""

    kms_key_arn: Optional[str] = Field(default=UNSET, alias="kmsKeyArn")
    """The Amazon Resource Name (ARN) of the AWS KMS customer managed key for encrypting audio logs delivered to an S3
    bucket. The key does not apply to CloudWatch Logs and is optional for S3 buckets."""

    resource_arn: str = Field(alias="resourceArn")
    """The Amazon Resource Name (ARN) of the CloudWatch Logs log group or S3 bucket where the logs should be
    delivered."""


class LogSettingsRequestDict(TypedDict):
    log_type: LogType1OrStr
    destination: Destination1OrStr
    kms_key_arn: NotRequired[str]
    resource_arn: str
