from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class UnavailableReason(str, Enum):
    """Present when available is false: why AI transcription cannot be used."""

    UNSUPPORTED_INPUT = "unsupported_input"
    NO_SPEECH_TO_TRANSCRIBE = "no_speech_to_transcribe"
    CONTENT_INACCESSIBLE = "content_inaccessible"
    RETRY_CAPTIONS_FIRST = "retry_captions_first"
    INSUFFICIENT_CREDITS = "insufficient_credits"

    __str__ = str.__str__


UnavailableReasonOrStr: TypeAlias = Annotated[UnavailableReason | str, open_enum_validator(UnavailableReason)]
