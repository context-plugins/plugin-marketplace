from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class MediaFormat(str, Enum):
    """The format of the input media file."""

    MP3 = "mp3"
    MP4 = "mp4"
    WAV = "wav"
    FLAC = "flac"
    OGG = "ogg"
    AMR = "amr"
    WEBM = "webm"
    M4A = "m4a"

    __str__ = str.__str__


MediaFormatOrStr: TypeAlias = Annotated[MediaFormat | str, open_enum_validator(MediaFormat)]
