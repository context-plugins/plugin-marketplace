from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.log_severity import LogSeverityOrStr


class LoggingConfig1(SdkBaseModel):
    """Optional. Config to control Platform Logging for Pipelines."""

    log_severity: Optional[LogSeverityOrStr] = Field(default=UNSET, alias="logSeverity")
    """Optional. The minimum severity of logs that will be sent to Stackdriver/Platform Telemetry. Logs at severitiy ≥
    this value will be sent, unless it is NONE."""


class LoggingConfig1Dict(TypedDict):
    log_severity: NotRequired[LogSeverityOrStr]
