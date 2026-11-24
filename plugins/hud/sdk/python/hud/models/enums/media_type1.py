from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class MediaType1(str, Enum):
    AUDIO_WAV = "audio/wav"
    AUDIO_MPEG = "audio/mpeg"
    AUDIO_MP4 = "audio/mp4"
    AUDIO_AAC = "audio/aac"
    AUDIO_OGG = "audio/ogg"
    AUDIO_FLAC = "audio/flac"
    AUDIO_WEBM = "audio/webm"
    AUDIO_AIFF = "audio/aiff"

    __str__ = str.__str__


MediaType1OrStr: TypeAlias = Annotated[MediaType1 | str, open_enum_validator(MediaType1)]
