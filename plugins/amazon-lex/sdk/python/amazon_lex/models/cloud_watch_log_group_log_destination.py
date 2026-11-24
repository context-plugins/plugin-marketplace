from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CloudWatchLogGroupLogDestination(SdkBaseModel):
    cloud_watch_log_group_arn: str = Field(alias="cloudWatchLogGroupArn")
    """The Amazon Resource Name (ARN) of the log group where text and metadata logs are delivered."""

    log_prefix: str = Field(alias="logPrefix")
    """The prefix of the log stream name within the log group that you specified"""


class CloudWatchLogGroupLogDestinationDict(TypedDict):
    cloud_watch_log_group_arn: str
    log_prefix: str
