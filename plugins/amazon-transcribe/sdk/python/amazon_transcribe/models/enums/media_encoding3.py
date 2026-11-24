from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class MediaEncoding3(str, Enum):
    """Provides the media encoding you specified in your request."""

    PCM = "pcm"
    OGG_OPUS = "ogg-opus"
    FLAC = "flac"
    G711_ALAW = "g711-alaw"
    G711_ULAW = "g711-ulaw"
    G729 = "g729"

    __str__ = str.__str__


MediaEncoding3OrStr: TypeAlias = Annotated[MediaEncoding3 | str, open_enum_validator(MediaEncoding3)]
