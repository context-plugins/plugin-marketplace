from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.log_severity import LogSeverityOrStr


class LoggingConfig(SdkBaseModel):
    """The configuration for Platform Telemetry logging for Eventarc Advanced resources."""

    log_severity: Optional[LogSeverityOrStr] = Field(default=UNSET, alias="logSeverity")
    """Optional. The minimum severity of logs that will be sent to Stackdriver/Platform Telemetry. Logs at severitiy ≥
    this value will be sent, unless it is NONE."""


class LoggingConfigDict(TypedDict):
    log_severity: NotRequired[LogSeverityOrStr]
