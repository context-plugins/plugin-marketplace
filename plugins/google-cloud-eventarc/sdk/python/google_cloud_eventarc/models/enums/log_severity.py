from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class LogSeverity(str, Enum):
    """Optional. The minimum severity of logs that will be sent to Stackdriver/Platform Telemetry. Logs at severitiy ≥
    this value will be sent, unless it is NONE."""

    LOG_SEVERITY_UNSPECIFIED = "LOG_SEVERITY_UNSPECIFIED"
    NONE = "NONE"
    DEBUG = "DEBUG"
    INFO = "INFO"
    NOTICE = "NOTICE"
    WARNING = "WARNING"
    ERROR = "ERROR"
    CRITICAL = "CRITICAL"
    ALERT = "ALERT"
    EMERGENCY = "EMERGENCY"

    __str__ = str.__str__


LogSeverityOrStr: TypeAlias = Annotated[LogSeverity | str, open_enum_validator(LogSeverity)]
