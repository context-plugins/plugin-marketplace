from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SpeechTranscriptionResult1(str, Enum):
    """The speech transcription success or failure of the test result evaluation item."""

    MATCHED = "Matched"
    MISMATCHED = "Mismatched"
    EXECUTION_ERROR = "ExecutionError"

    __str__ = str.__str__


SpeechTranscriptionResult1OrStr: TypeAlias = Annotated[
    SpeechTranscriptionResult1 | str, open_enum_validator(SpeechTranscriptionResult1)
]
