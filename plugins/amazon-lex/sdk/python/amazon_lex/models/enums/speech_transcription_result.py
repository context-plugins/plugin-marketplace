from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SpeechTranscriptionResult(str, Enum):
    """The speech transcription success or failure details of the conversation."""

    MATCHED = "Matched"
    MISMATCHED = "Mismatched"
    EXECUTION_ERROR = "ExecutionError"

    __str__ = str.__str__


SpeechTranscriptionResultOrStr: TypeAlias = Annotated[
    SpeechTranscriptionResult | str, open_enum_validator(SpeechTranscriptionResult)
]
