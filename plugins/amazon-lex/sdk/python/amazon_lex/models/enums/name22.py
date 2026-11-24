from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Name22(str, Enum):
    """The metric that you requested. Count – The number of utterances. Missed – The number of utterances that Amazon
    Lex failed to recognize. Detected – The number of utterances that Amazon Lex managed to detect. UtteranceTimestamp –
    The date and time of the utterance."""

    COUNT = "Count"
    MISSED = "Missed"
    DETECTED = "Detected"
    UTTERANCE_TIMESTAMP = "UtteranceTimestamp"

    __str__ = str.__str__


Name22OrStr: TypeAlias = Annotated[Name22 | str, open_enum_validator(Name22)]
