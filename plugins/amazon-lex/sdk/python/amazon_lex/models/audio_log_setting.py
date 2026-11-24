from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .audio_log_destination import AudioLogDestination, AudioLogDestinationDict


class AudioLogSetting(SdkBaseModel):
    enabled: bool
    """Determines whether audio logging in enabled for the bot."""

    destination: AudioLogDestination
    selective_logging_enabled: Optional[bool] = Field(default=UNSET, alias="selectiveLoggingEnabled")
    """The option to enable selective conversation log capture for audio."""


class AudioLogSettingDict(TypedDict):
    enabled: bool
    destination: AudioLogDestinationDict
    selective_logging_enabled: NotRequired[bool]
