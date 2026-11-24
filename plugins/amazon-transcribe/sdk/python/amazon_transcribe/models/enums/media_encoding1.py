from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class MediaEncoding1(str, Enum):
    """Provides the media encoding you specified in your Call Analytics request."""

    PCM = "pcm"
    OGG_OPUS = "ogg-opus"
    FLAC = "flac"
    G711_ALAW = "g711-alaw"
    G711_ULAW = "g711-ulaw"
    G729 = "g729"

    __str__ = str.__str__


MediaEncoding1OrStr: TypeAlias = Annotated[MediaEncoding1 | str, open_enum_validator(MediaEncoding1)]
