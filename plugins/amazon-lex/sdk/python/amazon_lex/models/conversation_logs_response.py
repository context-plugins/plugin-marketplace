from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .log_settings_response import LogSettingsResponse, LogSettingsResponseDict


class ConversationLogsResponse(SdkBaseModel):
    log_settings: Optional[list[LogSettingsResponse]] = Field(default=UNSET, alias="logSettings")
    """The settings for your conversation logs. You can log text, audio, or both."""

    iam_role_arn: Optional[str] = Field(default=UNSET, alias="iamRoleArn")
    """The Amazon Resource Name (ARN) of the IAM role used to write your logs to CloudWatch Logs or an S3 bucket."""


class ConversationLogsResponseDict(TypedDict):
    log_settings: NotRequired[list[LogSettingsResponseDict]]
    iam_role_arn: NotRequired[str]
