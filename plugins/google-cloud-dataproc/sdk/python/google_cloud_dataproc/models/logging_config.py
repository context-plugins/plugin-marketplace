from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.driver_log_levels import DriverLogLevelsOrStr


class LoggingConfig(SdkBaseModel):
    """The runtime logging config of the job."""

    driver_log_levels: Optional[dict[str, DriverLogLevelsOrStr]] = Field(default=UNSET, alias="driverLogLevels")
    """The per-package log levels for the driver. This can include "root" package name to configure rootLogger.
    Examples: - 'com.google = FATAL' - 'root = INFO' - 'org.apache = DEBUG'"""


class LoggingConfigDict(TypedDict):
    driver_log_levels: NotRequired[dict[str, DriverLogLevelsOrStr]]
