from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SpeechModelPreference(str, Enum):
    """The speech-to-text model to use."""

    STANDARD = "Standard"
    NEURAL = "Neural"
    DEEPGRAM = "Deepgram"
    ADVANCED = "Advanced"

    __str__ = str.__str__


SpeechModelPreferenceOrStr: TypeAlias = Annotated[
    SpeechModelPreference | str, open_enum_validator(SpeechModelPreference)
]
