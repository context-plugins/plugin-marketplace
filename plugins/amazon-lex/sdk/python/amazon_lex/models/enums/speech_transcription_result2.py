from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SpeechTranscriptionResult2(str, Enum):
    """Specifies whether the expected and actual speech transcriptions match or not, or if there is an error in
    execution."""

    MATCHED = "Matched"
    MISMATCHED = "Mismatched"
    EXECUTION_ERROR = "ExecutionError"

    __str__ = str.__str__


SpeechTranscriptionResult2OrStr: TypeAlias = Annotated[
    SpeechTranscriptionResult2 | str, open_enum_validator(SpeechTranscriptionResult2)
]
