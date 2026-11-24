from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AudioMetadata(SdkBaseModel):
    codec: Optional[str] = Field(default=UNSET, alias="Codec")
    """The audio codec used to encode or decode the audio stream."""

    duration_millis: Optional[int] = Field(default=UNSET, alias="DurationMillis")
    """The duration of the audio stream in milliseconds."""

    sample_rate: Optional[int] = Field(default=UNSET, alias="SampleRate")
    """The sample rate for the audio stream."""

    number_of_channels: Optional[int] = Field(default=UNSET, alias="NumberOfChannels")
    """The number of audio channels in the segment."""


class AudioMetadataDict(TypedDict):
    codec: NotRequired[str]
    duration_millis: NotRequired[int]
    sample_rate: NotRequired[int]
    number_of_channels: NotRequired[int]
