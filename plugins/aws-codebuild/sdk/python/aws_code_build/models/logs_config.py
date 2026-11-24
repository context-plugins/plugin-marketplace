from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .cloud_watch_logs_config import CloudWatchLogsConfig, CloudWatchLogsConfigDict
from .s3_logs_config import S3LogsConfig, S3LogsConfigDict


class LogsConfig(SdkBaseModel):
    cloud_watch_logs: Optional[CloudWatchLogsConfig] = Field(default=UNSET, alias="cloudWatchLogs")
    s3_logs: Optional[S3LogsConfig] = Field(default=UNSET, alias="s3Logs")


class LogsConfigDict(TypedDict):
    cloud_watch_logs: NotRequired[CloudWatchLogsConfigDict]
    s3_logs: NotRequired[S3LogsConfigDict]
