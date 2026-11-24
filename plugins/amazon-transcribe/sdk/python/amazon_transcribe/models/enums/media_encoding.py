from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class MediaEncoding(str, Enum):
    """The Media Encoding of the HealthScribe streaming session."""

    PCM = "pcm"
    OGG_OPUS = "ogg-opus"
    FLAC = "flac"

    __str__ = str.__str__


MediaEncodingOrStr: TypeAlias = Annotated[MediaEncoding | str, open_enum_validator(MediaEncoding)]
