from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Encoding(str, Enum):
    """Encoding of audio data sent in all ``RecognitionAudio`` messages. This field is optional for ``FLAC`` and ``WAV``
    audio files and required for all other audio formats. For details, see AudioEncoding."""

    ENCODING_UNSPECIFIED = "ENCODING_UNSPECIFIED"
    LINEAR16 = "LINEAR16"
    FLAC = "FLAC"
    MULAW = "MULAW"
    AMR = "AMR"
    AMR_WB = "AMR_WB"
    OGG_OPUS = "OGG_OPUS"
    SPEEX_WITH_HEADER_BYTE = "SPEEX_WITH_HEADER_BYTE"
    MP3 = "MP3"
    WEBM_OPUS = "WEBM_OPUS"
    ALAW = "ALAW"

    __str__ = str.__str__


EncodingOrStr: TypeAlias = Annotated[Encoding | str, open_enum_validator(Encoding)]
