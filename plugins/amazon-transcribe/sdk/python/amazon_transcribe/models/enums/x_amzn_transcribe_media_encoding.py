from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XAmznTranscribeMediaEncoding(str, Enum):
    PCM = "pcm"
    OGG_OPUS = "ogg-opus"
    FLAC = "flac"

    __str__ = str.__str__


XAmznTranscribeMediaEncodingOrStr: TypeAlias = Annotated[
    XAmznTranscribeMediaEncoding | str, open_enum_validator(XAmznTranscribeMediaEncoding)
]
