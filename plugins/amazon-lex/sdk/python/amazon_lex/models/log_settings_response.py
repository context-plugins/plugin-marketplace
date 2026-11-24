from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.destination import DestinationOrStr
from .enums.log_type import LogTypeOrStr


class LogSettingsResponse(SdkBaseModel):
    log_type: Optional[LogTypeOrStr] = Field(default=UNSET, alias="logType")
    """The type of logging that is enabled."""

    destination: Optional[DestinationOrStr] = UNSET
    """The destination where logs are delivered."""

    kms_key_arn: Optional[str] = Field(default=UNSET, alias="kmsKeyArn")
    """The Amazon Resource Name (ARN) of the key used to encrypt audio logs in an S3 bucket."""

    resource_arn: Optional[str] = Field(default=UNSET, alias="resourceArn")
    """The Amazon Resource Name (ARN) of the CloudWatch Logs log group or S3 bucket where the logs are delivered."""

    resource_prefix: Optional[str] = Field(default=UNSET, alias="resourcePrefix")
    """The resource prefix is the first part of the S3 object key within the S3 bucket that you specified to contain
    audio logs. For CloudWatch Logs it is the prefix of the log stream name within the log group that you specified."""


class LogSettingsResponseDict(TypedDict):
    log_type: NotRequired[LogTypeOrStr]
    destination: NotRequired[DestinationOrStr]
    kms_key_arn: NotRequired[str]
    resource_arn: NotRequired[str]
    resource_prefix: NotRequired[str]
