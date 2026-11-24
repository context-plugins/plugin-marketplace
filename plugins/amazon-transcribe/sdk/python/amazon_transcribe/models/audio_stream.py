from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .audio_event import AudioEvent, AudioEventDict
from .configuration_event import ConfigurationEvent, ConfigurationEventDict


class AudioStream(SdkBaseModel):
    """Exactly one member is set."""

    audio_event: Optional[AudioEvent] = Field(default=UNSET, alias="AudioEvent")
    configuration_event: Optional[ConfigurationEvent] = Field(default=UNSET, alias="ConfigurationEvent")


class AudioStreamDict(TypedDict):
    audio_event: NotRequired[AudioEventDict]
    configuration_event: NotRequired[ConfigurationEventDict]
