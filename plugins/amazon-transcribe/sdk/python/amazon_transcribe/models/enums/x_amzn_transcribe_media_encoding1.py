from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmznTranscribeMediaEncoding1(str, Enum):
    PCM = "pcm"
    OGG_OPUS = "ogg-opus"
    FLAC = "flac"
    G711_ALAW = "g711-alaw"
    G711_ULAW = "g711-ulaw"
    G729 = "g729"

    __str__ = str.__str__


XAmznTranscribeMediaEncoding1OrStr: TypeAlias = Annotated[
    XAmznTranscribeMediaEncoding1 | str, open_enum_validator(XAmznTranscribeMediaEncoding1)
]
