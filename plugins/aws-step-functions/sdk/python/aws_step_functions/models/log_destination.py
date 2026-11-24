from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .cloud_watch_logs_log_group import CloudWatchLogsLogGroup, CloudWatchLogsLogGroupDict


class LogDestination(SdkBaseModel):
    cloud_watch_logs_log_group: Optional[CloudWatchLogsLogGroup] = Field(default=UNSET, alias="cloudWatchLogsLogGroup")


class LogDestinationDict(TypedDict):
    cloud_watch_logs_log_group: NotRequired[CloudWatchLogsLogGroupDict]
