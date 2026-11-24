from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .audio_log_setting import AudioLogSetting, AudioLogSettingDict
from .text_log_setting import TextLogSetting, TextLogSettingDict


class ConversationLogSettings(SdkBaseModel):
    text_log_settings: Optional[list[TextLogSetting]] = Field(default=UNSET, alias="textLogSettings")
    """The Amazon CloudWatch Logs settings for logging text and metadata."""

    audio_log_settings: Optional[list[AudioLogSetting]] = Field(default=UNSET, alias="audioLogSettings")
    """The Amazon S3 settings for logging audio to an S3 bucket."""


class ConversationLogSettingsDict(TypedDict):
    text_log_settings: NotRequired[list[TextLogSettingDict]]
    audio_log_settings: NotRequired[list[AudioLogSettingDict]]
