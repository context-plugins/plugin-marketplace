from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class MediaEncoding2(str, Enum):
    """The Media Encoding you specified in your request. Same as provided in the StartMedicalScribeStreamRequest"""

    PCM = "pcm"
    OGG_OPUS = "ogg-opus"
    FLAC = "flac"

    __str__ = str.__str__


MediaEncoding2OrStr: TypeAlias = Annotated[MediaEncoding2 | str, open_enum_validator(MediaEncoding2)]
