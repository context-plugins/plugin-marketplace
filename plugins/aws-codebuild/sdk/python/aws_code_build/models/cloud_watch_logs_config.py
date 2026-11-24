from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status import StatusOrStr


class CloudWatchLogsConfig(SdkBaseModel):
    status: StatusOrStr
    """The current status of the logs in CloudWatch Logs for a build project. Valid values are: ENABLED: CloudWatch Logs
    are enabled for this build project. DISABLED: CloudWatch Logs are not enabled for this build project."""

    group_name: Optional[str] = Field(default=UNSET, alias="groupName")
    """The group name of the logs in CloudWatch Logs. For more information, see Working with Log Groups and Log
    Streams."""

    stream_name: Optional[str] = Field(default=UNSET, alias="streamName")
    """The prefix of the stream name of the CloudWatch Logs. For more information, see Working with Log Groups and Log
    Streams."""


class CloudWatchLogsConfigDict(TypedDict):
    status: StatusOrStr
    group_name: NotRequired[str]
    stream_name: NotRequired[str]
