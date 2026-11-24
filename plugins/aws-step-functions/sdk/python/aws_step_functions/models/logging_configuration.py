from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.level import LevelOrStr
from .log_destination import LogDestination, LogDestinationDict


class LoggingConfiguration(SdkBaseModel):
    level: Optional[LevelOrStr] = UNSET
    """Defines which category of execution history events are logged."""

    include_execution_data: Optional[bool] = Field(default=UNSET, alias="includeExecutionData")
    """Determines whether execution data is included in your log. When set to false, data is excluded."""

    destinations: Optional[list[LogDestination]] = UNSET
    """An array of objects that describes where your execution history events will be logged. Limited to size 1.
    Required, if your log level is not set to OFF."""


class LoggingConfigurationDict(TypedDict):
    level: NotRequired[LevelOrStr]
    include_execution_data: NotRequired[bool]
    destinations: NotRequired[list[LogDestinationDict]]
