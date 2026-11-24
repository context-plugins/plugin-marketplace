from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class NotificationChannel(SdkBaseModel):
    sns_topic_arn: str = Field(alias="SNSTopicArn")
    """The Amazon SNS topic to which Amazon Rekognition posts the completion status."""

    role_arn: str = Field(alias="RoleArn")
    """The ARN of an IAM role that gives Amazon Rekognition publishing permissions to the Amazon SNS topic."""


class NotificationChannelDict(TypedDict):
    sns_topic_arn: str
    role_arn: str
