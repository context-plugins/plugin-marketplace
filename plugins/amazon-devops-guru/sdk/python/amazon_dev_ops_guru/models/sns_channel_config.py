from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SnsChannelConfig(SdkBaseModel):
    topic_arn: Optional[str] = Field(default=UNSET, alias="TopicArn")
    """The Amazon Resource Name (ARN) of an Amazon Simple Notification Service topic."""


class SnsChannelConfigDict(TypedDict):
    topic_arn: NotRequired[str]
