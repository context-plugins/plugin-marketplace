from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Name21(str, Enum):
    """The metric for which you want to get utterance summary statistics. Count – The number of utterances. Missed – The
    number of utterances that Amazon Lex failed to recognize. Detected – The number of utterances that Amazon Lex
    managed to detect. UtteranceTimestamp – The date and time of the utterance."""

    COUNT = "Count"
    MISSED = "Missed"
    DETECTED = "Detected"
    UTTERANCE_TIMESTAMP = "UtteranceTimestamp"

    __str__ = str.__str__


Name21OrStr: TypeAlias = Annotated[Name21 | str, open_enum_validator(Name21)]
