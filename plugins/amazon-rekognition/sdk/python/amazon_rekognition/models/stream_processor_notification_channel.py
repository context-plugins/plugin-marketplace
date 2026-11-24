from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class StreamProcessorNotificationChannel(SdkBaseModel):
    sns_topic_arn: str = Field(alias="SNSTopicArn")
    """The Amazon Resource Number (ARN) of the Amazon Amazon Simple Notification Service topic to which Amazon
    Rekognition posts the completion status."""


class StreamProcessorNotificationChannelDict(TypedDict):
    sns_topic_arn: str
