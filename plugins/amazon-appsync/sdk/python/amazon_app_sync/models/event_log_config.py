from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.log_level import LogLevelOrStr


class EventLogConfig(SdkBaseModel):
    log_level: LogLevelOrStr = Field(alias="logLevel")
    """The type of information to log for the Event API."""

    cloud_watch_logs_role_arn: str = Field(alias="cloudWatchLogsRoleArn")
    """The IAM service role that AppSync assumes to publish CloudWatch Logs in your account."""


class EventLogConfigDict(TypedDict):
    log_level: LogLevelOrStr
    cloud_watch_logs_role_arn: str
