from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .text_log_destination import TextLogDestination, TextLogDestinationDict


class TextLogSetting(SdkBaseModel):
    enabled: bool
    """Determines whether conversation logs should be stored for an alias."""

    destination: TextLogDestination
    selective_logging_enabled: Optional[bool] = Field(default=UNSET, alias="selectiveLoggingEnabled")
    """The option to enable selective conversation log capture for text."""


class TextLogSettingDict(TypedDict):
    enabled: bool
    destination: TextLogDestinationDict
    selective_logging_enabled: NotRequired[bool]
