from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .log_settings_request import LogSettingsRequest, LogSettingsRequestDict


class ConversationLogsRequest(SdkBaseModel):
    log_settings: list[LogSettingsRequest] = Field(alias="logSettings")
    """The settings for your conversation logs. You can log the conversation text, conversation audio, or both."""

    iam_role_arn: str = Field(alias="iamRoleArn")
    """The Amazon Resource Name (ARN) of an IAM role with permission to write to your CloudWatch Logs for text logs and
    your S3 bucket for audio logs. If audio encryption is enabled, this role also provides access permission for the AWS
    KMS key used for encrypting audio logs. For more information, see Creating an IAM Role and Policy for Conversation
    Logs."""


class ConversationLogsRequestDict(TypedDict):
    log_settings: list[LogSettingsRequestDict]
    iam_role_arn: str
